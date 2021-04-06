import type { AppProps } from 'next/app'
import * as React from 'react'
import { Footer } from '../components/app/Footer'
import { Provider } from 'react-redux'
import { Header } from '../components/app/Header'
import store from '../utils/redux/store'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}

export default MyApp
