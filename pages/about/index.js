import React from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import('components/footer'));
const Header = dynamic(() => import('components/header'));
const About = dynamic(() => import('components/aboutus'));
const pageDescription = "Welcome to the About Us page of KnowledgeHub! Here, we unveil the essence and vision that drive our platform."

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <main>
      <Head>
        <title>{t("AboutTitle")}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={t("AboutTitle")} />
        <meta property="og:description" content={{pageDescription}} />
        <meta property="og:image" content={"/static/images/Black.png"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={t("AboutTitle")} />
        <meta property="twitter:description" content={{pageDescription}} />
        <meta property="twitter:image" content={"/static/images/Black.png"} />
      </Head>
      <div className="mobile:p-2.5 xsm:p-[5px]">
        <div className="custom-container mx-auto">
          <div className="px-3 py-2">
            <Header />
          </div>
          <div className="xsm:my-4 6xl:my-12 ">
            <About />
          </div>
          <div className="w-full pt-10">
            <Footer />
          </div>
        </div>
      </div>
      <h3 className="fixed invisible z-0">ABOUT US Sustainable Energy for All (SEforALL) is an international organization that works in partnership with the United Nations and government leaders.</h3>
    </main>
  );
};

export default AboutUs;
