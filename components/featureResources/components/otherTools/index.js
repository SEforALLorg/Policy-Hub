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
        "bg-white resourceShadow rounded-2xl  overflow-hidden w-full other-card flex mt-[20px] card-animation"
      }
      style={{ width: "32%", margin: "8px 5px" }}
    >
      {/* <div className="videoPlayer w-[30%] ">
        <img
          src={image}
          alt=""
          className="w-[100%] h-[230px] object-cover object-left-top"
        />
      </div> */}
      <div className="pt-[15px] pr-4 pb-[17px] pl-[22px] flex-1">
        <h6 className="font-bold leading-6  text-darktext mb-1 text-medium h-[50px] otherTitle center-content">
          {title}
        </h6>
        <p className="font-normal leading-[22px] text-darktext mb-2 text-xsmall otherDescription center-content">
          {description}
        </p>
        <div className="h-[50px]">
          {resourceType &&
            resourceType?.map((type) => {
              return (
                <button
                  onClick={() => filterData({ id: type?.id })}
                  className="text-normal text-Primary xsm:text-xsmall laptop:text-xsmall mr-[10px]"
                >
                  {`${type?.attributes?.Name}`}
                </button>
              );
            })}
        </div>
        <div className="w-full">
          <button
            onClick={() => window.open(link)}
            className="bg-lightBlue rounded-[60px] w-full  text-normal text-center
                                      border-2 border-transparent outline-0 text-Primary py-[3px] px-2 xsm:text-xsmall laptop:text-xsmall 
                                      hover:bg-Primary hover:text-white ease-linear transition-all duration-500 w-[100px] mt-[10px] button-animation card-tool-button"
          >
            {t("gototool")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherToolsCard;
