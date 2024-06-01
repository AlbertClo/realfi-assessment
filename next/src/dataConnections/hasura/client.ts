import { ApolloClient, InMemoryCache } from "@apollo/client";

const createHasuraClient = () => {
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_HASURA_URI,
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret': process.env.NEXT_PUBLIC_ADMIN_SECRET || '',
    },
    cache: new InMemoryCache(),
  });
};

export default createHasuraClient;