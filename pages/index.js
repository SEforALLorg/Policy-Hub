import Head from "next/head";
import Landing from "./landing";
import { useTranslation } from "react-i18next";


const pageTitle = "Sustainable Energy | Policy Hub ";
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
        <meta property="og:image" content={`/static/images/SEforALL_Logo_Black.png`} />
        <meta property="image" content={`/static/images/SEforALL_Logo_Black.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={`/static/images/SEforALL_Logo_Black.png`} />
        <meta name="twitter:image" content={`/static/images/SEforALL_Logo_Black.png`} />
      </Head>
      <Landing />
    </div>
  );
}
