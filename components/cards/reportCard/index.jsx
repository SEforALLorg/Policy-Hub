import React from "react";
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

          <p className="title font-normal text-[14px] m-0 text-text">{title}</p>
        </div>
        {star && (
          <TooltipComponent
            content="Key Publication - Click for more information"
            hideInfo={true}
          >
            <div>
              <AiFillStar size={26} color={"#FCB600"} />
            </div>
          </TooltipComponent>
        )}
      </div>
      {description && (
        <p
          className={`report-description hideDescription ${
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
                className={`font-normal text-[14px] m-0 text-text ${
                  !bigCard && isActive && "innerText"
                }`}
              >
                {countryName}
              </p>
            </div>
            <span />
          </>
        )}
        {area && (
          <>
            <div className="report-bottom-box">
              <p
                className={`font-normal text-[14px] m-0 text-text ${
                  !bigCard && isActive && "innerText"
                }`}
              >
                {area}
              </p>
              {area?.length > countTooltip ? (
                <div className={"content"}>{area}</div>
              ) : null}
            </div>
            <span />
          </>
        )}
        <div className="report-bottom-box" style={{ width: "50px" }}>
          <p
            className={`font-normal text-[14px] m-0 text-text ${
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
            className={`font-normal text-[14px] m-0 text-text ${
              !bigCard && isActive && "innerText"
            }`}
          >
            {date}
          </p>
        </div>
        {isActive && (
          <button className="go-report-btn" onClick={() => window.open(url)}>
            Go to Report
          </button>
        )}
      </div>
    </div>
  );
};

export default Report;
