import { useEffect, useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

import "../styles/toastify.css";
import "../styles/globals.css";
import "../styles/modal-video.css";

function MyApp({ Component, pageProps }) {
  const [showConsent, setShowConsent] = useState(false);

  const cookie = typeof document === "undefined" ? null : document.cookie;
  const status = cookie?.includes("cookieconsent_status=1");
  const onAcceptCookies = () => {
    document.cookie = "cookieconsent_status = 1";
    setShowConsent(!showConsent);
  };
  useEffect(() => {
    setShowConsent(status);
  }, [showConsent]);

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
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-QZE40XCZJQ');
        `}
        </script>
      </Head>
      <ToastContainer theme={"colored"} />
      <Component {...pageProps} />
      {
        !showConsent && <div className="cookies-wrap" style={{ opacity: showConsent ? 0 : 1 }}>
          This website uses cookies to ensure you get the best experience.{" "}
          <a
            className="text-Primary hover:underline cursor-pointer pl-[3px]"
            onClick={() => window.open("https://www.seforall.org/privacy-policy")}
          >
            Read more
          </a>
          <button
            className="cookies-accept-button"
            onClick={() => onAcceptCookies()}
          >
            Accept
          </button>
        </div>
      }
    </QueryClientProvider>
  );
}

export default MyApp;
