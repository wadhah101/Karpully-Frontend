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

export const useApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const token = useSelector<CoreState, string>((state) => state.auth.token)

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }))

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return client
}
