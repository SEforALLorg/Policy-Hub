import React from "react";
import Head from "next/head";

import Footer from "components/footer";
import Header from "components/header";
import Contact from "components/contactus";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <main>
      <Head>
        <title>{t("ContactTitle")}</title>
        <meta name="description" content="VKH Contact Us" />
      </Head>
      <div className="mobile:p-2.5 xsm:p-[5px]">
        <div className="custom-container mx-auto">
          <div className="px-3 py-2">
            <Header />
          </div>
          <div className="xsm:my-4 6xl:my-12">
            <Contact />
          </div>
          <div className="w-full m-auto	pt-10">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
