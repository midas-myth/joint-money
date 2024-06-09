/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Big number integer */
  BigInt: { input: any; output: any; }
};

export type Group = {
  __typename?: 'Group';
  admin: Scalars['String']['output'];
  id: Scalars['String']['output'];
  invites: Array<Invite>;
  members: Array<Membership>;
  tokenAmounts: Array<TokenAmount>;
};


export type GroupInvitesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InviteOrderByInput>>;
  where?: InputMaybe<InviteWhereInput>;
};


export type GroupMembersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MembershipOrderByInput>>;
  where?: InputMaybe<MembershipWhereInput>;
};

export type GroupEdge = {
  __typename?: 'GroupEdge';
  cursor: Scalars['String']['output'];
  node: Group;
};

export enum GroupOrderByInput {
  AdminAsc = 'admin_ASC',
  AdminAscNullsFirst = 'admin_ASC_NULLS_FIRST',
  AdminAscNullsLast = 'admin_ASC_NULLS_LAST',
  AdminDesc = 'admin_DESC',
  AdminDescNullsFirst = 'admin_DESC_NULLS_FIRST',
  AdminDescNullsLast = 'admin_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST'
}

export type GroupWhereInput = {
  AND?: InputMaybe<Array<GroupWhereInput>>;
  OR?: InputMaybe<Array<GroupWhereInput>>;
  admin_contains?: InputMaybe<Scalars['String']['input']>;
  admin_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  admin_endsWith?: InputMaybe<Scalars['String']['input']>;
  admin_eq?: InputMaybe<Scalars['String']['input']>;
  admin_gt?: InputMaybe<Scalars['String']['input']>;
  admin_gte?: InputMaybe<Scalars['String']['input']>;
  admin_in?: InputMaybe<Array<Scalars['String']['input']>>;
  admin_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  admin_lt?: InputMaybe<Scalars['String']['input']>;
  admin_lte?: InputMaybe<Scalars['String']['input']>;
  admin_not_contains?: InputMaybe<Scalars['String']['input']>;
  admin_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  admin_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  admin_not_eq?: InputMaybe<Scalars['String']['input']>;
  admin_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  admin_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  admin_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  invites_every?: InputMaybe<InviteWhereInput>;
  invites_none?: InputMaybe<InviteWhereInput>;
  invites_some?: InputMaybe<InviteWhereInput>;
  members_every?: InputMaybe<MembershipWhereInput>;
  members_none?: InputMaybe<MembershipWhereInput>;
  members_some?: InputMaybe<MembershipWhereInput>;
  tokenAmounts_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GroupsConnection = {
  __typename?: 'GroupsConnection';
  edges: Array<GroupEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Invite = {
  __typename?: 'Invite';
  group: Group;
  id: Scalars['String']['output'];
  invitee: Scalars['String']['output'];
};

export type InviteEdge = {
  __typename?: 'InviteEdge';
  cursor: Scalars['String']['output'];
  node: Invite;
};

export enum InviteOrderByInput {
  GroupAdminAsc = 'group_admin_ASC',
  GroupAdminAscNullsFirst = 'group_admin_ASC_NULLS_FIRST',
  GroupAdminAscNullsLast = 'group_admin_ASC_NULLS_LAST',
  GroupAdminDesc = 'group_admin_DESC',
  GroupAdminDescNullsFirst = 'group_admin_DESC_NULLS_FIRST',
  GroupAdminDescNullsLast = 'group_admin_DESC_NULLS_LAST',
  GroupIdAsc = 'group_id_ASC',
  GroupIdAscNullsFirst = 'group_id_ASC_NULLS_FIRST',
  GroupIdAscNullsLast = 'group_id_ASC_NULLS_LAST',
  GroupIdDesc = 'group_id_DESC',
  GroupIdDescNullsFirst = 'group_id_DESC_NULLS_FIRST',
  GroupIdDescNullsLast = 'group_id_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  InviteeAsc = 'invitee_ASC',
  InviteeAscNullsFirst = 'invitee_ASC_NULLS_FIRST',
  InviteeAscNullsLast = 'invitee_ASC_NULLS_LAST',
  InviteeDesc = 'invitee_DESC',
  InviteeDescNullsFirst = 'invitee_DESC_NULLS_FIRST',
  InviteeDescNullsLast = 'invitee_DESC_NULLS_LAST'
}

export type InviteWhereInput = {
  AND?: InputMaybe<Array<InviteWhereInput>>;
  OR?: InputMaybe<Array<InviteWhereInput>>;
  group?: InputMaybe<GroupWhereInput>;
  group_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  invitee_contains?: InputMaybe<Scalars['String']['input']>;
  invitee_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  invitee_endsWith?: InputMaybe<Scalars['String']['input']>;
  invitee_eq?: InputMaybe<Scalars['String']['input']>;
  invitee_gt?: InputMaybe<Scalars['String']['input']>;
  invitee_gte?: InputMaybe<Scalars['String']['input']>;
  invitee_in?: InputMaybe<Array<Scalars['String']['input']>>;
  invitee_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  invitee_lt?: InputMaybe<Scalars['String']['input']>;
  invitee_lte?: InputMaybe<Scalars['String']['input']>;
  invitee_not_contains?: InputMaybe<Scalars['String']['input']>;
  invitee_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  invitee_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  invitee_not_eq?: InputMaybe<Scalars['String']['input']>;
  invitee_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  invitee_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  invitee_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type InvitesConnection = {
  __typename?: 'InvitesConnection';
  edges: Array<InviteEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Membership = {
  __typename?: 'Membership';
  address: Scalars['String']['output'];
  dailyAllowance: Scalars['BigInt']['output'];
  dailySpent: Scalars['BigInt']['output'];
  group: Group;
  id: Scalars['String']['output'];
  lastSpentAt: Scalars['BigInt']['output'];
};

export type MembershipEdge = {
  __typename?: 'MembershipEdge';
  cursor: Scalars['String']['output'];
  node: Membership;
};

export enum MembershipOrderByInput {
  AddressAsc = 'address_ASC',
  AddressAscNullsFirst = 'address_ASC_NULLS_FIRST',
  AddressAscNullsLast = 'address_ASC_NULLS_LAST',
  AddressDesc = 'address_DESC',
  AddressDescNullsFirst = 'address_DESC_NULLS_FIRST',
  AddressDescNullsLast = 'address_DESC_NULLS_LAST',
  DailyAllowanceAsc = 'dailyAllowance_ASC',
  DailyAllowanceAscNullsFirst = 'dailyAllowance_ASC_NULLS_FIRST',
  DailyAllowanceAscNullsLast = 'dailyAllowance_ASC_NULLS_LAST',
  DailyAllowanceDesc = 'dailyAllowance_DESC',
  DailyAllowanceDescNullsFirst = 'dailyAllowance_DESC_NULLS_FIRST',
  DailyAllowanceDescNullsLast = 'dailyAllowance_DESC_NULLS_LAST',
  DailySpentAsc = 'dailySpent_ASC',
  DailySpentAscNullsFirst = 'dailySpent_ASC_NULLS_FIRST',
  DailySpentAscNullsLast = 'dailySpent_ASC_NULLS_LAST',
  DailySpentDesc = 'dailySpent_DESC',
  DailySpentDescNullsFirst = 'dailySpent_DESC_NULLS_FIRST',
  DailySpentDescNullsLast = 'dailySpent_DESC_NULLS_LAST',
  GroupAdminAsc = 'group_admin_ASC',
  GroupAdminAscNullsFirst = 'group_admin_ASC_NULLS_FIRST',
  GroupAdminAscNullsLast = 'group_admin_ASC_NULLS_LAST',
  GroupAdminDesc = 'group_admin_DESC',
  GroupAdminDescNullsFirst = 'group_admin_DESC_NULLS_FIRST',
  GroupAdminDescNullsLast = 'group_admin_DESC_NULLS_LAST',
  GroupIdAsc = 'group_id_ASC',
  GroupIdAscNullsFirst = 'group_id_ASC_NULLS_FIRST',
  GroupIdAscNullsLast = 'group_id_ASC_NULLS_LAST',
  GroupIdDesc = 'group_id_DESC',
  GroupIdDescNullsFirst = 'group_id_DESC_NULLS_FIRST',
  GroupIdDescNullsLast = 'group_id_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  LastSpentAtAsc = 'lastSpentAt_ASC',
  LastSpentAtAscNullsFirst = 'lastSpentAt_ASC_NULLS_FIRST',
  LastSpentAtAscNullsLast = 'lastSpentAt_ASC_NULLS_LAST',
  LastSpentAtDesc = 'lastSpentAt_DESC',
  LastSpentAtDescNullsFirst = 'lastSpentAt_DESC_NULLS_FIRST',
  LastSpentAtDescNullsLast = 'lastSpentAt_DESC_NULLS_LAST'
}

export type MembershipWhereInput = {
  AND?: InputMaybe<Array<MembershipWhereInput>>;
  OR?: InputMaybe<Array<MembershipWhereInput>>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  address_endsWith?: InputMaybe<Scalars['String']['input']>;
  address_eq?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  address_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  address_not_eq?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  address_startsWith?: InputMaybe<Scalars['String']['input']>;
  dailyAllowance_eq?: InputMaybe<Scalars['BigInt']['input']>;
  dailyAllowance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  dailyAllowance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  dailyAllowance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dailyAllowance_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  dailyAllowance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  dailyAllowance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  dailyAllowance_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  dailyAllowance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dailySpent_eq?: InputMaybe<Scalars['BigInt']['input']>;
  dailySpent_gt?: InputMaybe<Scalars['BigInt']['input']>;
  dailySpent_gte?: InputMaybe<Scalars['BigInt']['input']>;
  dailySpent_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dailySpent_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  dailySpent_lt?: InputMaybe<Scalars['BigInt']['input']>;
  dailySpent_lte?: InputMaybe<Scalars['BigInt']['input']>;
  dailySpent_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  dailySpent_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  group?: InputMaybe<GroupWhereInput>;
  group_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  lastSpentAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastSpentAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastSpentAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastSpentAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastSpentAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastSpentAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastSpentAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastSpentAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastSpentAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type MembershipsConnection = {
  __typename?: 'MembershipsConnection';
  edges: Array<MembershipEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  groupById?: Maybe<Group>;
  /** @deprecated Use groupById */
  groupByUniqueInput?: Maybe<Group>;
  groups: Array<Group>;
  groupsConnection: GroupsConnection;
  inviteById?: Maybe<Invite>;
  /** @deprecated Use inviteById */
  inviteByUniqueInput?: Maybe<Invite>;
  invites: Array<Invite>;
  invitesConnection: InvitesConnection;
  membershipById?: Maybe<Membership>;
  /** @deprecated Use membershipById */
  membershipByUniqueInput?: Maybe<Membership>;
  memberships: Array<Membership>;
  membershipsConnection: MembershipsConnection;
  squidStatus?: Maybe<SquidStatus>;
};


export type QueryGroupByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGroupByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryGroupsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupOrderByInput>>;
  where?: InputMaybe<GroupWhereInput>;
};


export type QueryGroupsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<GroupOrderByInput>;
  where?: InputMaybe<GroupWhereInput>;
};


export type QueryInviteByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryInviteByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryInvitesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InviteOrderByInput>>;
  where?: InputMaybe<InviteWhereInput>;
};


export type QueryInvitesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<InviteOrderByInput>;
  where?: InputMaybe<InviteWhereInput>;
};


export type QueryMembershipByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryMembershipByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryMembershipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MembershipOrderByInput>>;
  where?: InputMaybe<MembershipWhereInput>;
};


