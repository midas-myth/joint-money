import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JointMoney
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JointMoneyErc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const jointMoneyErc20Abi = [
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
    name: 'GroupAccepted',
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
    name: 'GroupAllowanceSet',
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
      {
        name: 'tokenAddress',
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
    name: 'GroupDeposited',
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
    name: 'GroupInvitationCancelled',
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
    name: 'GroupInvited',
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
    name: 'GroupLeft',
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
        name: 'token',
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
    name: 'GroupWithdrawn',
  },
  {
    type: 'function',
    inputs: [{ name: 'groupId', internalType: 'uint256', type: 'uint256' }],
    name: 'accept',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'groupId', internalType: 'uint256', type: 'uint256' },
      { name: 'invitee', internalType: 'address', type: 'address' },
    ],
    name: 'cancelInvitatioin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'createGroup',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'groupId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenAddress', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'groupId', internalType: 'uint256', type: 'uint256' },
      { name: 'token', internalType: 'address', type: 'address' },
    ],
    name: 'getBalance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'groupCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'groupSettings',
    outputs: [{ name: 'admin', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'groupTokenAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'groupUserSettings',
    outputs: [
      { name: 'isMember', internalType: 'bool', type: 'bool' },
      { name: 'dailyAllowance', internalType: 'uint256', type: 'uint256' },
      { name: 'dailySpent', internalType: 'uint256', type: 'uint256' },
      { name: 'lastSpentAt', internalType: 'uint256', type: 'uint256' },
      { name: 'isInvited', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'groupId', internalType: 'uint256', type: 'uint256' },
      { name: 'invitee', internalType: 'address', type: 'address' },
    ],
    name: 'invite',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'groupId', internalType: 'uint256', type: 'uint256' }],
    name: 'leaveGroup',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'groupId', internalType: 'uint256', type: 'uint256' },
      { name: 'member', internalType: 'address', type: 'address' },
    ],
    name: 'removeMember',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'groupId', internalType: 'uint256', type: 'uint256' },
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'groupId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenAddress', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const jointMoneyErc20Address = {
  43113: '0xC2cE8B452150dF3184f7E2048322524682941e94',
} as const

/**
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const jointMoneyErc20Config = {
  address: jointMoneyErc20Address,
  abi: jointMoneyErc20Abi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockErc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockErc20Abi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
      { name: 'initialAccount', internalType: 'address', type: 'address' },
      { name: 'initialBalance', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useReadIerc20 = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useWriteIerc20 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useSimulateIerc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: ierc20Abi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useWatchIerc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useReadIerc20Metadata = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20MetadataAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadIerc20MetadataDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc20MetadataName = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc20MetadataSymbol = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20MetadataTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWriteIerc20Metadata = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20MetadataTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useSimulateIerc20Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20MetadataTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWatchIerc20MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__
 */
