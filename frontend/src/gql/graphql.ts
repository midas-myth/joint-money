/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  members: Array<Member>;
  tokenAmounts: Array<TokenAmount>;
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
  members_isNull?: InputMaybe<Scalars['Boolean']['input']>;
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
  groupId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  invitee: Scalars['String']['output'];
};

export type InviteEdge = {
  __typename?: 'InviteEdge';
  cursor: Scalars['String']['output'];
  node: Invite;
};

export enum InviteOrderByInput {
  GroupIdAsc = 'groupId_ASC',
  GroupIdAscNullsFirst = 'groupId_ASC_NULLS_FIRST',
  GroupIdAscNullsLast = 'groupId_ASC_NULLS_LAST',
  GroupIdDesc = 'groupId_DESC',
  GroupIdDescNullsFirst = 'groupId_DESC_NULLS_FIRST',
  GroupIdDescNullsLast = 'groupId_DESC_NULLS_LAST',
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
  groupId_contains?: InputMaybe<Scalars['String']['input']>;
  groupId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  groupId_endsWith?: InputMaybe<Scalars['String']['input']>;
  groupId_eq?: InputMaybe<Scalars['String']['input']>;
  groupId_gt?: InputMaybe<Scalars['String']['input']>;
  groupId_gte?: InputMaybe<Scalars['String']['input']>;
  groupId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  groupId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  groupId_lt?: InputMaybe<Scalars['String']['input']>;
  groupId_lte?: InputMaybe<Scalars['String']['input']>;
  groupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  groupId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  groupId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  groupId_not_eq?: InputMaybe<Scalars['String']['input']>;
  groupId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  groupId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  groupId_startsWith?: InputMaybe<Scalars['String']['input']>;
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

export type Member = {
  __typename?: 'Member';
  address: Scalars['String']['output'];
  dailyAllowance: Scalars['BigInt']['output'];
  dailySpent: Scalars['BigInt']['output'];
  lastSpentAt: Scalars['BigInt']['output'];
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

export type SquidStatus = {
  __typename?: 'SquidStatus';
  /** The height of the processed part of the chain */
  height?: Maybe<Scalars['Int']['output']>;
};

export type TokenAmount = {
  __typename?: 'TokenAmount';
  amount: Scalars['BigInt']['output'];
  tokenAddress: Scalars['String']['output'];
};

export type WhereIdInput = {
  id: Scalars['String']['input'];
};

export type GetGroupQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetGroupQuery = { __typename?: 'Query', groupById?: { __typename?: 'Group', id: string, admin: string, members: Array<{ __typename?: 'Member', address: string, dailyAllowance: any, dailySpent: any, lastSpentAt: any }>, tokenAmounts: Array<{ __typename?: 'TokenAmount', tokenAddress: string, amount: any }> } | null };


export const GetGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"groupById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"admin"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"dailyAllowance"}},{"kind":"Field","name":{"kind":"Name","value":"dailySpent"}},{"kind":"Field","name":{"kind":"Name","value":"lastSpentAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tokenAmounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenAddress"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]} as unknown as DocumentNode<GetGroupQuery, GetGroupQueryVariables>;