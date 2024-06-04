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
  { type: 'error', inputs: [], name: 'GroupNotFound' },
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
    name: 'AllowanceSet',
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
    ],
    name: 'GroupDeleted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'invitee',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'InvitationCancelled',
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
        name: 'member',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'MemberRemoved',
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
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'invitee', internalType: 'address', type: 'address' },
    ],
    name: 'cancelInvitation',
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
    name: 'deleteGroup',
    outputs: [],
    stateMutability: 'nonpayable',
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
    inputs: [],
    name: 'getMyInvites',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'groups',
    outputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'admin', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
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
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'memberDailyAllowanceMap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'memberDailySpentMap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'memberLastSpentAtMap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
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
      { name: 'member', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'userGroupInvites',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'userGroups',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"getMyInvites"`
 *
 *
 */
export const useReadJointMoneyGetMyInvites =
  /*#__PURE__*/ createUseReadContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'getMyInvites',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"groups"`
 *
 *
 */
export const useReadJointMoneyGroups = /*#__PURE__*/ createUseReadContract({
  abi: jointMoneyAbi,
  address: jointMoneyAddress,
  functionName: 'groups',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"memberDailyAllowanceMap"`
 *
 *
 */
export const useReadJointMoneyMemberDailyAllowanceMap =
  /*#__PURE__*/ createUseReadContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'memberDailyAllowanceMap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"memberDailySpentMap"`
 *
 *
 */
export const useReadJointMoneyMemberDailySpentMap =
  /*#__PURE__*/ createUseReadContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'memberDailySpentMap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"memberLastSpentAtMap"`
 *
 *
 */
export const useReadJointMoneyMemberLastSpentAtMap =
  /*#__PURE__*/ createUseReadContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'memberLastSpentAtMap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"userGroupInvites"`
 *
 *
 */
export const useReadJointMoneyUserGroupInvites =
  /*#__PURE__*/ createUseReadContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'userGroupInvites',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"userGroups"`
 *
 *
 */
export const useReadJointMoneyUserGroups = /*#__PURE__*/ createUseReadContract({
  abi: jointMoneyAbi,
  address: jointMoneyAddress,
  functionName: 'userGroups',
})

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
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"cancelInvitation"`
 *
 *
 */
export const useWriteJointMoneyCancelInvitation =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'cancelInvitation',
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
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"deleteGroup"`
 *
 *
 */
export const useWriteJointMoneyDeleteGroup =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'deleteGroup',
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
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"setAllowance"`
 *
 *
 */
export const useWriteJointMoneySetAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'setAllowance',
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
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"cancelInvitation"`
 *
 *
 */
export const useSimulateJointMoneyCancelInvitation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'cancelInvitation',
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
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"deleteGroup"`
 *
 *
 */
export const useSimulateJointMoneyDeleteGroup =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'deleteGroup',
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
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"setAllowance"`
 *
 *
 */
export const useSimulateJointMoneySetAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    functionName: 'setAllowance',
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
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__ and `eventName` set to `"AllowanceSet"`
 *
 *
 */
export const useWatchJointMoneyAllowanceSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    eventName: 'AllowanceSet',
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
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__ and `eventName` set to `"GroupDeleted"`
 *
 *
 */
export const useWatchJointMoneyGroupDeletedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    eventName: 'GroupDeleted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__ and `eventName` set to `"InvitationCancelled"`
 *
 *
 */
export const useWatchJointMoneyInvitationCancelledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    eventName: 'InvitationCancelled',
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
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__ and `eventName` set to `"MemberRemoved"`
 *
 *
 */
export const useWatchJointMoneyMemberRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyAbi,
    address: jointMoneyAddress,
    eventName: 'MemberRemoved',
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
