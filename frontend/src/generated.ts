import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JointMoney
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const jointMoneyAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'member',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Deposit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'admin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'invites',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'GroupCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'member',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'MemberAccepted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'invites',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'MembersInvited',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'member',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdraw',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'acceptGroupInvitation',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'invites', internalType: 'address[]', type: 'address[]' }],
    name: 'createGroup',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'getGroup',
    outputs: [
      {
        name: '',
        internalType: 'struct JointMoney.Group',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'admin', internalType: 'address', type: 'address' },
          { name: 'members', internalType: 'address[]', type: 'address[]' },
          { name: 'invites', internalType: 'address[]', type: 'address[]' },
          { name: 'balance', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'getGroupBalance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getMyGroupIds',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getMyGroups',
    outputs: [
      {
        name: '',
        internalType: 'struct JointMoney.Group[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'admin', internalType: 'address', type: 'address' },
          { name: 'members', internalType: 'address[]', type: 'address[]' },
          { name: 'invites', internalType: 'address[]', type: 'address[]' },
          { name: 'balance', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'invites', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'inviteMembers',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'member', internalType: 'address', type: 'address' },
    ],
    name: 'removeMember',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address payable', type: 'address' },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 *
 */
export const jointMoneyAddress = {
  31337: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
} as const

/**
 *
 */
export const jointMoneyConfig = {
  address: jointMoneyAddress,
  abi: jointMoneyAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__
 *
 *
 */
export const useReadJointMoney = /*#__PURE__*/ createUseReadContract({
  abi: jointMoneyAbi,
  address: jointMoneyAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"getGroup"`
 *
 *
 */
export const useReadJointMoneyGetGroup = /*#__PURE__*/ createUseReadContract({
  abi: jointMoneyAbi,
  address: jointMoneyAddress,
  functionName: 'getGroup',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"getGroupBalance"`
 *
 *
 */
export const useReadJointMoneyGetGroupBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'getGroupBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"getMyGroupIds"`
 *
 *
 */
export const useReadJointMoneyGetMyGroupIds =
  /*#__PURE__*/ createUseReadContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'getMyGroupIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"getMyGroups"`
 *
 *
 */
export const useReadJointMoneyGetMyGroups = /*#__PURE__*/ createUseReadContract(
  {
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'getMyGroups',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__
 *
 *
 */
export const useWriteJointMoney = /*#__PURE__*/ createUseWriteContract({
  abi: jointMoneyAbi,
  address: jointMoneyAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"acceptGroupInvitation"`
 *
 *
 */
export const useWriteJointMoneyAcceptGroupInvitation =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'acceptGroupInvitation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"createGroup"`
 *
 *
 */
export const useWriteJointMoneyCreateGroup =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'createGroup',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"deposit"`
 *
 *
 */
export const useWriteJointMoneyDeposit = /*#__PURE__*/ createUseWriteContract({
  abi: jointMoneyAbi,
  address: jointMoneyAddress,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"inviteMembers"`
 *
 *
 */
export const useWriteJointMoneyInviteMembers =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'inviteMembers',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"removeMember"`
 *
 *
 */
export const useWriteJointMoneyRemoveMember =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'removeMember',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"withdraw"`
 *
 *
 */
export const useWriteJointMoneyWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: jointMoneyAbi,
  address: jointMoneyAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__
 *
 *
 */
export const useSimulateJointMoney = /*#__PURE__*/ createUseSimulateContract({
  abi: jointMoneyAbi,
  address: jointMoneyAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"acceptGroupInvitation"`
 *
 *
 */
export const useSimulateJointMoneyAcceptGroupInvitation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'acceptGroupInvitation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"createGroup"`
 *
 *
 */
export const useSimulateJointMoneyCreateGroup =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'createGroup',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"deposit"`
 *
 *
 */
export const useSimulateJointMoneyDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"inviteMembers"`
 *
 *
 */
export const useSimulateJointMoneyInviteMembers =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'inviteMembers',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"removeMember"`
 *
 *
 */
export const useSimulateJointMoneyRemoveMember =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'removeMember',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"withdraw"`
 *
 *
 */
export const useSimulateJointMoneyWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__
 *
 *
 */
export const useWatchJointMoneyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__ and `eventName` set to `"Deposit"`
 *
 *
 */
export const useWatchJointMoneyDepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    eventName: 'Deposit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__ and `eventName` set to `"GroupCreated"`
 *
 *
 */
export const useWatchJointMoneyGroupCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    eventName: 'GroupCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__ and `eventName` set to `"MemberAccepted"`
 *
 *
 */
export const useWatchJointMoneyMemberAcceptedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    eventName: 'MemberAccepted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__ and `eventName` set to `"MembersInvited"`
 *
 *
 */
export const useWatchJointMoneyMembersInvitedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    eventName: 'MembersInvited',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__ and `eventName` set to `"Withdraw"`
 *
 *
 */
export const useWatchJointMoneyWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    eventName: 'Withdraw',
  })
