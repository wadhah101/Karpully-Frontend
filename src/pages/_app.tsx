import 'tailwindcss/tailwind.css'
import '../styles/global.scss'
import type { AppProps } from 'next/app'
import * as React from 'react'
import { Footer } from '../components/app/Footer'
import { Provider } from 'react-redux'
import Header from '../components/app/Header/Header.controller'
import { persistor, store } from '../utils/redux/store'
import { ApolloProvider } from '@apollo/client/react'
import AppHead from '../components/app/Head/Head'
import * as Dialogs from '../components/Portals/exports'
import { PersistGate } from 'redux-persist/integration/react'
import { useApolloClient } from '../utils/apollo'
import { useAuthGuard } from '../utils/guards/auth.guard'
import useQueryDetector from 'src/utils/app/useQueryDetector'
import useRefreshToken from 'src/utils/apollo/useRefreshToken'

const MyWrapper: React.FC<AppProps> = ({ Component, pageProps }) => {
  const client = useApolloClient()
  useAuthGuard()
  useQueryDetector()
  useRefreshToken()
  return (
    <ApolloProvider client={client}>
      <AppHead />
      <Header />
      <Component {...pageProps} />
      <Dialogs.Controller />
      <Footer />
    </ApolloProvider>
  )
}

const MyApp: React.FC<AppProps> = (e) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MyWrapper {...e} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
