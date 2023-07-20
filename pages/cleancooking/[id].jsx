import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import { getQuestions } from "pages/api/questions";

import { useQuery } from "react-query";
import { getResourceFirstQuestion, getResources } from "../../utilities";
import { CLEANCOOKING } from "../../constant";
import { cleanCookingFirstQuestion } from "../../constant/firstQuestion";
import { useRouter } from "next/router";
import pageImage from '../../static/images/electricity_access.svg'
import Head from "next/head";

const Dashboard = lazy(() => import("components/dashboard"));
const Footer = lazy(() => import("components/footer"));
const Header = lazy(() => import("components/header"));
let isReload = false;
const pageTitle = "Sustainable Energy | Policy Hub | Clean Cookings"
const pageDescription = "Sustainable Energy | Policy Hub | Clean Cookings"
const Cleancooking = () => {
  const router = useRouter();
  const isDashboardOpen = false;
  const ref = useRef();
  const res = CLEANCOOKING;
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  const query = getResources(2);
  const {
    data: questions,
    isFetching: isFetchingQuestions,
    refetch,
  } = useQuery(["getQuestions", query], () => getQuestions(query), {
    enabled: false,
  });
  const defaultQuestion = getResourceFirstQuestion();
  useEffect(() => {
    if (router?.query?.bigCard === "true" && !isReload) {
      isReload = true;
      refetch();
    } else if (router?.query?.id && !isReload && !questions) {
      const questionId = Number(router?.query?.id);
      if (questionId !== Number(defaultQuestion)) {
        isReload = true;
        router.push(`/cleancooking/${defaultQuestion}`);
      }
    }
  }, [router]);

  return (
    <main id="fullWrap" ref={ref} className={"clean_cooking"}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="image" content={pageImage} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={pageImage} />
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
                      data: [cleanCookingFirstQuestion],
                    },
                  }
                }
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
      </Suspense>
    </main>
  );
};
export default Cleancooking;
