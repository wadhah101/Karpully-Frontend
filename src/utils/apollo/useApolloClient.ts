import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { useSelector } from 'react-redux'
import { CoreState } from '../redux/store'
import { setContext } from '@apollo/client/link/context'

const base = new URL(process.env.NEXT_PUBLIC_API_URL)
const httpLink = createHttpLink({
  uri: base.toString(),
})

export const authLessClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
})

export const useApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const token = useSelector<CoreState, string>(
    (state) => state.auth.accessToken
  )

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }))

  // if you generate a new client old queries will be  resent  , mutate the same client instead
  client.setLink(authLink.concat(httpLink))

  return client
}
