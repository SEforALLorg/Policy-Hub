import React from "react";
import { useTranslation } from "react-i18next";
import { buttonOptions } from "../../constant";
import SubscribeComponent from "../subscribeComponent";
import {
  changingRestartLogo,
  changingFileLogo,
} from "../../constant/changinglogo";

const CompletedSteps = ({ onRestart, onMiniClick }) => {
  const { t, i18n } = useTranslation();
  const language = i18n.language === 'en';
  const resourceType = localStorage.getItem("ResourceType");
  return (
    <div className="completeWrap">
      <h5 className="font-bold text-[30px] text-center capitalize text-text process-text textColor">
        {t("Processcompleted")}
      </h5>
      <div className="flex flex-wrap justify-center	complete-buttons-wrap">
        <div
          className="restartWrap"
          onClick={onRestart}
          style={{ display: changingRestartLogo === length ? "" : "flex" }}
        >
          {changingRestartLogo.map((key, index) => {
            if (
              localStorage.getItem("ResourceType") === Object.keys(key)?.[0]
            ) {
              return <img src={Object.values(key)?.[0]} alt="type" key={index} />;
            }
          })}
          <p>{t("Restart")}</p>
        </div>
        {buttonOptions.map((key) => {
          if (resourceType && resourceType === Object.keys(key)?.[0]) {
            return Object.values(key).map((items) => {
              return Object.entries(items).map((item, index) => {
                return (
                  <div
                    className="restartWrap"
                    onClick={() =>
                      onMiniClick([item[1]?.[0], item[1]?.[2], item?.[0], item[1]?.[3]])
                    }
                    key={index}
                  >
                    <img
                      src={item[1]?.[1]}
                      alt="button_image"
                      style={{ width: 50, height: 50 }}
                    />
                    <p>{language ? item?.[0] : item[1]?.[3]}</p>
                  </div>
                );
              });
            });
          }
        })}
        <div
          className="restartWrap"
          onClick={() => window.open(`/${i18n.language}/allresources`, "_self")}
        >
          {changingFileLogo.map((key, index) => {
            if (
              localStorage.getItem("ResourceType") === Object.keys(key)?.[0]
            ) {
              return <img src={Object.values(key)?.[0]} alt="resource_type" key={index} />;
            }
          })}
          <p>{t("Viewallresources")}</p>
        </div>
        <p className="font-normal text-[14px] text-center text-text mt-[30px] share-your-text textColor w-full">
          {t("ShareYourInfo")}
        </p>
        <div className="flex items-center justify-center inputFullWrap mt-[30px]">
          <SubscribeComponent />
        </div>
      </div>
    </div>
  );
};

export default CompletedSteps;
