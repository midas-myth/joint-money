// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract JointMoneyErc20 {
    uint public groupCount = 0;

    mapping(uint => mapping(address => uint256)) public groupTokenAmount;

    struct UserSettings {
        bool isMember;
        // Allowance details
        uint dailyAllowance;
        uint dailySpent;
        uint lastSpentAt;
        // Invitation details
        bool isInvited;
    }

    mapping(uint => mapping(address => UserSettings)) public groupUserSettings;

    struct GroupSettings {
        address admin;
    }

    mapping(uint => GroupSettings) public groupSettings;

    event GroupCreated(uint id, address admin);
    event GroupDeposited(
        uint id,
        address member,
        address tokenAddress,
        uint amount
    );
    event GroupWithdrawn(uint id, address member, address token, uint amount);
    event GroupInvited(uint id, address invitee);
    event GroupAccepted(uint id, address member);
    event GroupAllowanceSet(uint id, address member, uint amount);
    event GroupInvitationCancelled(uint id, address invitee);
    event GroupLeft(uint id, address member);

    function createGroup() public {
        groupCount++;
        groupSettings[groupCount] = GroupSettings(msg.sender);
        groupUserSettings[groupCount][msg.sender] = UserSettings({
            isMember: true,
            dailyAllowance: type(uint).max,
            dailySpent: 0,
            lastSpentAt: 0,
            isInvited: false
        });

        emit GroupCreated(groupCount, msg.sender);
    }

    function deposit(uint groupId, address tokenAddress, uint amount) public {
        require(
            groupUserSettings[groupId][msg.sender].isMember,
            "You are not a member of this group"
        );

        require(
            IERC20(tokenAddress).transferFrom(
                msg.sender,
                address(this),
                amount
            ),
            "Transfer failed"
        );

        groupTokenAmount[groupId][tokenAddress] += amount;
        emit GroupDeposited(groupId, msg.sender, tokenAddress, amount);
    }

    function getBalance(
        uint groupId,
        address token
    ) public view returns (uint) {
        return groupTokenAmount[groupId][token];
    }

    function withdraw(
        uint groupId,
        address tokenAddress,
        uint amount,
        address to
    ) public {
        require(
            groupUserSettings[groupId][msg.sender].isMember,
            "You are not a member of this group"
        );

        require(
            groupTokenAmount[groupId][tokenAddress] >= amount,
            "Amount exceeds balance"
        );

        uint memberDailySpent = groupUserSettings[groupId][msg.sender]
            .dailySpent;
        uint lastSpentAt = groupUserSettings[groupId][msg.sender].lastSpentAt;
        uint memberDailyAllowance = groupUserSettings[groupId][msg.sender]
            .dailyAllowance;

        bool isToday = lastSpentAt / 86400 == block.timestamp / 86400;

        uint leftToday = 0;
        if (isToday && memberDailyAllowance > memberDailySpent) {
            leftToday = memberDailyAllowance - memberDailySpent;
        } else {
            leftToday = memberDailyAllowance;
        }

        require(leftToday >= amount, "Daily allowance exceeded");

        if (isToday) {
            memberDailySpent += amount;
        } else {
            memberDailySpent = amount;
        }

        groupUserSettings[groupId][msg.sender].dailySpent = memberDailySpent;
        groupUserSettings[groupId][msg.sender].lastSpentAt = block.timestamp;

        IERC20 token = IERC20(tokenAddress);
        require(token.transfer(to, amount), "Transfer failed");

        groupTokenAmount[groupId][tokenAddress] -= amount;

        emit GroupWithdrawn(groupId, msg.sender, tokenAddress, amount);
    }

    function invite(uint groupId, address invitee) public {
        require(
            groupSettings[groupId].admin == msg.sender,
            "You are not the admin of this group"
        );

        groupUserSettings[groupId][invitee].isInvited = true;

        emit GroupInvited(groupId, invitee);
    }

    function accept(uint groupId) public {
        require(
            groupUserSettings[groupId][msg.sender].isInvited,
            "You are not invited to this group"
        );

        groupUserSettings[groupId][msg.sender].isMember = true;
        groupUserSettings[groupId][msg.sender].isInvited = false;

        emit GroupAccepted(groupId, msg.sender);
    }

    function setAllowance(uint groupId, address user, uint amount) public {
        require(
            groupSettings[groupId].admin == msg.sender,
            "You are not the admin of this group"
        );

        groupUserSettings[groupId][user].dailyAllowance = amount;
        emit GroupAllowanceSet(groupId, user, amount);
    }

    function cancelInvitatioin(uint groupId, address invitee) public {
        require(
            groupSettings[groupId].admin == msg.sender,
            "You are not the admin of this group"
        );

        require(
            groupUserSettings[groupId][invitee].isInvited,
            "User is not invited"
        );

        groupUserSettings[groupId][invitee].isInvited = false;
        emit GroupInvitationCancelled(groupId, invitee);
    }

    function leaveGroup(uint groupId) public {
        require(
            groupUserSettings[groupId][msg.sender].isMember,
            "You are not a member of this group"
        );

        require(
            groupSettings[groupId].admin != msg.sender,
            "Admin cannot leave the group"
        );

        delete groupUserSettings[groupId][msg.sender];
        emit GroupLeft(groupId, msg.sender);
    }

    function removeMember(uint groupId, address member) public {
        require(
            groupSettings[groupId].admin == msg.sender,
            "You are not the admin of this group"
        );

        require(
            groupSettings[groupId].admin != member,
            "Admin cannot be removed"
        );

        delete groupUserSettings[groupId][member];
        emit GroupLeft(groupId, member);
    }
}
