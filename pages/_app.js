import {
  QueryClientProvider,
  QueryClient
} from 'react-query'
import { ToastContainer } from 'react-toastify';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer theme={"colored"} />
      <Component {...pageProps} />
    </QueryClientProvider>)
}

export default MyApp
