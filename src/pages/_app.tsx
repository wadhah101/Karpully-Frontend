import 'tailwindcss/tailwind.css'
import '../styles/global.scss'
import type { AppProps } from 'next/app'
import * as React from 'react'
import { Footer } from '../components/app/Footer'
import { Provider, useSelector } from 'react-redux'
import { Header } from '../components/app/Header'
import store, { CoreState } from '../utils/redux/store'
import { ApolloProvider } from '@apollo/client/react'
import { client } from '../utils/apollo'
import AppHead from '../components/app/Head/Head'
import { AppState } from '../utils/redux/slices/appSlice'
import PortalManager from '../components/portals/PortalManager'

const MyWrapper: React.FC<AppProps> = ({ Component, pageProps }) => {
  const app = useSelector<CoreState, AppState>((state) => state.app)
  return (
    <React.Fragment>
      <AppHead />
      <Header />
      <Component {...pageProps} />
      <PortalManager portal={app.portal} />
      <Footer />
    </React.Fragment>
  )
}

const MyApp: React.FC<AppProps> = (e) => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <MyWrapper {...e} />
      </Provider>
    </ApolloProvider>
  )
}

export default MyApp
