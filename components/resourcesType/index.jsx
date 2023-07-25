import React from "react";
import { useTranslation } from "react-i18next";
import BlueButton from "components/buttons/blueButton";
import { IoClose } from "react-icons/io5";

import Loader from "../loader";
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
  loader,
}) => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const onAnswerClick = (i) => {
    localStorage.setItem("resourceObj", JSON.stringify(i));
    onYes();
    onNextQuestionId(i?.attributes?.QuestionId, i?.attributes);
  };

  const changeColor = (resourceType) => {
    const res = resourceType?.attributes?.Name;
    selected(resourceType);
    switch (res) {
      case ELECTRICITYACCESS:
        localStorage.setItem("ResourceType", res);
        break;
      case CLEANCOOKING:
        localStorage.setItem("ResourceType", res);
        break;
      case SUSTAINABLECOOLING:
        localStorage.setItem("ResourceType", res);
        break;
      case ENERGYEFFICIENCY:
        localStorage.setItem("ResourceType", res);
        break;
      default:
        break;
    }
  };

  return (
    <div className="customize-card p-10 bg-white rounded-2xl w-full h-full m-auto">
      <div className="flex items-center customize-header relative">
        <img
          className="tabMax:w-[200px] laptop:w-[230px] h-[157px] object-contain object-contain-height	mr-5"
          src="/static/images/cards.svg"
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

      {!loader && resourcesData ? (
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
                  className="mb-[20px] h-[95px] !text-[23px]"
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
