import React from "react";
import { useTranslation } from "react-i18next";

const OtherToolsCard = ({
  resourceType,
  title,
  description,
  link,
  filterData,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={
        "bg-white resourceShadow rounded-2xl  overflow-hidden w-full other-card flex mt-[20px] card-animation resourceCard"
      }
    >
      <div className="pt-[15px] pr-4 pb-[17px] pl-[22px]  flex flex-col">
        <h3
          onClick={() => window.open(link)}
          className="font-[600] leading-6  text-darktext mb-1 text-medium otherTitle center-content cursor-pointer transition-all duration-1000 hover:underline"
        >
          {title}
        </h3>
        <p className="font-normal leading-[22px] text-darktext mb-2 text-xsmall otherDescription center-content flex-1">
          {description}
        </p>
        <div className="toolBtn flex flex-wrap">
          {resourceType &&
            resourceType?.map((type) => {
              return (
                <button
                  onClick={() => filterData({ id: type?.id })}
                  key={type?.attributes?.Name || "name"}
                  className="text-normal text-Primary xsm:text-xsmall laptop:text-xsmall bg-lightBlue rounded-[60px] text-normal border-2 border-transparent outline-0 py-[2px] px-[10px] hover:bg-Primary hover:text-white ease-linear transition-all duration-500 mb-[5px] mr-[5px] card-tool-button"
                >
                  {`${i18n.language === 'en' ? type?.attributes?.Name : type?.attributes?.FrenchName}`}
                </button>
              );
            })}
        </div>
        <div className="w-full">
          <button
            onClick={() => window.open(link)}
            className="bg-Primary rounded-[60px] w-full  text-white
                                      border-2 border-transparent outline-0 text-Primary py-[3px] px-2 xsm:text-xsmall laptop:text-xsmall 
                                      ease-linear transition-all duration-500 w-[100px] hover:opacity-[0.8] card-tool-button"
          >
            {t("gototool")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherToolsCard;