export type QueryMembershipsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<MembershipOrderByInput>;
  where?: InputMaybe<MembershipWhereInput>;
};

export type SquidStatus = {
  __typename?: 'SquidStatus';
  /** The height of the processed part of the chain */
  height?: Maybe<Scalars['Int']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  groupById?: Maybe<Group>;
  groups: Array<Group>;
  inviteById?: Maybe<Invite>;
  invites: Array<Invite>;
  membershipById?: Maybe<Membership>;
  memberships: Array<Membership>;
};


export type SubscriptionGroupByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionGroupsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupOrderByInput>>;
  where?: InputMaybe<GroupWhereInput>;
};


export type SubscriptionInviteByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionInvitesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InviteOrderByInput>>;
  where?: InputMaybe<InviteWhereInput>;
};


export type SubscriptionMembershipByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionMembershipsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MembershipOrderByInput>>;
  where?: InputMaybe<MembershipWhereInput>;
};

export type TokenAmount = {
  __typename?: 'TokenAmount';
  amount: Scalars['BigInt']['output'];
  tokenAddress: Scalars['String']['output'];
};

export type WhereIdInput = {
  id: Scalars['String']['input'];
};

export type GetGroupSubscriptionVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetGroupSubscription = { __typename?: 'Subscription', groupById?: { __typename?: 'Group', id: string, admin: string, members: Array<{ __typename?: 'Membership', address: string, dailyAllowance: any, dailySpent: any, lastSpentAt: any }>, tokenAmounts: Array<{ __typename?: 'TokenAmount', tokenAddress: string, amount: any }>, invites: Array<{ __typename?: 'Invite', invitee: string }> } | null };

