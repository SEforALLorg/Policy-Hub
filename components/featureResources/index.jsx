import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import StartButton from "components/buttons/startButton";

import OtherToolsCard from "./components/otherTools";
import { useTranslation } from "react-i18next";
import { filterResources } from "../../pages/api/resources";
import { ErrorNotify } from "components/notification";
import { getResourcesQuery } from "../../utilities";
import Loader from "../loader";

const Feature = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState();
  const [query, setQuery] = useState();
  const [disable, setDisable] = useState(true);

  const { data: filteredCards, refetch } = useQuery(
    ["filterResources", query],
    () => filterResources(query),
    {
      onError: (error) => {
        ErrorNotify(error?.response?.data?.error?.message);
      },
    }
  );
  const setData = () => {
    const mainData = filteredCards?.data?.data;
    const filterData =
      mainData?.filter((item) => item?.id === 12 || item?.id === 11) || [];
    const finalIds = filterData?.map((item) => item?.id);
    const finalData =
      mainData?.filter((item) => !finalIds?.includes(item?.id)) || [];
    return [...filterData, ...finalData];
  };

  const allResources = setData(filteredCards);

  useEffect(() => {
    if (query) {
      refetch();
    }
  }, [query]);

  const filterData = (type) => {
    const query = getResourcesQuery(type?.id);
    setQuery(query);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLang(localStorage.getItem("lang"));
    }
  }, []);

  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div className="bg-white drop-shadow-dropShadow feature-wrap p-[2.5rem] all_platform_table">
        <div className="xsm:px-4 mobile:px-[0px] relative">
          <div className="flex pb-[0px] my-0 w-full xsm:flex-wrap large:flex-nowrap resources-card">
            <div className="w-full">
              <h1
                className="font-bold leading-10 text-large mb-[20px] xsm:text-medium text-darktext 
                            uppercase small:text-medium large:text-large center-content resources-heading"
              >
                {t("Resources")}
              </h1>
              <p className="center-content not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-3 text-justify">
                {t("AllOfTheKnowledge")} <b>{t("Downloadthefiltered")}</b>
                {t("Havethem")}
                <b>{t("ViaEmail")}</b>
              </p>
              <p className="center-content not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-2 mt-[10px] text-justify">
                {t("ExploreOurDatabase")}
              </p>
            </div>
          </div>
          <div className="text-center mt-4 resources-button">
            <StartButton
              title={t("BrowseResource")}
              onClick={() => window.open(`/${lang}/allresources`, "_self")}
            />
          </div>
        </div>
      </div>
      <div className="pt-[35px] pb-[60px] bg-white tools-wrap px-[2.5rem] all_platform_table mt-[-1px]">
        <div className="xsm:px-4 mobile:px-[0px] resources-cards-wrap">
          <div>
            <div className="flex items-center justify-between mt-[28px] mb-[20px] headerContainer">
              <h2
                className="font-bold leading-10 text-large text-darktext 
              uppercase xsm:text-medium small:text-medium large:text-large m-[0px] video-title center-content"
              >
                {t("OtherUsefulPlatforms")}
              </h2>
              <button
                onClick={() => {
                  filterData("");
                  setDisable(true);
                }}
                disabled={disable}
                className={`bg-lightBlue rounded-[60px] w-full text-normal border-2 border-transparent outline-0 text-Primary py-[3px] px-2 xsm:text-xsmall laptop:text-xsmall ${
                  !disable &&
                  "hover:bg-Primary hover:text-white ease-linear transition-all duration-500 button-animation"
                } w-[110px] card-tool-button allBtn`}
              >
                {t("AllPlatforms")}
              </button>
            </div>
            <div className="cardWrap">
              {allResources?.length ? (
                allResources?.map((resource, index) => {
                  return (
                    <OtherToolsCard
                      filterData={(e) => {
                        filterData(e);
                        setDisable(false);
                      }}
                      resourceType={resource?.attributes?.resources?.data}
                      title={resource?.attributes?.Title}
                      link={resource?.attributes?.Link}
                      description={resource?.attributes?.Description}
                      key={index}
                    />
                  );
                })
              ) : (
                <div className="flex items-center flex-col h-full w-full justify-center">
                  <Loader height={80} width={80} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
