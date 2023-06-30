import React from "react";
import Head from "next/head";

import Footer from "components/footer";
import Header from "components/header";
import Feature from "components/featureResources";
import { useTranslation } from "react-i18next";

const Resources = () => {
  const { t } = useTranslation();
  return (
    <main>
      <Head>
        <title>{t("ResourcesTitle")}</title>
        <meta name="description" content="VKH Resources" />
      </Head>
      <div className="mobile:p-2.5 xsm:p-[5px]">
        <div className="custom-container mx-auto">
          <div className={`px-[1rem] py-2`}>
            <Header />
          </div>
          <div className="xsm:my-4 6xl:my-12 ">
            <Feature />
          </div>
          <div className="pt-10 w-full ">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resources;
