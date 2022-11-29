import React, { useEffect, useState } from "react";

import { videosCard } from "constant";
import StartButton from "components/buttons/startButton";

import VideoCard from "./components/video";
import OtherToolsCard from "./components/otherTools";
import { useTranslation } from "react-i18next";

const Feature = () => {
  const [isVideoCard, setIsVideoCard] = useState("");
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState();

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
            <h6
              className="font-bold leading-10 text-large text-darktext 
              uppercase xsm:text-medium small:text-medium large:text-large mt-[0px] video-title center-content"
            >
              {t("OtherUsefulPlatforms")}
            </h6>
            <OtherToolsCard
              image="/static/images/nigeria-ImResizer.jpg"
              title={t("NigeriaIntegratedEnergy")}
              link="http://nigeria-iep.sdg7energyplanning.org/"
              description={<>{t("TheNigeriaIntegrated")}</>}
            />
            <OtherToolsCard
              image="/static/images/sas-ImResizer.png"
              title={t("SASKnowledgehub")}
              link="https://www.ace-taf.org/sas-knowledge-hub/"
              description={<>{t("SASKnowledgeHubDescription")}</>}
            />
            <OtherToolsCard
              image="/static/images/policy-ImResizer.png"
              title={t("PolicyKnowledgeHub")}
              link="https://www.gogla.org/policy-knowledge-hub"
              description={<>{t("PolicyKnowledgeHubDescription")}</>}
            />
            <OtherToolsCard
              image="/static/images/electrifying-economies-ImResizer.jpg"
              title={t("Electrifyingeconomies")}
              link="https://www.rockefellerfoundation.org/rf-microsites/electrifying-economies/"
              description={<>{t("ElectrifyingEconomiesDescription")}</>}
            />
            <OtherToolsCard
              image="/static/images/green-mini.png"
              title={t("TheGreenMini-GridsHelpDesk")}
              link="https://greenminigrid.afdb.org/"
              description={<>{t("TheGreenMini")}</>}
            />
            <OtherToolsCard
              image="/static/images/energy-ImResizer.png"
              title={t("EnergyAccessExplorer")}
              link="https://www.energyaccessexplorer.org/"
              description={<>{t("EnergyAccessExplorerDescription")}</>}
            />
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
