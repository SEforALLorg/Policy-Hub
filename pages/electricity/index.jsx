import React, { useState, useEffect, useRef } from "react";
import Footer from "components/footer";
import Header from "components/header";
import { ErrorNotify } from "components/notification";
import { getQuestions } from "pages/api/questions";

import Dashboard from "components/dashboard";
import {
  CLEANCOOKING,
  ELECTRICITYACCESS,
  ENERGYEFFICIENCY,
  SUSTAINABLECOOLING,
} from "../../constant";
import { useQuery } from "react-query";
import { capitalizedString, getResourses } from "../../utilities";
import { useRouter } from "next/router";

const Electricity = () => {
  const router = useRouter();
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [resources, setResources] = useState();
  const ref = useRef();
  const [res, setRes] = useState("");
  const [loader, setLoader] = useState(true);
  const [dynamicClass, setDynamicClass] = useState("");

  const localQuestions =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("questions"));

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  useEffect(() => {
    if (router?.query?.resource) {
      setRes(capitalizedString(router?.query?.resource));
      switch (capitalizedString(router?.query?.resource)) {
        case ELECTRICITYACCESS:
          return setDynamicClass("electricity_access");
        case CLEANCOOKING:
          return setDynamicClass("clean_cooking");
        case SUSTAINABLECOOLING:
          return setDynamicClass("Sustainable_cooling");
        case ENERGYEFFICIENCY:
          return setDynamicClass("energy_efficiency");
        default:
          setDynamicClass("");
          break;
      }
    }
  }, [router]);

  const {
    data: questions,
    isFetching: isFetchingQuestions,
    refetch,
  } = useQuery(["getQuestions"], getQuestions, {
    // enabled: !localQuestions,
    onError: (error) => {
      ErrorNotify(error?.response?.data?.error?.message);
    },
  });

  useEffect(() => {
    if (!localQuestions) {
      refetch();
    }
  }, [localQuestions]);

  const allQuestions = questions?.data?.data;

  useEffect(async () => {
    const dataObject = {};
    if (allQuestions?.length) {
      const resources = await getResourses(allQuestions);
      const flatArray = resources.flat();
      flatArray.map((element) => {
        dataObject[element.id] = element;
      });
      setResources(dataObject);
    }
  }, [allQuestions]);

  return (
    <main id="fullWrap" ref={ref} className={dynamicClass}>
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
              questions={localQuestions || questions}
              isFetchingQuestions={
                loader ? true : localQuestions ? false : isFetchingQuestions
              }
              setIsBigCard={() => {}}
              resources={resources}
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
