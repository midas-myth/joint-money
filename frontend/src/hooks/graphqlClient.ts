import { createClient } from "graphql-ws";

const graphqlClient = createClient({
  webSocketImpl: WebSocket,
  url: import.meta.env.VITE_GRAPHQL_ENDPOINT!,
});

export default graphqlClient;
