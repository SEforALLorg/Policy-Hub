import { QueryClientProvider, QueryClient } from "react-query";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

import "../styles/toastify.css";
import "../styles/globals.css";
import "../styles/modal-video.css";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QZE40XCZJQ"
        ></script>
        <script>
          {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'G-QZE40XCZJQ', 'auto');
          ga('send', 'pageview');
        `}
        </script>
      </Head>
      <ToastContainer theme={"colored"} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
