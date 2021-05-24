import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setContext } from '@apollo/client/link/context';
import { useSelector } from 'react-redux';

import { GlobalState } from '../redux/store';

export const BACKEND_BASE_URL = new URL(process.env.NEXT_PUBLIC_API_URL);
const httpLink = createHttpLink({
  uri: BACKEND_BASE_URL.toString(),
});

export const authLessClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
});

export const useApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const token = useSelector<GlobalState, string>((state) => state.auth.accessToken);

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }));

  // if you generate a new client old queries will be  resent  , mutate the same client instead
  client.setLink(authLink.concat(httpLink));

  return client;
};
