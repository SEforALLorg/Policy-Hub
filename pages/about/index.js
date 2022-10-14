import React from "react";
import Footer from "components/footer";
import Header from "components/header";
import About from "../../components/aboutus";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  return (
    <main>
      <Head>
        <title>{t("AboutTitle")}</title>
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
