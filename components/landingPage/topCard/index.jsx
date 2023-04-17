import React from "react";
import StartButton from "components/buttons/startButton";
import { useTranslation } from "react-i18next";

const TopCard = ({ HandleOpen }) => {
  const { t } = useTranslation();
  return (
    <div className="customize-card p-[1.8rem] py-[2.5rem] h-[auto] bg-white rounded-2xl w-[80%] relative mt-[3rem] mb-[1rem] mx-[auto] SustainableBox">
      <div className="items-center customize-header">
        <h1 className="text-[#000000b3] font-bold	text-[35px] leading-[50px] text-center	select-none	uppercase">
          {t("Sustainable")}
          <span className="text-Secondary"> {t("Energy")} </span>
          <span className="text-Primary"> {t("Policy")}</span> {t("Hub")}
        </h1>
      </div>
      <div id="container-main" className={`flex my-[1.5rem] `}>
        <div className="container-box w-[50%]">
          <div className="flex flex-col h-[50%] ">
            <div className="bg-white-900 mobile-card-width items-start card-section-wrap cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap p-[20px] flex h-[100%]">
              <img
                className="w-[16%] mr-[8px]"
                src="../../../static/images/hub.svg"
                alt="hub_logo"
              />
              <p className="text-[15px] leading-[50px] text-[#000000a1] m-0 flex-1 text-justify">
                {t("PlatformThatSupports")}
              </p>
            </div>
            <div className="mx-[auto] w-[75%] border-b-[2px] border bg-black opacity-[1]" />
          </div>
          <div className="flex flex-col h-[50%]">
            <div className="second-container bg-white-900 mobile-card-width card-section-wrap cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap p-[20px] flex items-start h-[50%] mt-[2rem]">
              <img
                className="w-[16%] mr-[8px]"
                src="../../../static/images/journey.svg"
                alt="journey_logo"
              />
              <p className="text-[12px] leading-[55px] text-[#000000a1] m-0 flex-1 text-justify">
                {t("ResourcesOnAccess")}
              </p>
            </div>
            <div className="divider-hide mx-[auto] w-[75%] border-b-[2px] border bg-black opacity-[1]" />
          </div>
        </div>
        <div className="divider w-[1px]  border-b-[4px] border opacity-[1]" />
        <div className="container-box w-[50%]">
          <div className="third-container flex flex-col h-[50%]">
            <div className="bg-white-900 mobile-card-width items-start card-section-wrap cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap p-[20px] flex h-[100%]">
              <img
                className="w-[16%] mr-[8px] mt-[-10px]"
                src="../../../static/images/sustainable_hub.png"
                alt="sustainable_hub_logo"
              />
              <p className="text-[12px] leading-[55px] text-[#000000a1] m-0 flex-1 text-justify">
                {t("TheKnowledgeHub")}
              </p>
            </div>
            <div className="mx-[auto] w-[75%] border-b-[2px] border bg-black opacity-[1]" />
          </div>
          <div className="last-card bg-white-900 mobile-card-width items-start card-section-wrap cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap p-[20px] flex h-[50%] mt-[2rem]">
            <img
              className="w-[16%] mr-[8px]"
              src="../../../static/images/guide.svg"
              alt="guide_logo"
            />
            <p className="text-[12px] leading-[55px] text-[#000000a1] m-0 flex-1 text-justify">
              {t("OnElectricity")}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col max-w-[40%] m-auto customize-buttons">
        <div
          className="w-[49%] absolute bottom-[-30px] left-[26%]"
          onClick={HandleOpen}
        >
          <StartButton title={t("ClickHereToStart")} className="w-full" />
        </div>
      </div>
    </div>
  );
};
export default TopCard;
