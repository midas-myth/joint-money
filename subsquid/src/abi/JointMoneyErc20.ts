import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    GroupAccepted: event("0xed4f111f70562a5298608713567796b377114ad571dc38199574b834a178b7b5", {"id": p.uint256, "member": p.address}),
    GroupCreated: event("0x6958b51b54d963fa8eeeea5b61b83a9ad28f9ee9d5a2f1b8495e6866cb534bb1", {"id": p.uint256, "admin": p.address}),
    GroupDeposited: event("0xb449ec3adad508f053ac18a61aa36ec4683139f1256ee66e01add69776db5494", {"id": p.uint256, "member": p.address, "tokenAddress": p.address, "amount": p.uint256}),
    GroupInvited: event("0x6d965d2d2321066cf72583f5295125a91ed42fdf84eb066b7779d0598357afef", {"id": p.uint256, "invitee": p.address}),
    GroupWithdrawn: event("0x95c8fde303c0b32a8df290eedf185ddc29f5b760747529f24753957cc42ce590", {"id": p.uint256, "member": p.address, "token": p.address, "amount": p.uint256}),
}

export const functions = {
    accept: fun("0x19b05f49", {"groupId": p.uint256}, ),
    createGroup: fun("0x575185ed", {}, ),
    deposit: fun("0xbc157ac1", {"groupId": p.uint256, "tokenAddress": p.address, "amount": p.uint256}, ),
    getBalance: viewFun("0xb0a79459", {"groupId": p.uint256, "token": p.address}, p.uint256),
    groupCount: viewFun("0x8f23b326", {}, p.uint256),
    groupSettings: viewFun("0xccba8905", {"_0": p.uint256}, p.address),
    groupTokenAmount: viewFun("0xc19c90f1", {"_0": p.uint256, "_1": p.address}, p.uint256),
    groupUserSettings: viewFun("0x47749f28", {"_0": p.uint256, "_1": p.address}, {"isMember": p.bool, "dailyAllowance": p.uint256, "dailySpent": p.uint256, "lastSpentAt": p.uint256, "isInvited": p.bool}),
    invite: fun("0x7ae69023", {"groupId": p.uint256, "invitee": p.address}, ),
    setAllowance: fun("0x9606a9ed", {"groupId": p.uint256, "user": p.address, "amount": p.uint256}, ),
    withdraw: fun("0x5f0f48bd", {"groupId": p.uint256, "tokenAddress": p.address, "amount": p.uint256, "to": p.address}, ),
}

export class Contract extends ContractBase {

    getBalance(groupId: GetBalanceParams["groupId"], token: GetBalanceParams["token"]) {
        return this.eth_call(functions.getBalance, {groupId, token})
    }

    groupCount() {
        return this.eth_call(functions.groupCount, {})
    }

    groupSettings(_0: GroupSettingsParams["_0"]) {
        return this.eth_call(functions.groupSettings, {_0})
    }

    groupTokenAmount(_0: GroupTokenAmountParams["_0"], _1: GroupTokenAmountParams["_1"]) {
        return this.eth_call(functions.groupTokenAmount, {_0, _1})
    }

    groupUserSettings(_0: GroupUserSettingsParams["_0"], _1: GroupUserSettingsParams["_1"]) {
        return this.eth_call(functions.groupUserSettings, {_0, _1})
    }
}

/// Event types
export type GroupAcceptedEventArgs = EParams<typeof events.GroupAccepted>
export type GroupCreatedEventArgs = EParams<typeof events.GroupCreated>
export type GroupDepositedEventArgs = EParams<typeof events.GroupDeposited>
export type GroupInvitedEventArgs = EParams<typeof events.GroupInvited>
export type GroupWithdrawnEventArgs = EParams<typeof events.GroupWithdrawn>

/// Function types
export type AcceptParams = FunctionArguments<typeof functions.accept>
export type AcceptReturn = FunctionReturn<typeof functions.accept>

export type CreateGroupParams = FunctionArguments<typeof functions.createGroup>
export type CreateGroupReturn = FunctionReturn<typeof functions.createGroup>

export type DepositParams = FunctionArguments<typeof functions.deposit>
export type DepositReturn = FunctionReturn<typeof functions.deposit>

export type GetBalanceParams = FunctionArguments<typeof functions.getBalance>
export type GetBalanceReturn = FunctionReturn<typeof functions.getBalance>

export type GroupCountParams = FunctionArguments<typeof functions.groupCount>
export type GroupCountReturn = FunctionReturn<typeof functions.groupCount>

export type GroupSettingsParams = FunctionArguments<typeof functions.groupSettings>
export type GroupSettingsReturn = FunctionReturn<typeof functions.groupSettings>

export type GroupTokenAmountParams = FunctionArguments<typeof functions.groupTokenAmount>
export type GroupTokenAmountReturn = FunctionReturn<typeof functions.groupTokenAmount>

export type GroupUserSettingsParams = FunctionArguments<typeof functions.groupUserSettings>
export type GroupUserSettingsReturn = FunctionReturn<typeof functions.groupUserSettings>

export type InviteParams = FunctionArguments<typeof functions.invite>
export type InviteReturn = FunctionReturn<typeof functions.invite>

export type SetAllowanceParams = FunctionArguments<typeof functions.setAllowance>
export type SetAllowanceReturn = FunctionReturn<typeof functions.setAllowance>

export type WithdrawParams = FunctionArguments<typeof functions.withdraw>
export type WithdrawReturn = FunctionReturn<typeof functions.withdraw>

