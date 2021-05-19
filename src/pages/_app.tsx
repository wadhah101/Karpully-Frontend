/* eslint-disable react/jsx-props-no-spreading */
import 'tailwindcss/tailwind.css';
import '../styles/global.scss';
import 'leaflet/dist/leaflet.css';
import * as React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ApolloProvider } from '@apollo/client/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Footer } from '../components/app/Footer';
import AppHead from '../components/app/Head/Head';
import Header from '../components/app/Header/controller';
import * as Dialogs from '../components/Dialogs/exports';
import { useApolloClient } from '../utils/apollo/useApolloClient';
import { persistor, store } from '../utils/redux/store';
import type { AppProps } from 'next/app';

const MyWrapper: React.FC<AppProps> = ({ Component, pageProps }) => {
  const client = useApolloClient();
  return (
    <ApolloProvider client={client}>
      <AppHead />
      <Header />
      <Component {...pageProps} />
      <Dialogs.Controller />
      <Footer />
    </ApolloProvider>
  );
};

const MyApp: React.FC<AppProps> = (e) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MyWrapper {...e} />
    </PersistGate>
  </Provider>
);

export default MyApp;
