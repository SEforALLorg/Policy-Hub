import React, { useRef, lazy, Suspense, useEffect } from "react";
import Head from "next/head";
import { getQuestions } from "pages/api/questions";

import { useQuery } from "react-query";
import { getResources } from "../../utilities";
import { ELECTRICITYACCESS } from "../../constant";
import { useRouter } from "next/router";
import { electricityFirstQuestion } from "../../constant/firstQuestion";

const Dashboard = lazy(() => import("components/dashboard"));
const Footer = lazy(() => import("components/footer"));
const Header = lazy(() => import("components/header"));
let isReload = false;
const Electricity = () => {
  const router = useRouter();
  const isDashboardOpen = false;
  const ref = useRef();
  const res = ELECTRICITYACCESS;

  const query = getResources(1);
  const {
    data: questions,
    isFetching: isFetchingQuestions,
    refetch,
  } = useQuery(["getQuestions", query], () => getQuestions(query), {
    enabled: false,
  });
  useEffect(() => {
    if (router?.query?.bigCard === "true" && !isReload) {
      isReload = true;
      refetch();
    } else if (router?.query?.id && !isReload && !questions) {
      const questionId = Number(router?.query?.id);
      if (questionId !== 9) {
        isReload = true;
        router.push("/electricity/9");
      }
    }
  }, [router]);
  return (
    <main id="fullWrap" ref={ref} className={"electricity_access"}>
      <Head>
        <title>Sustainable Energy | Policy Hub | Electricity</title>
        <meta
          name="description"
          content="Sustainable Energy | Policy Hub | Electricity"
        />
        <link rel="preconnect" href="https://kmit-policyhub.herokuapp.com" />
      </Head>
      <Suspense fallback={<div />}>
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
                questions={
                  questions || {
                    data: {
                      data: [electricityFirstQuestion],
                    },
                  }
                }
                isFetchingQuestions={isFetchingQuestions}
                setIsBigCard={() => {
                  isReload = true;
                  refetch();
                }}
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
      </Suspense>
    </main>
  );
};
export default Electricity;
