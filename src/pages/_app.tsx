// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppStateContextProvider } from '@/context/AppContext'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppStateContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppStateContextProvider>
  )
}
