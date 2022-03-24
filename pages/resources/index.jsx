import React from "react";
import { useQuery } from "react-query";

import { ErrorNotify } from "components/notification";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Feature from "components/feature_resources";

import { getReports } from "pages/api/reports";
import Head from "next/head";

const FeatureResources = () => {
  const { data: allReports, isFetching: isFetchingReports } = useQuery(
    ["getReports", ''],
    () => getReports(''),
    {
      onError: (error) => {
        ErrorNotify(error.response.data.error.message);
      },
    }
  );

  return (
    <main>
       <Head>
        <title>Sustainable Energy for All | Knowledge Hub | Resources</title>
      </Head>
      <div className="mobile:p-2.5 xsm:p-[5px]">
            <div className="custom-container mx-auto">
                <div className='px-3 py-2'>
                    <Header />
                </div>
                <div className='xsm:my-4 6xl:my-12 '>
                    <Feature reports={allReports?.data?.data} isFetchingReports={isFetchingReports} />
                </div>
                <div className="pt-10 w-full ">
                    <Footer />
                </div>
            </div>
        </div>
    </main>
  );
};

export default FeatureResources;
