import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { expect } from "chai";
import hre from "hardhat";
import { MockErc20, JointMoneyErc20 } from "../typechain-types";

describe("JointMoney", () => {
  let owner: HardhatEthersSigner;
  let addr1: HardhatEthersSigner;

  let token: MockErc20;
  let jointMoney: JointMoneyErc20;

  before(async function () {
    [owner, addr1] = await hre.ethers.getSigners();

    token = await hre.ethers.deployContract("MockErc20", [
      "MockToken",
      "MT",
      owner.address,
      1000000,
    ]);
    await token.waitForDeployment();

    jointMoney = await hre.ethers.deployContract("JointMoneyErc20");
    await jointMoney.waitForDeployment();

    await token.transfer(addr1.address, 1000);
  });

  it("user can create a group", async () => {
    await expect(jointMoney.createGroup())
      .to.emit(jointMoney, "GroupCreated")
      .withArgs(1, owner.address);
  });

  it("user can deposit into a group", async () => {
    await token.approve(await jointMoney.getAddress(), 100);

    await expect(jointMoney.deposit(1, await token.getAddress(), 100))
      .to.emit(jointMoney, "GroupDeposited")
      .withArgs(1, owner.address, await token.getAddress(), 100);
  });

  it("groups balance should be updated", async () => {
    const balance = await jointMoney.groupTokenAmount(
      1,
      await token.getAddress()
    );
    expect(balance).to.equal(100);
  });

  it("user can withdraw from a group", async () => {
    await expect(
      jointMoney.withdraw(1, await token.getAddress(), 50, owner.address)
    )
      .to.emit(jointMoney, "GroupWithdrawn")
      .withArgs(1, owner.address, await token.getAddress(), 50);
  });

  it("groups balance should be updated", async () => {
    const balance = await jointMoney.groupTokenAmount(
      1,
      await token.getAddress()
    );
    expect(balance).to.equal(50);
  });

  it("non member cannot deposit", async () => {
    const jointMoneyAsAddr1 = jointMoney.connect(addr1);
    await token.connect(addr1).approve(await jointMoney.getAddress(), 100);
    await expect(
      jointMoneyAsAddr1.deposit(1, await token.getAddress(), 100)
    ).to.be.revertedWith("You are not a member of this group");
  });

  it("non member cannot withdraw", async () => {
    const jointMoneyAsAddr1 = jointMoney.connect(addr1);
    await expect(
      jointMoneyAsAddr1.withdraw(1, await token.getAddress(), 50, addr1.address)
    ).to.be.revertedWith("You are not a member of this group");
  });

  it("users can get invited to a group", async () => {
    await expect(jointMoney.invite(1, addr1.address))
      .to.emit(jointMoney, "GroupInvited")
      .withArgs(1, addr1.address);
  });

  it("invited users can join a group", async () => {
    const jointMoneyAsAddr1 = jointMoney.connect(addr1);
    await expect(jointMoneyAsAddr1.accept(1))
      .to.emit(jointMoney, "GroupAccepted")
      .withArgs(1, addr1.address);
  });
});
