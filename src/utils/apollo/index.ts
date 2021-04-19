import { ApolloClient, InMemoryCache } from '@apollo/client'

const base = new URL(process.env.API_URL)
export const client = new ApolloClient({
  uri: base.toString(),
  cache: new InMemoryCache(),
})
