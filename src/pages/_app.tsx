import 'tailwindcss/tailwind.css'
import '../styles/global.scss'
import type { AppProps } from 'next/app'
import * as React from 'react'
import { Footer } from '../components/app/Footer'
import { Provider } from 'react-redux'
import { Header } from '../components/app/Header'
import store from '../utils/redux/store'
import { ApolloProvider } from '@apollo/client/react'
import { client } from '../utils/apollo'
import AppHead from '../components/app/Head/Head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AppHead />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </ApolloProvider>
  )
}

export default MyApp
