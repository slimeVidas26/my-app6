import { ApolloClient, InMemoryCache } from '@apollo/client';




export const client = new ApolloClient({
    uri: 'http://192.168.133.1:3999/',
    cache: new InMemoryCache()
  });