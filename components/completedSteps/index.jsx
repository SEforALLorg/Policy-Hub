import React from "react";
import { useTranslation } from "react-i18next";
import SubscribeComponent from "../subscribeComponent";
import { changingRestartLogo,changingFileLogo } from '../../constant/changinglogo';

const CompletedSteps = ({ onRestart, onStandaloneClick, onMiniClick }) => {
  const { t } = useTranslation();
  return (
    <div className="completeWrap">
      <h5 className="font-bold text-[30px] text-center capitalize text-text process-text">
        {t("Processcompleted")}
      </h5>
      <div className="flex items-center justify-center complete-buttons-wrap">
        <div className="restartWrap" onClick={onRestart}>
        {changingRestartLogo.map((key)=>{
            if (localStorage.getItem("ResourceType") === Object.keys(key)?.[0]) {
               return (
                <img
                src = {Object.values(key)?.[0]}
                alt=""
              />
               )
         }
          })}
          <p>{t("Restart")}</p>
        </div>
        <div className="restartWrap" onClick={() => onMiniClick()}>
          <img
            src="static/images/mini-grid.png"
            alt=""
            style={{ width: 80, height: 60 }}
          />
          <p>{t("MiniGrid")}</p>
        </div>
        <div className="restartWrap" onClick={() => onStandaloneClick()}>
          <img
            src="static/images/solaroutline.png"
            alt=""
            style={{ width: 60 }}
          />
          <p>{t("StandaloneSystems")}</p>
        </div>
        <div
          className="restartWrap"
          onClick={() => window.open("/allresources", "_self")}
        >
           {changingFileLogo.map((key)=>{
            if (localStorage.getItem("ResourceType") === Object.keys(key)?.[0]) {
               return (
                <img
                src = {Object.values(key)?.[0]}
                alt=""
              />
               )
         }
          })}
          <p>{t("Viewallresources")}</p>
        </div>
      </div>
      <p className="font-normal text-[14px] text-center text-text mt-[30px] share-your-text">
        {t("ShareYourInfo")}
      </p>
      <div className="flex items-center justify-center inputFullWrap mt-[30px]">
        <SubscribeComponent />
      </div>
    </div>
  );
};

export default CompletedSteps;
