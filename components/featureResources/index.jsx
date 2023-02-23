import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { videosCard } from "constant";
import StartButton from "components/buttons/startButton";

import VideoCard from "./components/video";
import OtherToolsCard from "./components/otherTools";
import { useTranslation } from "react-i18next";
import { filterResources, getAllResources } from "../../pages/api/resources";
import { ErrorNotify } from "components/notification";
import { getResourcesQuery } from "../../utilities";
import Loader from "../loader";

const Feature = () => {
  const [isVideoCard, setIsVideoCard] = useState("");
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState();
  const [query, setQuery] = useState();
  const [allResources, setAllResources] = useState();

  const { data: data } = useQuery(["getAllResources"], getAllResources, {
    onError: (error) => {
      ErrorNotify(error?.response?.data?.error?.message);
    },
  });

  useEffect(() => setAllResources(data?.data?.data), [data]);

  const { data: filteredCards, refetch } = useQuery(
    ["filterResources", query],
    () => filterResources(query),
    {
      onError: (error) => {
        ErrorNotify(error?.response?.data?.error?.message);
      },
    }
  );

  useEffect(() => setAllResources(filteredCards?.data?.data), [filteredCards]);

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
      <div className="bg-white py-6 drop-shadow-dropShadow feature-wrap">
        <div className="xsm:px-4 mobile:px-[100px] relative">
          <div className="flex pb-[0px] my-6 w-full xsm:flex-wrap large:flex-nowrap resources-card">
            <div className="w-full">
              <h6
                className="font-bold leading-10 text-large mb-[20px] xsm:text-medium text-darktext 
                            uppercase small:text-medium large:text-large center-content resources-heading"
              >
                {t("Resources")}
              </h6>
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
      <div className="pt-[35px] pb-[60px] bg-white tools-wrap">
        <div className="xsm:px-4 mobile:px-[100px] resources-cards-wrap">
          <div>
            <div className="flex items-center justify-between">
              <h6
                className="font-bold leading-10 text-large text-darktext 
              uppercase xsm:text-medium small:text-medium large:text-large mt-[0px] video-title center-content"
              >
                {t("OtherUsefulPlatforms")}
              </h6>
              <button
                onClick={() => setAllResources(data?.data?.data)}
                className="bg-lightBlue rounded-[60px] w-full  text-normal text-center
                                      border-2 border-transparent outline-0 text-Primary py-[3px] px-2 xsm:text-xsmall laptop:text-xsmall 
                                      hover:bg-Primary hover:text-white ease-linear transition-all duration-500 w-[110px] button-animation card-tool-button"
              >
                {t("AllResources")}
              </button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {allResources ? (
                allResources?.map((resource) => {
                  return (
                    <OtherToolsCard
                      filterData={(e) => filterData(e)}
                      resourceType={resource?.attributes?.resources?.data}
                      title={resource?.attributes?.Title}
                      link={resource?.attributes?.Link}
                      description={resource?.attributes?.Description}
                    />
                  );
                })
              ) : (
                <div className="flex items-center flex-col h-full w-full justify-center">
                  <Loader height={80} width={80} />
                </div>
              )}
            </div>
            <h6
              className="font-bold leading-10 text-large text-darktext 
                            uppercase xsm:text-medium small:text-medium large:text-large mt-[80px] video-title center-content"
            >
              {t("VIDEOS")}
            </h6>
            <div className="flex items-stretch pt-0 pb-10 xsm:flex-wrap medium:flex-nowrap flex-wrap mr-[-10px] ml-[-10px] tools-card">
              {videosCard?.map((item, index) => (
                <div className="w-[33.3%] mb-[0px] p-[10px]" key={index}>
                  <VideoCard
                    link={item?.link}
                    title={item?.title}
                    setIsVideoCard={setIsVideoCard}
                    isVideoCard={isVideoCard}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
