import React from "react";
// import Footer from "components/footer";
// import Header from "components/header";
// import About from "";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import('components/footer'));
const Header = dynamic(() => import('components/header'));
const About = dynamic(() => import('../../components/aboutus'));

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <main>
      <Head>
        <title>{t("AboutTitle")}</title>
        <meta name="description" content="VKH About us" />
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
    </main>
  );
};

export default AboutUs;