export const useReadJointMoney = /*#__PURE__*/ createUseReadContract({
  abi: jointMoneyAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"getGroup"`
 */
export const useReadJointMoneyGetGroup = /*#__PURE__*/ createUseReadContract({
  abi: jointMoneyAbi,
  functionName: 'getGroup',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"getGroupBalance"`
 */
export const useReadJointMoneyGetGroupBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: jointMoneyAbi,
    functionName: 'getGroupBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"getMyGroupIds"`
 */
export const useReadJointMoneyGetMyGroupIds =
  /*#__PURE__*/ createUseReadContract({
    abi: jointMoneyAbi,
    functionName: 'getMyGroupIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"getMyGroups"`
 */
export const useReadJointMoneyGetMyGroups = /*#__PURE__*/ createUseReadContract(
  { abi: jointMoneyAbi, functionName: 'getMyGroups' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"getMyInvites"`
 */
export const useReadJointMoneyGetMyInvites =
  /*#__PURE__*/ createUseReadContract({
    abi: jointMoneyAbi,
    functionName: 'getMyInvites',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"groups"`
 */
export const useReadJointMoneyGroups = /*#__PURE__*/ createUseReadContract({
  abi: jointMoneyAbi,
  functionName: 'groups',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"memberDailyAllowanceMap"`
 */
export const useReadJointMoneyMemberDailyAllowanceMap =
  /*#__PURE__*/ createUseReadContract({
    abi: jointMoneyAbi,
    functionName: 'memberDailyAllowanceMap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"memberDailySpentMap"`
 */
export const useReadJointMoneyMemberDailySpentMap =
  /*#__PURE__*/ createUseReadContract({
    abi: jointMoneyAbi,
    functionName: 'memberDailySpentMap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"memberLastSpentAtMap"`
 */
export const useReadJointMoneyMemberLastSpentAtMap =
  /*#__PURE__*/ createUseReadContract({
    abi: jointMoneyAbi,
    functionName: 'memberLastSpentAtMap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"userGroupInvites"`
 */
export const useReadJointMoneyUserGroupInvites =
  /*#__PURE__*/ createUseReadContract({
    abi: jointMoneyAbi,
    functionName: 'userGroupInvites',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"userGroups"`
 */
export const useReadJointMoneyUserGroups = /*#__PURE__*/ createUseReadContract({
  abi: jointMoneyAbi,
  functionName: 'userGroups',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__
 */
export const useWriteJointMoney = /*#__PURE__*/ createUseWriteContract({
  abi: jointMoneyAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"acceptGroupInvitation"`
 */
export const useWriteJointMoneyAcceptGroupInvitation =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyAbi,
    functionName: 'acceptGroupInvitation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"cancelInvitation"`
 */
export const useWriteJointMoneyCancelInvitation =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyAbi,
    functionName: 'cancelInvitation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"createGroup"`
 */
export const useWriteJointMoneyCreateGroup =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyAbi,
    functionName: 'createGroup',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"deleteGroup"`
 */
export const useWriteJointMoneyDeleteGroup =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyAbi,
    functionName: 'deleteGroup',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"deposit"`
 */
export const useWriteJointMoneyDeposit = /*#__PURE__*/ createUseWriteContract({
  abi: jointMoneyAbi,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"inviteMembers"`
 */
export const useWriteJointMoneyInviteMembers =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyAbi,
    functionName: 'inviteMembers',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"removeMember"`
 */
export const useWriteJointMoneyRemoveMember =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyAbi,
    functionName: 'removeMember',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"setAllowance"`
 */
export const useWriteJointMoneySetAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyAbi,
    functionName: 'setAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteJointMoneyWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: jointMoneyAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__
 */
export const useSimulateJointMoney = /*#__PURE__*/ createUseSimulateContract({
  abi: jointMoneyAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"acceptGroupInvitation"`
 */
export const useSimulateJointMoneyAcceptGroupInvitation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyAbi,
    functionName: 'acceptGroupInvitation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"cancelInvitation"`
 */
export const useSimulateJointMoneyCancelInvitation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyAbi,
    functionName: 'cancelInvitation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"createGroup"`
 */
export const useSimulateJointMoneyCreateGroup =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyAbi,
    functionName: 'createGroup',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"deleteGroup"`
 */
export const useSimulateJointMoneyDeleteGroup =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyAbi,
    functionName: 'deleteGroup',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"deposit"`
 */
export const useSimulateJointMoneyDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyAbi,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"inviteMembers"`
 */
export const useSimulateJointMoneyInviteMembers =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyAbi,
    functionName: 'inviteMembers',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"removeMember"`
 */
export const useSimulateJointMoneyRemoveMember =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyAbi,
    functionName: 'removeMember',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"setAllowance"`
 */
export const useSimulateJointMoneySetAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyAbi,
    functionName: 'setAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateJointMoneyWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__
 */
export const useWatchJointMoneyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: jointMoneyAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__ and `eventName` set to `"AllowanceSet"`
 */
export const useWatchJointMoneyAllowanceSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyAbi,
    eventName: 'AllowanceSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__ and `eventName` set to `"Deposit"`
 */
export const useWatchJointMoneyDepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyAbi,
    eventName: 'Deposit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__ and `eventName` set to `"GroupCreated"`
 */
export const useWatchJointMoneyGroupCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyAbi,
    eventName: 'GroupCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__ and `eventName` set to `"GroupDeleted"`
 */
export const useWatchJointMoneyGroupDeletedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyAbi,
    eventName: 'GroupDeleted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__ and `eventName` set to `"InvitationCancelled"`
 */
export const useWatchJointMoneyInvitationCancelledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyAbi,
    eventName: 'InvitationCancelled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__ and `eventName` set to `"MemberAccepted"`
 */
export const useWatchJointMoneyMemberAcceptedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyAbi,
    eventName: 'MemberAccepted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__ and `eventName` set to `"MemberRemoved"`
 */
export const useWatchJointMoneyMemberRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyAbi,
    eventName: 'MemberRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__ and `eventName` set to `"MembersInvited"`
 */
export const useWatchJointMoneyMembersInvitedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyAbi,
    eventName: 'MembersInvited',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyAbi}__ and `eventName` set to `"Withdraw"`
 */
export const useWatchJointMoneyWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyAbi,
    eventName: 'Withdraw',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useReadJointMoneyErc20 = /*#__PURE__*/ createUseReadContract({
  abi: jointMoneyErc20Abi,
  address: jointMoneyErc20Address,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"getBalance"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useReadJointMoneyErc20GetBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'getBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"groupCount"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useReadJointMoneyErc20GroupCount =
  /*#__PURE__*/ createUseReadContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'groupCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"groupSettings"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useReadJointMoneyErc20GroupSettings =
  /*#__PURE__*/ createUseReadContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'groupSettings',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"groupTokenAmount"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useReadJointMoneyErc20GroupTokenAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'groupTokenAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"groupUserSettings"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useReadJointMoneyErc20GroupUserSettings =
  /*#__PURE__*/ createUseReadContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'groupUserSettings',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useWriteJointMoneyErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: jointMoneyErc20Abi,
  address: jointMoneyErc20Address,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"accept"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useWriteJointMoneyErc20Accept =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'accept',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"cancelInvitatioin"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useWriteJointMoneyErc20CancelInvitatioin =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'cancelInvitatioin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"createGroup"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useWriteJointMoneyErc20CreateGroup =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'createGroup',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"deposit"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useWriteJointMoneyErc20Deposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"invite"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useWriteJointMoneyErc20Invite =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'invite',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"leaveGroup"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useWriteJointMoneyErc20LeaveGroup =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'leaveGroup',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"removeMember"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useWriteJointMoneyErc20RemoveMember =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'removeMember',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"setAllowance"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useWriteJointMoneyErc20SetAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'setAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useWriteJointMoneyErc20Withdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useSimulateJointMoneyErc20 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"accept"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useSimulateJointMoneyErc20Accept =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'accept',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"cancelInvitatioin"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useSimulateJointMoneyErc20CancelInvitatioin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'cancelInvitatioin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"createGroup"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useSimulateJointMoneyErc20CreateGroup =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'createGroup',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"deposit"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useSimulateJointMoneyErc20Deposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"invite"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useSimulateJointMoneyErc20Invite =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'invite',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"leaveGroup"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useSimulateJointMoneyErc20LeaveGroup =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'leaveGroup',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"removeMember"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useSimulateJointMoneyErc20RemoveMember =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'removeMember',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"setAllowance"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useSimulateJointMoneyErc20SetAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'setAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useSimulateJointMoneyErc20Withdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyErc20Abi}__
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useWatchJointMoneyErc20Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `eventName` set to `"GroupAccepted"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useWatchJointMoneyErc20GroupAcceptedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    eventName: 'GroupAccepted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `eventName` set to `"GroupAllowanceSet"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useWatchJointMoneyErc20GroupAllowanceSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    eventName: 'GroupAllowanceSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `eventName` set to `"GroupCreated"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useWatchJointMoneyErc20GroupCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    eventName: 'GroupCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `eventName` set to `"GroupDeposited"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useWatchJointMoneyErc20GroupDepositedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    eventName: 'GroupDeposited',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `eventName` set to `"GroupInvitationCancelled"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useWatchJointMoneyErc20GroupInvitationCancelledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    eventName: 'GroupInvitationCancelled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `eventName` set to `"GroupInvited"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useWatchJointMoneyErc20GroupInvitedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    eventName: 'GroupInvited',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `eventName` set to `"GroupLeft"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useWatchJointMoneyErc20GroupLeftEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    eventName: 'GroupLeft',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jointMoneyErc20Abi}__ and `eventName` set to `"GroupWithdrawn"`
 *
 * [__View Contract on Avalanche Fuji Snow Trace__](https://testnet.snowtrace.io/address/0xC2cE8B452150dF3184f7E2048322524682941e94)
 */
export const useWatchJointMoneyErc20GroupWithdrawnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jointMoneyErc20Abi,
    address: jointMoneyErc20Address,
    eventName: 'GroupWithdrawn',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc20Abi}__
 */
export const useReadMockErc20 = /*#__PURE__*/ createUseReadContract({
  abi: mockErc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadMockErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: mockErc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadMockErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: mockErc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadMockErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: mockErc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadMockErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: mockErc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadMockErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: mockErc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadMockErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: mockErc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc20Abi}__
 */
export const useWriteMockErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: mockErc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteMockErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: mockErc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteMockErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: mockErc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteMockErc20TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockErc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc20Abi}__
 */
export const useSimulateMockErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: mockErc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateMockErc20Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockErc20Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateMockErc20Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockErc20Abi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateMockErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockErc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockErc20Abi}__
 */
export const useWatchMockErc20Event = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: mockErc20Abi },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockErc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchMockErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: mockErc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockErc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchMockErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: mockErc20Abi,
    eventName: 'Transfer',
  })
