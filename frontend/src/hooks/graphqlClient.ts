import { createClient } from "graphql-ws";

const graphqlClient = createClient({
  webSocketImpl: WebSocket,
  url: `ws://localhost:4350/graphql`,
});

// /** Your custom fetcher function */
// async function customFetcher<TResult, TVariables>(
//   url: string,
//   document: TypedDocumentNode<TResult, TVariables>,
//   ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
// ): Promise<TResult> {
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify({
//       query: print(document),
//       variables
//     })
//   })
//   if (response.status !== 200) {
//     throw new Error(`Failed to fetch: ${response.statusText}. Body: ${await response.text()}`)
//   }

//   return await response.json()
// }

// export function useGraphQL<TResult, TVariables>(
//   document: TypedDocumentNode<TResult, TVariables>,
//   ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
// ): UseQueryResult<ExecutionResult<TResult>> {
//   return useQuery([(document.definitions[0] as any).name.value, variables], () =>
//     customFetcher('https://swapi-graphql.netlify.app/.netlify/functions/index', document, variables)
//   )
// }

export default graphqlClient;
