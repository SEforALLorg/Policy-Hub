import React from "react";
import { useTranslation } from "react-i18next";
import BlueButton from "components/buttons/blueButton";
import { applyTheme } from "../../theme/utils";
import darkTheme from "../../theme/SustainableCooling";
import greenTheme from "../../theme/clean_cooking ";
import yellowTheme from "../../theme/EnergyEfficiency";
import baseTheme from "../../theme/base";
import Loader from "../loader";
import electricityTheme from "../../theme/Electricity";
import { IoClose } from "react-icons/io5";
import {
  CLEANCOOKING,
  ELECTRICITYACCESS,
  ENERGYEFFICIENCY,
  SUSTAINABLECOOLING,
} from "../../constant";

const Resources = ({
  onYes,
  resourcesData,
  onNextQuestionId,
  selected,
  setIsOpen,
}) => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const onAnswerClick = (i) => {
    onYes();
    onNextQuestionId(i?.attributes?.QuestionId);
  };

  const changeColor = (resourceType) => {
    const res = resourceType?.attributes?.Name;
    selected(resourceType);
    switch (res) {
      case ELECTRICITYACCESS:
        localStorage.setItem("ResourceType", res);
        applyTheme(electricityTheme);
        break;
      case CLEANCOOKING:
        localStorage.setItem("ResourceType", res);
        applyTheme(greenTheme);
        break;
      case SUSTAINABLECOOLING:
        localStorage.setItem("ResourceType", res);
        applyTheme(darkTheme);
        break;
      case ENERGYEFFICIENCY:
        localStorage.setItem("ResourceType", res);
        applyTheme(yellowTheme);
        break;
      default:
        applyTheme(baseTheme);
        break;
    }
  };

  return (
    <div className="customize-card p-10 bg-white rounded-2xl w-full h-full m-auto">
      <div className="flex items-center customize-header relative">
        <img
          className="tabMax:w-[200px] laptop:w-[230px] h-[157px] object-contain object-contain-height	mr-5"
          src="static/images/cards.svg"
          alt="card"
        />

        <div className="customize-heading font-bold text-[51px] leading-[60px] text-text m-0">
          {t("AssessYourCountry")}
        </div>
        <div
          onClick={() => setIsOpen(false)}
          className="closeIcon text-gray-400 hover:text-gray-900 "
        >
          <IoClose className="w-full h-full" />
        </div>
      </div>
      <div className="my-3 border-b-[4px] border-primary opacity-20" />

      {resourcesData ? (
        <div>
          <div className="customize-heading font-bold text-[51px] leading-[60px] text-text mb-3">
            {t("AreaWantToInvestigate")}
          </div>
          <div className="flex items-center flex-col max-w-[40%] m-auto customize-buttons">
            {resourcesData &&
              Object?.values(resourcesData)?.map((resource) => (
                <BlueButton
                  title={isEnglish ? resource?.attributes?.Name : resource?.attributes?.FrenchName}
                  onClick={() => {
                    onAnswerClick(resource);
                    changeColor(resource);
                  }}
                  key={isEnglish ? resource?.attributes?.Name : resource?.attributes?.FrenchName}
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
