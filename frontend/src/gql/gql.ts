/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  subscription GetGroup($id: String!) {\n    groupById(id: $id) {\n      id\n      admin\n      members {\n        address\n        dailyAllowance\n        dailySpent\n        lastSpentAt\n      }\n      tokenAmounts {\n        tokenAddress\n        amount\n      }\n      invites {\n        invitee\n      }\n    }\n  }\n": types.GetGroupDocument,
    "\n  subscription GetGroupBalance($id: String!) {\n    groupById(id: $id) {\n      tokenAmounts {\n        tokenAddress\n        amount\n      }\n    }\n  }\n": types.GetGroupBalanceDocument,
    "\n  subscription GetGroupOperations($groupId: String!) {\n    operations(where: { group: { id_eq: $groupId } }) {\n      amount\n      id\n      member\n      to\n      tokenAddress\n      type\n    }\n  }\n": types.GetGroupOperationsDocument,
    "\n  subscription GetMyInvites($account: String!) {\n    invites(where: { invitee_eq: $account }) {\n      group {\n        id\n      }\n    }\n  }\n": types.GetMyInvitesDocument,
    "\n  subscription GetMyGroups($address: String!) {\n    memberships(where: { address_eq: $address }) {\n      group {\n        admin\n        id\n        members {\n          address\n          dailyAllowance\n          dailySpent\n          lastSpentAt\n        }\n        invites {\n          invitee\n        }\n      }\n    }\n  }\n": types.GetMyGroupsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription GetGroup($id: String!) {\n    groupById(id: $id) {\n      id\n      admin\n      members {\n        address\n        dailyAllowance\n        dailySpent\n        lastSpentAt\n      }\n      tokenAmounts {\n        tokenAddress\n        amount\n      }\n      invites {\n        invitee\n      }\n    }\n  }\n"): typeof import('./graphql').GetGroupDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription GetGroupBalance($id: String!) {\n    groupById(id: $id) {\n      tokenAmounts {\n        tokenAddress\n        amount\n      }\n    }\n  }\n"): typeof import('./graphql').GetGroupBalanceDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription GetGroupOperations($groupId: String!) {\n    operations(where: { group: { id_eq: $groupId } }) {\n      amount\n      id\n      member\n      to\n      tokenAddress\n      type\n    }\n  }\n"): typeof import('./graphql').GetGroupOperationsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription GetMyInvites($account: String!) {\n    invites(where: { invitee_eq: $account }) {\n      group {\n        id\n      }\n    }\n  }\n"): typeof import('./graphql').GetMyInvitesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription GetMyGroups($address: String!) {\n    memberships(where: { address_eq: $address }) {\n      group {\n        admin\n        id\n        members {\n          address\n          dailyAllowance\n          dailySpent\n          lastSpentAt\n        }\n        invites {\n          invitee\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').GetMyGroupsDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
