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
  resourcesList,
} from "../../constant";
import ResourcesTypeSkeleton from "../skeleton/resourcesTypeSkeleton";

const visibleIds = [1, 2, 3, 4];

const Resources = ({
  onYes,
  resourcesData,
  onNextQuestionId,
  selected,
  setIsOpen,
  loader,
}) => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
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
  const getAllresources = resourcesData || resourcesList;

  return (
    <div className="customize-card p-10 bg-white rounded-2xl w-full m-auto tab:h-[770px] mobileMax:!h-[488px]">
      {!loader && resourcesData ? (
        <>
          <div className="flex items-center customize-header relative">
            <img
              className="tabMax:w-[200px] laptop:w-[230px] h-[157px] object-contain object-contain-height	mr-5"
              src="/static/images/cards.svg"
              alt="card"
            />

            <h1 className="customize-heading font-bold text-[51px] leading-[60px] text-text m-0">
              {t("AssessYourCountry")}
            </h1>
            {/* <div
          onClick={() => setIsOpen(false)}
          className="closeIcon text-gray-400 hover:text-gray-900 "
        >
          <IoClose className="w-full h-full" />
        </div> */}
          </div>
          <div className="my-3 border-b-[4px] border-primary opacity-20" />

          <div>
            <div className="customize-heading font-bold text-[51px] leading-[60px] text-text mobileMax:!mb-3 tab:!mb-[3rem]">
              {t("AreaWantToInvestigate")}
            </div>
           <div className="min-h-[300px] mobileMax:min-w-[200px] flex items-center w-full">
           <div className="w-full flex items-center justify-between flex-wrap customize-buttons customize-row-button">
              {getAllresources &&
                Object?.values(getAllresources)
                ?.filter((resource) => visibleIds?.includes(resource?.id))
                ?.map((resource) => (
                  <BlueButton
                    title={
                      isEnglish
                        ? resource?.attributes?.Name
                        : resource?.attributes?.FrenchName
                    }
                    onClick={() => {
                      onAnswerClick(resource);
                      changeColor(resource);
                    }}
                    key={
                      isEnglish
                        ? resource?.attributes?.Name
                        : resource?.attributes?.FrenchName
                    }
                    className="mb-[20px] h-[95px] !text-[23px]"
                  />
                ))}
            </div>
           </div>
          </div>
        </>
      ) : (
        <div className="h-full w-full">
          <ResourcesTypeSkeleton/>
        </div>
      )}
    </div>
  );
};

export default Resources;
