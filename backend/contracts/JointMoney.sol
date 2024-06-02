// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract JointMoney {
    struct Group {
        uint id;
        address admin;
        address[] members;
        address[] invites;
        uint balance;
    }
    mapping(uint => Group) public groups;
    mapping(address => uint[]) public userGroups;
    mapping(address => uint[]) public userGroupInvites;

    event GroupCreated(uint id, address admin, address[] invites);
    event MembersInvited(uint id, address[] invites);
    event MemberAccepted(uint id, address member);
    event Deposit(uint id, address member, uint amount);
    event Withdraw(uint id, address member, uint amount);
    event MemberRemoved(uint id, address member);
    event InvitationCancelled(uint id, address invitee);
    event GroupDeleted(uint id);

    error GroupNotFound();

    function getGroup(uint id) public view returns (Group memory) {
        if (groups[id].members.length == 0) {
            revert GroupNotFound();
        }

        return groups[id];
    }

    function createGroup(
        address[] memory invites
    ) public payable returns (uint) {
        uint id = uint(
            keccak256(abi.encodePacked(block.timestamp, msg.sender))
        );

        bool groupExists = groups[id].members.length > 0;
        require(!groupExists, "Group already exists");

        address[] memory members = new address[](1);
        members[0] = msg.sender;
        groups[id] = Group(id, msg.sender, members, invites, msg.value);
        userGroups[msg.sender].push(id);

        for (uint i = 0; i < invites.length; i++) {
            userGroupInvites[invites[i]].push(id);
        }

        emit GroupCreated(id, msg.sender, invites);

        return id;
    }

    function inviteMembers(uint id, address[] memory invites) public {
        require(
            groups[id].admin == msg.sender,
            "Only admin can invite members"
        );

        for (uint i = 0; i < invites.length; i++) {
            // Check if the invitee is already a member
            for (uint j = 0; j < groups[id].members.length; j++) {
                require(
                    groups[id].members[j] != invites[i],
                    "Invitee is already a member"
                );
            }
            // Check if the invitee is already invited
            for (uint j = 0; j < groups[id].invites.length; j++) {
                require(
                    groups[id].invites[j] != invites[i],
                    "Invitee is already invited"
                );
            }
            groups[id].invites.push(invites[i]);
            userGroupInvites[invites[i]].push(id);
        }

        emit MembersInvited(id, invites);
    }

    function acceptGroupInvitation(uint id) public {
        address[] memory invites = groups[id].invites;
        bool isInvited = false;
        for (uint i = 0; i < invites.length; i++) {
            if (invites[i] == msg.sender) {
                isInvited = true;
                break;
            }
        }
        require(isInvited, "You are not invited to this group");

        groups[id].members.push(msg.sender);
        userGroups[msg.sender].push(id);

        address[] memory newInvites = new address[](invites.length - 1);
        uint j = 0;
        for (uint i = 0; i < invites.length; i++) {
            if (invites[i] != msg.sender) {
                newInvites[j] = invites[i];
                j++;
            }
        }

        groups[id].invites = newInvites;

        uint[] memory newUserGroupInvites = new uint[](
            userGroupInvites[msg.sender].length - 1
        );
        j = 0;
        for (uint i = 0; i < userGroupInvites[msg.sender].length; i++) {
            if (userGroupInvites[msg.sender][i] != id) {
                newUserGroupInvites[j] = userGroupInvites[msg.sender][i];
                j++;
            }
        }
        userGroupInvites[msg.sender] = newUserGroupInvites;

        emit MemberAccepted(id, msg.sender);
    }

    function getGroupBalance(uint id) public view returns (uint) {
        return groups[id].balance;
    }

    function deposit(uint id) public payable {
        _ensureIsMember(id);

        Group storage group = groups[id];

        group.balance += msg.value;

        emit Deposit(id, msg.sender, msg.value);
    }

    function withdraw(uint id, uint amount, address payable to) public {
        _ensureIsMember(id);

        Group storage group = groups[id];

        require(group.balance >= amount, "Insufficient balance");

        group.balance -= amount;

        to.transfer(amount);

        emit Withdraw(id, msg.sender, amount);
    }

    function removeMember(uint id, address member) public {
        require(
            groups[id].admin == msg.sender,
            "Only admin can remove members"
        );

        address[] memory members = groups[id].members;
        bool isMember = false;
        for (uint i = 0; i < members.length; i++) {
            if (members[i] == member) {
                isMember = true;
                break;
            }
        }
        require(isMember, "Member not found");

        require(member != groups[id].admin, "Admin cannot remove himself");

        address[] memory newMembers = new address[](members.length - 1);
        uint j = 0;
        for (uint i = 0; i < members.length; i++) {
            if (members[i] != member) {
                newMembers[j] = members[i];
                j++;
            }
        }

        groups[id].members = newMembers;

        uint[] memory userGroupIds = userGroups[member];
        uint[] memory newUserGroupIds = new uint[](userGroupIds.length - 1);
        j = 0;
        for (uint i = 0; i < userGroupIds.length; i++) {
            if (userGroupIds[i] != id) {
                newUserGroupIds[j] = userGroupIds[i];
                j++;
            }
        }
        userGroups[member] = newUserGroupIds;

        emit MemberRemoved(id, member);
    }

    function getMyGroupIds() public view returns (uint[] memory) {
        return userGroups[msg.sender];
    }

    function getMyGroups() public view returns (Group[] memory) {
        uint[] memory ids = userGroups[msg.sender];
        Group[] memory myGroups = new Group[](ids.length);
        for (uint i = 0; i < ids.length; i++) {
            myGroups[i] = groups[ids[i]];
        }
        return myGroups;
    }

    function cancelInvitation(uint id, address invitee) public {
        require(
            groups[id].admin == msg.sender,
            "Only admin can cancel invitations"
        );

        address[] memory invites = groups[id].invites;
        bool isInvited = false;
        for (uint i = 0; i < invites.length; i++) {
            if (invites[i] == invitee) {
                isInvited = true;
                break;
            }
        }
        require(isInvited, "Invitee not found");

        address[] memory newInvites = new address[](invites.length - 1);
        uint j = 0;
        for (uint i = 0; i < invites.length; i++) {
            if (invites[i] != invitee) {
                newInvites[j] = invites[i];
                j++;
            }
        }

        groups[id].invites = newInvites;

        uint[] memory userGroupIds = userGroupInvites[invitee];
        uint[] memory newUserGroupIds = new uint[](userGroupIds.length - 1);
        j = 0;
        for (uint i = 0; i < userGroupIds.length; i++) {
            if (userGroupIds[i] != id) {
                newUserGroupIds[j] = userGroupIds[i];
                j++;
            }
        }
        userGroupInvites[invitee] = newUserGroupIds;

        emit InvitationCancelled(id, invitee);
    }

    function getMyInvites() public view returns (uint[] memory) {
        return userGroupInvites[msg.sender];
    }

    function deleteGroup(uint id) public {
        require(
            groups[id].admin == msg.sender,
            "Only admin can delete the group"
        );

        // send all balance to admin
        address payable admin = payable(groups[id].admin);
        admin.transfer(groups[id].balance);

        address[] memory members = groups[id].members;
        for (uint i = 0; i < members.length; i++) {
            uint[] memory userGroupIds = userGroups[members[i]];
            uint[] memory newUserGroupIds = new uint[](userGroupIds.length - 1);
            uint j = 0;
            for (uint k = 0; k < userGroupIds.length; k++) {
                if (userGroupIds[k] != id) {
                    newUserGroupIds[j] = userGroupIds[k];
                    j++;
                }
            }
            userGroups[members[i]] = newUserGroupIds;
        }

        address[] memory invites = groups[id].invites;
        for (uint i = 0; i < invites.length; i++) {
            uint[] memory userGroupIds = userGroupInvites[invites[i]];
            uint[] memory newUserGroupIds = new uint[](userGroupIds.length - 1);
            uint j = 0;
            for (uint k = 0; k < userGroupIds.length; k++) {
                if (userGroupIds[k] != id) {
                    newUserGroupIds[j] = userGroupIds[k];
                    j++;
                }
            }
            userGroupInvites[invites[i]] = newUserGroupIds;
        }

        delete groups[id];

        emit GroupDeleted(id);
    }

    function _ensureIsMember(uint id) private view {
        address[] memory members = groups[id].members;
        bool isMember = false;
        for (uint i = 0; i < members.length; i++) {
            if (members[i] == msg.sender) {
                isMember = true;
                break;
            }
        }
        require(isMember, "You are not a member of this group");
    }
}
