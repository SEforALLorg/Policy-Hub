import Head from "next/head";
import Landing from "./landing";
import { useTranslation } from "react-i18next";

const pageTitle = "Sustainable Energy | Policy Hub | Electricity";
const pageDescription =
  "The Sustainable Energy Policy Hub guides policymaking by providing best-in-class policy guidelines, reports, tools, & templates from countries across the globe.";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </div>
  );
}
