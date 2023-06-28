import React from "react";
import Head from "next/head";

import Footer from "components/footer";
import Header from "components/header";
import ALLReports from "components/resources";
import { useTranslation } from "react-i18next";

const Resources = () => {
  const { t } = useTranslation();
  return (
    <main>
      <Head>
        <title>{t("AllResourcesTitle")}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
        <meta name="description" content="VKH All Resources" />
      </Head>
      <div className="p-[10px]">
        <div className="custom-container mx-auto">
          <Header />
          <div className="card-box">
            <ALLReports />
          </div>
          <div className="pt-[40px]">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resources;
