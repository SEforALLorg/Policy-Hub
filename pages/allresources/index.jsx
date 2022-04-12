import React from "react";
import Head from "next/head";

import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import ALLReports from "components/resources";

const Resources = () => {
  return (
    <main>
       <Head>
        <title>Sustainable Energy for All | Knowledge Hub | All Resources</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      </Head>
      <div className='p-[10px]'>
      <div className="custom-container mx-auto">
          <Header />
          <div className="card-box">
            <ALLReports />
          </div>
          <div className='pt-[40px]'>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resources;
