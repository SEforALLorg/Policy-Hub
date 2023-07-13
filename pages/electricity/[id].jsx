import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Footer from "components/footer";
import Header from "components/header";
import { ErrorNotify } from "components/notification";
import { getQuestions } from "pages/api/questions";

import Dashboard from "components/dashboard";
import { useQuery } from "react-query";
import { getResources } from "../../utilities";
import { ELECTRICITYACCESS } from "../../constant";
import { useRouter } from "next/router";

const Electricity = () => {
  const router = useRouter();
  const isDashboardOpen = false;
  const ref = useRef();
  const res = ELECTRICITYACCESS;
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  const query = getResources(1);
  const { data: questions, isFetching: isFetchingQuestions } = useQuery(
    ["getQuestions", query],
    () => getQuestions(query),
    {
      onError: (error) => {
        ErrorNotify(error?.response?.data?.error?.message);
      },
    }
  );
  const Questions = questions?.data?.data;
  useEffect(() => {
    if (Questions) {
      const questionId = Number(router?.query?.id);
      const findIndex = Questions?.findIndex((item) => item?.id === questionId);
      if (findIndex < 0) {
        router.push("/electricity/9");
      }
    }
  }, [Questions]);

  return (
    <main id="fullWrap" ref={ref} className={"electricity_access"}>
      <Head>
        <title>Sustainable Energy | Policy Hub | Electricity</title>
        <meta
          name="description"
          content="Sustainable Energy | Policy Hub | Electricity"
        />
      </Head>
      <div className="mobile:p-2.5 xsm:p-[5px]">
        <div className="custom-container mx-auto">
          <div
            className={`px-[1rem] py-2 ${
              !isDashboardOpen ? "header-title-wrap" : ""
            }`}
          >
            <Header selectedRes={res} />
          </div>
          <div>
            <Dashboard
              questions={questions}
              isFetchingQuestions={loader ? true : isFetchingQuestions}
              setIsBigCard={() => {}}
              resources={[]}
              selectedRes={() => {}}
              footerRes={res}
              setIsOpen={() => {}}
              isPage={true}
            />
          </div>
          <div className="pt-[40px]">
            <Footer footerRes={res} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Electricity;
