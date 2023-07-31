import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import { getQuestions } from "pages/api/questions";

import { useQuery } from "react-query";
import { getResourceFirstQuestion, getResources } from "../../utilities";
import { ELECTRICITYACCESS } from "../../constant";
import { useRouter } from "next/router";
import { electricityFirstQuestion } from "../../constant/firstQuestion";

import Dashboard from "components/dashboard"
import Footer from "components/footer";
import Header from "components/header"

const pageTitle = "Sustainable Energy | Policy Hub | Electricity"
const pageDescription = "Sustainable Energy | Policy Hub | Electricity"
const pageImage = "/static/images/electricity_access.svg"
const Electricity = () => {
  const router = useRouter();
  const isDashboardOpen = false;
  const ref = useRef();
  const res = ELECTRICITYACCESS;
  const [isReload, setIsReload] = useState(false);
  
  const query = getResources(1);
  const {
    data: questions,
    isFetching: isFetchingQuestions,
    refetch,
  } = useQuery(["getQuestions", query], () => getQuestions(query), {
    enabled: false,
    onError: (err) => {
      // Handle the error (e.g., display an error message, log it, etc.)
      console.error("Error fetching questions:", err);
    },
  });
  const defaultQuestion = getResourceFirstQuestion()
  useEffect(() => {
    if (router?.query?.bigCard === "true" && !isReload) {
      setIsReload(true);
      refetch();
    } else if (router?.query?.id && !isReload && !questions) {
      const questionId = Number(router?.query?.id);
      if (questionId !== Number(defaultQuestion)) {
        setIsReload(true);
        router.push(`/electricity/${defaultQuestion}`);
      }
    }
  }, [router]);
  return (
    <main id="fullWrap" ref={ref} className={"electricity_access"}>
      <Head>
        <title>{t("HomeTitle")}</title>
        <meta name="description" content={t("HomeTitle")} />
        <meta property="og:title" content={t("PlatformThatSupports")} />
        <meta property="og:description" content={t("PlatformThatSupports")} />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={pageImage} />
        {/* Additional meta tags or links can be added here */}
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
                      data: [electricityFirstQuestion],
                    },
                  }
                }
                isFetchingQuestions={isFetchingQuestions}
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
export default Electricity;
