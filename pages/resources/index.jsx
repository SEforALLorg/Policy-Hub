import React from "react";
import Head from "next/head";

import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Feature from "components/featureResources";

const Resources = () => {
  return (
    <main>
      <Head>
        <title>Sustainable Energy for All | Knowledge Hub | Resources</title>
      </Head>
      <div className="mobile:p-2.5 xsm:p-[5px]">
        <div className="custom-container mx-auto">
          <div className="px-3 py-2">
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
