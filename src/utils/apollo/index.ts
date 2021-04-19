import { ApolloClient, InMemoryCache } from '@apollo/client'

const base = new URL(process.env.NEXT_PUBLIC_API_URL)
export const client = new ApolloClient({
  uri: base.toString(),
  cache: new InMemoryCache(),
})
