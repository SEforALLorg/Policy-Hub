import React from "react";
import { useTranslation } from "react-i18next";
import { uuid } from "uuidv4";
import BlueButton from "components/buttons/blueButton";
import { applyTheme } from "../../theme/utils";
import darkTheme from "../../theme/dark";
import greenTheme from "../../theme/green";
import yellowTheme from "../../theme/yellow";
import baseTheme from "../../theme/base";
import blueTheme from "../../theme/blue";
import Loader from "../loader";
import { useEffect } from "react";

const Resources = ({ onYes, resourcesData, onNextQuestionId, selected }) => {
  const { t } = useTranslation();
  // localStorage.setItem("uuid", uuid());
  const onAnswerClick = (i) => {
    onYes();
    onNextQuestionId(i?.attributes?.QuestionId);
  };

  const changeColor = (e) => {
    selected(e.target.innerText)
    switch (e.target.innerText) {
      case "Electricity Access":
        applyTheme(baseTheme);
        break;
      case "CLEAN COOKING":
        applyTheme(greenTheme);
        break;
      case "SUSTAINABLE COOLING":
        applyTheme(darkTheme);
        break;
      case "ENERGY EFFICIENCY":
        applyTheme(yellowTheme); //blueTheme
        break;

      default:
        applyTheme(baseTheme);
        break;
    }
  };

  return (
    <div className="customize-card p-10 bg-white rounded-2xl w-full h-full m-auto">
      <div className="flex items-center customize-header">

          <img
            className="w-[230px] h-[157px] object-contain	mr-5"
            src="static/images/cards.svg"
            alt="card"
          />

        <div className="customize-heading font-bold text-[51px] leading-[60px] select-none text-text m-0">
          {t("AssessYourCountry")} 
  {/* {t("Customize")} */}
        </div>
      </div>
      <div className="my-3 border-b-[4px] border-primary opacity-20" />

      {resourcesData ? (
        <div>
          <div className="customize-heading font-bold text-[51px] leading-[60px] select-none text-text mb-3">
            {t("AreaWantToInvestigate")}
          </div>
          <div className="flex items-center flex-col max-w-[40%] m-auto customize-buttons">
            {resourcesData &&
              Object?.values(resourcesData)?.map((resource, index) => (
                <BlueButton
                  title={resource?.attributes.Name}
                  onClick={(e) => {
                    onAnswerClick(resource);
                    changeColor(e);
                  }}
                  key={index}
                  className="mb-[20px] h-[95px] text-[23px]"
                />
              ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center flex-col h-full justify-center">
          <Loader height={80} width={80} />{" "}
        </div>
      )}
    </div>
  );
};

export default Resources;