export type GetMyInvitesSubscriptionVariables = Exact<{
  account: Scalars['String']['input'];
}>;


export type GetMyInvitesSubscription = { __typename?: 'Subscription', invites: Array<{ __typename?: 'Invite', group: { __typename?: 'Group', id: string } }> };

export type GetMyGroupsSubscriptionVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type GetMyGroupsSubscription = { __typename?: 'Subscription', memberships: Array<{ __typename?: 'Membership', group: { __typename?: 'Group', admin: string, id: string, members: Array<{ __typename?: 'Membership', address: string, dailyAllowance: any, dailySpent: any, lastSpentAt: any }>, invites: Array<{ __typename?: 'Invite', invitee: string }> } }> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const GetGroupDocument = new TypedDocumentString(`
    subscription GetGroup($id: String!) {
  groupById(id: $id) {
    id
    admin
    members {
      address
      dailyAllowance
      dailySpent
      lastSpentAt
    }
    tokenAmounts {
      tokenAddress
      amount
    }
    invites {
      invitee
    }
  }
}
    `) as unknown as TypedDocumentString<GetGroupSubscription, GetGroupSubscriptionVariables>;
export const GetMyInvitesDocument = new TypedDocumentString(`
    subscription GetMyInvites($account: String!) {
  invites(where: {invitee_eq: $account}) {
    group {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<GetMyInvitesSubscription, GetMyInvitesSubscriptionVariables>;
export const GetMyGroupsDocument = new TypedDocumentString(`
    subscription GetMyGroups($address: String!) {
  memberships(where: {address_eq: $address}) {
    group {
      admin
      id
      members {
        address
        dailyAllowance
        dailySpent
        lastSpentAt
      }
      invites {
        invitee
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetMyGroupsSubscription, GetMyGroupsSubscriptionVariables>;