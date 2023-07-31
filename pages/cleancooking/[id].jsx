import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import { getQuestions } from "pages/api/questions";

import { useQuery } from "react-query";
import { getResourceFirstQuestion, getResources } from "../../utilities";
import { CLEANCOOKING } from "../../constant";
import { cleanCookingFirstQuestion } from "../../constant/firstQuestion";
import { useRouter } from "next/router";
import pageImage from '../../static/images/electricity_access.svg'
import Head from "next/head";

import Dashboard from "components/dashboard"
import Footer from "components/footer";
import Header from "components/header"

const pageTitle = "Sustainable Energy | Policy Hub | Clean Cookings"
const pageDescription = "The Sustainable Energy Policy Hub guides policymaking by providing best-in-class policy guidelines, reports, tools, & templates from countries across the globe."
const Cleancooking = () => {
  const router = useRouter();
  const isDashboardOpen = false;
  const ref = useRef();
  const res = CLEANCOOKING;
  const [loader, setLoader] = useState(true);
  const [isReload, setIsReload] = useState(false);

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
    // Don't enable the query initially to prevent unnecessary fetching
    enabled: false,
  });
  const defaultQuestion = getResourceFirstQuestion();

  useEffect(() => {
    if (router?.query?.bigCard === "true" && !isReload) {
      setIsReload(true);
      refetch();
    } else if (router?.query?.id && !isReload && !questions) {
      const questionId = Number(router?.query?.id);
      if (questionId !== Number(defaultQuestion)) {
        setIsReload(true);
        router.push(`/cleancooking/${defaultQuestion}`);
      }
    }
  }, [isReload, router, questions]);

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
                setIsBigCard={() => {
                  setIsReload(true);
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
    </main>
  );
};
export default Cleancooking;