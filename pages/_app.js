import {
  QueryClientProvider,
  QueryClient
} from 'react-query'
import { ToastContainer } from 'react-toastify';

import "../styles/toastify.css";
import '../styles/globals.css';
import '../styles/modal-video.css';

function MyApp({ Component, pageProps }) {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer theme={"colored"} />
      <Component {...pageProps} />
    </QueryClientProvider>)
}

export default MyApp
