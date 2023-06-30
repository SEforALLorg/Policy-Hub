import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillStar } from "react-icons/ai";
import { ENERGYEFFICIENCY } from "../../../constant";
import TooltipComponent from "../../tooltip";

const Report = ({
  style,
  title,
  countryName,
  mainImg,
  area,
  item,
  date,
  file,
  key,
  star,
  url,
  onClick,
  isActive,
  bigCard,
  description,
  selectedRes,
}) => {
  const { t } = useTranslation();
  const countTooltip = bigCard ? 30 : 10;
  const isSmallDevice =
    typeof window !== "undefined" && window?.innerWidth < 767;

  const renderMainImage = () => {
    if (mainImg) {
      return (
        <img
          src={mainImg}
          alt={"card_image"}
          style={style}
          className="w-[100%] mr-[18px]"
        />
      );
    }
    return null;
  };

  const renderDescription = () => {
    if (description) {
      return (
        <p
          className={`report-description hideDescription textColor ${
            isActive ? "showDescription" : ""
          }`}
          onClick={() => onClick()}
        >
          {description}
        </p>
      );
    }
    return null;
  };

  const renderCountryBox = () => {
    if (countryName) {
      return (
        <div className="report-bottom-box">
          <img src={file} alt="flag" />
          <p
            className={`font-normal text-[14px] m-0 text-text textColor ${
              !bigCard && isActive && "innerText"
            }`}
          >
            {countryName}
          </p>
          {isSmallDevice ? (
            <div className={"contentNew"}>{countryName}</div>
          ) : null}
        </div>
      );
    }
    return null;
  };

  const renderAreaBox = () => {
    if (area && area.length) {
      const renderAreaItems = area.map(
        (i, index) => (index === 0 ? "" : ", ") + i?.attributes?.DocumentType
      );
      const renderContent =
        isSmallDevice || area.length >= 2 ? (
          <div className={countryName ? "content" : "contentNew"}>
            {renderAreaItems}
          </div>
        ) : null;

      return (
        <div className="report-bottom-box">
          <p
            className={`font-normal text-[14px] m-0 text-text textColor ${
              !bigCard && isActive && "innerText"
            }`}
            style={{ width: !bigCard && !isActive ? "100px" : undefined }}
          >
            {renderAreaItems}
          </p>
          {renderContent}
        </div>
      );
    }

    return null;
  };

  const renderItemBox = () => {
    if (item) {
      return (
        <div className="report-bottom-box" style={{ width: "50px" }}>
          <p
            className={`font-normal text-[14px] m-0 text-text textColor ${
              !bigCard && isActive && "innerText"
            }`}
          >
            {item}
          </p>
          {isSmallDevice || item.length > countTooltip ? (
            <div className={"content"}>{item}</div>
          ) : null}
        </div>
      );
    }
    return null;
  };

  const renderDateBox = () => {
    return (
      <div
        className="report-bottom-box"
        style={{ width: "38px", justifyContent: "flex-end", flex: "unset" }}
      >
        <p
          className={`font-normal text-[14px] m-0 text-text textColor w-[34px] ${
            !bigCard && isActive && "innerText"
          }`}
        >
          {date || "-"}
        </p>
      </div>
    );
  };

  return (
    <div
      key={key}
      className={`report-card cursor-pointer ${isActive ? "active" : ""}`}
    >
      <div className="flex items-start justify-between p-[12px] w-[100%]">
        <div
          className="flex items-center mr-[18px] flex-1"
          onClick={() => onClick()}
        >
          {renderMainImage()}
          <p className="title font-normal text-[14px] m-0 text-text textColor">
            {title}
          </p>
        </div>
        {star && (
          <TooltipComponent
            id={"KeyPublication"}
            content="Key Publication - Click for more information"
            hideInfo={true}
          >
            <div className="starIcon">
              {selectedRes === ENERGYEFFICIENCY ? (
                <svg
                  width="23"
                  height="21"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0741 6.68068L12.9154 1.26172L9.75666 6.68068C9.53351 7.07667 9.21052 7.4199 8.81366 7.68276C8.41486 7.94697 7.95339 8.12379 7.46578 8.19922L0.957031 9.35084L5.5012 14.2549C6.12264 14.8695 6.41588 15.6983 6.30411 16.5242L5.4397 22.8451L11.4325 20.2242C11.8948 20.0222 12.4017 19.9168 12.9154 19.9159C13.3973 19.9172 13.8719 20.023 14.2991 20.2242L20.432 22.6832L19.5676 16.4379C19.4584 15.6138 19.7521 14.7876 20.3722 14.1747L24.8737 9.35084L18.365 8.19922C17.8767 8.12402 17.4147 7.94719 17.0154 7.68276C16.6191 7.41972 16.2967 7.07651 16.0741 6.68068Z"
                    fill="url(#paint0_linear_3084_1199)"
                    stroke="url(#paint1_linear_3084_1199)"
                    strokeWidth="1.83813"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_3084_1199"
                      x1="12.9154"
                      y1="1.26172"
                      x2="12.9154"
                      y2="22.8451"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#37A7F0" />
                      <stop offset="1" stopColor="#42DAC1" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_3084_1199"
                      x1="12.9154"
                      y1="1.26172"
                      x2="12.9154"
                      y2="22.8451"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#37A7F0" />
                      <stop offset="1" stopColor="#42DAC1" />
                    </linearGradient>
                  </defs>
                </svg>
              ) : (
                <AiFillStar size={26} />
              )}
            </div>
          </TooltipComponent>
        )}
      </div>
      {renderDescription()}
      <div style={{ borderBottom: "2.4px solid rgba(134, 164, 176, 0.15)" }} />
      <div
        className="flex items-center p-[12px] card-bottom-wrap"
        onClick={() => onClick()}
      >
        {renderCountryBox()}
        {renderAreaBox()}
        {renderItemBox()}
        {renderDateBox()}
        {isActive && (
          <button className="go-report-btn" onClick={() => window.open(url)}>
            {t("GotoReport")}
          </button>
        )}
      </div>
    </div>
  );
};

export default Report;
