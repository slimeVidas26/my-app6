import { ApolloClient, InMemoryCache } from '@apollo/client';




export const client = new ApolloClient({
<<<<<<< HEAD
    uri: 'http://192.168.133.1:3998/',
=======
    uri: 'http://192.168.133.1:4000/',
>>>>>>> 19/02/24
    cache: new InMemoryCache()
  });