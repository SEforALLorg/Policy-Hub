import React from "react";
import { useTranslation } from "react-i18next";
import { buttonOptions } from "../../constant";
import SubscribeComponent from "../subscribeComponent";
import { changingRestartLogo,changingFileLogo } from '../../constant/changinglogo';

const CompletedSteps = ({ onRestart, onStandaloneClick, onMiniClick }) => {
  const { t } = useTranslation();
  const resourceType = localStorage.getItem("ResourceType");
  return (
    <div className="completeWrap">
      <h5 className="font-bold text-[30px] text-center capitalize text-text process-text textColor">
        {t("Processcompleted")}
      </h5>
      <div className="flex flex-wrap justify-center	complete-buttons-wrap">
        <div className="restartWrap" onClick={onRestart} style={{display: changingRestartLogo === length ? "" : "flex"}}>
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
          <p style={{fontSize: 16}}>{t("Restart")}</p>
        </div>
        {buttonOptions.map((key)=>{
          if(resourceType && resourceType === Object.keys(key)?.[0]){
            return Object.values(key).map((items)=>{
              return Object.entries(items).map((item)=>{
                return (
                  <div className="restartWrap" onClick={() => onMiniClick([item[1]?.[0], item[1]?.[2], item?.[0]])}>
                    <img
                      src={item[1]?.[1]}
                      alt=""
                      style={{ width: 50, height: 50 }}
                    />
                    <p>{t(item?.[0])}</p>
                  </div>
                )
              })
            });
          }
        })}
        {/* <div className="restartWrap" onClick={() => onStandaloneClick()}>
          <img
            src="static/images/solaroutline.png"
            alt=""
            style={{ width: 60 }}
          />
          <p>{t("StandaloneSystems")}</p>
        </div> */}
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
