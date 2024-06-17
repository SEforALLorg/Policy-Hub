import { useEffect, useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import "../styles/toastify.css";
import "../styles/globals.css";
import "../styles/modal-video.css";
import "react-tooltip/dist/react-tooltip.css";
import "../I18n";
import { useTranslation } from "react-i18next";
import { Cookies } from "react-cookie";
import { useRouter } from "next/router";
import { applyTheme } from "../theme/utils";
import baseTheme from "../theme/base";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import { isMobile } from "../utilities";

const languages = ["en", "fr"];
const cookies = new Cookies();

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { i18n, t } = useTranslation();
  const [showConsent, setShowConsent] = useState(true);

  const changeLanguage = (language) => {
    if (languages.includes(language)) {
      i18n.changeLanguage(language);
    }
  };

  const cookie = typeof document === "undefined" ? null : document.cookie;
  const status = cookie?.includes("cookieconsent_status=1");
  const onAcceptCookies = () => {
    try {
      fetch("https://geolocation-db.com/json/")
        .then((response) => response.json())
        .then((data) => localStorage.setItem("ip", data.IPv4));
    } catch (error) {
      console.log(error);
    }
    document.cookie = "cookieconsent_status = 1";
    setShowConsent(!showConsent);
  };

  useEffect(() => {
    if ((window.location.href?.includes("en") || window.location.href?.includes("fr")) && localStorage.getItem('lang')) {
      let lang = router.locale;
      const expires = new Date();
      expires.setFullYear(expires.getFullYear() + 100);
      cookies.set("language", lang, {
        expires,
        secure: true,
      });
      changeLanguage(lang);
      router.locale = lang;
      return 
    } else if (localStorage.getItem("lang")){
      const local = localStorage.getItem("lang")
      window.history.pushState({}, "", `${window.location.href}${local}`);
    } else {
      localStorage.setItem("lang", "en");
      window.history.pushState({}, "", `${window.location.href}en`);
    }
  }, []);

  useEffect(() => {
    setShowConsent(status);
  }, [showConsent]);

  useEffect(() => {
    if (!Object.keys(router?.query)?.length) {
      applyTheme(baseTheme);
    }
  }, [router]);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(()=> {
    const pingHerokuServer = async () => {
      try {
        const response = await fetch('https://kmit-policyhub.herokuapp.com');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log({result})
      } catch (error) {
        console.log(error.message);
      }
    };

    pingHerokuServer();
  },[])
  
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        {typeof window !== "undefined" && !isMobile() && (
          <Script src="/tailwindcss.js" />
        )}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-QZE40XCZJQ"
        />
        <script defer async src="/gtm.js"></script>
      </Head>
      <ToastContainer theme={"colored"} />
      {/* // {mounted && <Component {...pageProps} />} */}
      <Component {...pageProps} />
      {!showConsent && (
        <div className="cookies-wrap" style={{ opacity: showConsent ? 0 : 1 }}>
          {t("cookiesText")}{" "}
          <p
            className="text-Primary hover:underline cursor-pointer pl-[3px] m-[0px]"
            onClick={() =>
              window.open("https://www.seforall.org/privacy-policy")
            }
          >
            {t("Readmore")}
          </p>
          <button
            className="cookies-accept-button"
            onClick={() => onAcceptCookies()}
          >
            {t("Accept")}
          </button>
        </div>
      )}
    </QueryClientProvider>
  );
}

export default MyApp;
