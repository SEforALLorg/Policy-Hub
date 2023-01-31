import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillStar } from "react-icons/ai";
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
}) => {
  const { t, i18n } = useTranslation();
  const countTooltip = bigCard ? 30 : 10;
  return (
    <div
      key={key}
      className={`report-card cursor-pointer ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="flex items-start justify-between p-[12px] w-[100%]">
        <div className="flex items-center mr-[18px]">
          {mainImg && (
            <img
              src={mainImg}
              alt="img"
              style={style}
              className="w-[100%] mr-[18px]"
            />
          )}

          <p className="title font-normal text-[14px] m-0 text-text textColor">{title}</p>
        </div>
        {star && (
          <TooltipComponent
            content="Key Publication - Click for more information"
            hideInfo={true}
          >
            <div className="starIcon">
              <AiFillStar size={26} color={"#FCB600"} />
            </div>
          </TooltipComponent>
        )}
      </div>
      {description && (
        <p
          className={`report-description hideDescription textColor ${
            isActive ? "showDescription" : ""
          }`}
        >
          {description}
        </p>
      )}
      <div style={{ borderBottom: "2.4px solid rgba(134, 164, 176, 0.15)" }} />
      <div className="flex items-center p-[12px] card-bottom-wrap">
        {countryName && (
          <>
            <div className="report-bottom-box">
              <img src={file} alt="flag" />
              <p
                className={`font-normal text-[14px] m-0 text-text textColor ${
                  !bigCard && isActive && "innerText"
                }`}
              >
                {countryName}
              </p>
            </div>
            <span />
          </>
        )}
        <>
          <div className="report-bottom-box">
            <p
              className={`font-normal text-[14px] m-0 text-text textColor ${
                !bigCard && isActive && "innerText"
              }`}
              style={{ width: !bigCard && !isActive && "100px" }}
            >
              {area?.length
                ? area?.map(
                    (i, index) =>
                      (index === 0 ? "" : ", ") + i?.attributes?.DocumentType
                  )
                : "--"}
            </p>
            {area?.length > 2 || !bigCard ? (
              <div className={"content"}>
                {area?.map(
                  (i, index) =>
                    (index === 0 ? "" : ", ") + i?.attributes?.DocumentType
                )}
              </div>
            ) : null}
          </div>
          <span />
        </>
        <div className="report-bottom-box" style={{ width: "50px" }}>
          <p
            className={`font-normal text-[14px] m-0 text-text textColor ${
              !bigCard && isActive && "innerText"
            }`}
          >
            {item}
          </p>
          {item?.length > countTooltip ? (
            <div className={"content"}>{item}</div>
          ) : null}
        </div>
        <span />
        <div
          className="report-bottom-box"
          style={{ width: "38px", justifyContent: "flex-end", flex: "unset" }}
        >
          <p
            className={`font-normal text-[14px] m-0 text-text textColor ${
              !bigCard && isActive && "innerText"
            }`}
          >
            {date || "-"}
          </p>
        </div>
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
