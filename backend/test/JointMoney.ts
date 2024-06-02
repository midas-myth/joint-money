import { expect } from "chai";
import hre from "hardhat";

import { GroupCreatedEvent } from "../typechain-types/JointMoney";

describe("JointMoney", () => {
  describe("Deployment", () => {
    it("works", async () => {
      const jointMoney = await hre.ethers.deployContract("JointMoney");

      // create group with our address
      const [signerA, signerB] = await hre.ethers.getSigners();

      const tx = await jointMoney.createGroup([]);

      const receipt = await tx.wait();

      const eventFragment = jointMoney.interface.getEvent("GroupCreated");

      const log = receipt?.logs.find(
        (log) => log.topics[0] === eventFragment.topicHash
      );

      if (!log) {
        throw new Error("GroupCreated event not found");
      }

      const parsedLog = jointMoney.interface.decodeEventLog(
        eventFragment,
        log?.data,
        log?.topics
      );

      const groupCreatedEvent: GroupCreatedEvent.OutputObject = {
        admin: parsedLog.admin,
        id: parsedLog.id,
        invites: Array.from(parsedLog.invites),
      };

      expect(groupCreatedEvent.admin).to.equal(signerA.address);

      // send invite to signerB
      await jointMoney.inviteMembers(groupCreatedEvent.id, [signerB.address]);

      // check if signerB is invited
      {
        const group = await jointMoney.getGroup(groupCreatedEvent.id);

        expect(group.invites).to.include(signerB.address);
      }

      // accept invite as signerB
      // await jointMoney.acceptGroupInvitation(groupCreatedEvent.id);
      const jointMoneyAsSignerB = jointMoney.connect(signerB);
      await jointMoneyAsSignerB.acceptGroupInvitation(groupCreatedEvent.id);

      // check if signerB is in the group
      {
        const group = await jointMoney.getGroup(groupCreatedEvent.id);

        expect(group.members).to.include(signerB.address);
      }

      // get money sum
      const groupSum = await jointMoney.getGroupBalance(groupCreatedEvent.id);

      expect(groupSum).to.equal(0);

      // add money

      await jointMoney.deposit(groupCreatedEvent.id, { value: 100n });

      {
        const groupSum = await jointMoney.getGroupBalance(groupCreatedEvent.id);

        expect(groupSum).to.equal(100n);
      }

      const signerBBalance = await hre.ethers.provider.getBalance(
        signerB.address
      );

      const withdrawTx = await jointMoneyAsSignerB.withdraw(
        groupCreatedEvent.id,
        50n,
        signerB.address
      );

      const withdrawReceipt = await withdrawTx.wait();
      const gasUsed = withdrawReceipt!.gasUsed * withdrawTx.gasPrice;

      const signerBBalanceAfterWithdraw = await hre.ethers.provider.getBalance(
        signerB.address
      );

      {
        const groupSum = await jointMoney.getGroupBalance(groupCreatedEvent.id);

        expect(groupSum).to.equal(50n);

        expect(signerBBalanceAfterWithdraw).to.equal(
          signerBBalance + 50n - gasUsed
        );
      }

      // remove member

      await jointMoney.removeMember(groupCreatedEvent.id, signerB.address);

      {
        const group = await jointMoney.getGroup(groupCreatedEvent.id);

        expect(group.members).to.not.include(signerB.address);
      }
    });
  });
});
