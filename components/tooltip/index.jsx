import React, { useEffect, useState } from "react";
import { FiInfo } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

const TooltipComponent = ({
  content,
  children,
  hideInfo,
  top,
  hideContent,
  customizeStyle,
  id,
  style,
  isStartIcon = false,
  isClickedReport,
  setIsClickedReport
}) => {
  return (
    <div
      className={`my-anchor-element-${id} tooltipWrap`}
      style={{ cursor: hideContent ? "" : "pointer" }}
      onMouseEnter={() => {
        if (isStartIcon) {
          setIsClickedReport(true);
        }
      }}
      onMouseLeave={() => {
        if (isStartIcon) {
          setIsClickedReport(false);
        }
      }}
      onClick={() => {
        if (isStartIcon) {
          setIsClickedReport(false);
        }
      }}
    >
      {hideInfo ? null : (
        <div className="tooltipIcon">
          <FiInfo />
        </div>
      )}
      {children}
      {hideContent ? (
        ""
      ) : (
        <Tooltip
          className={`${customizeStyle ? customizeStyle : "tooltip_content"} ${
            isStartIcon && !isClickedReport && "hidden"
          }`}
          anchorSelect={`.my-anchor-element-${id}`}
          clickable={false}
          place="top"
          style={style}
        >
          {content}
        </Tooltip>
      )}
    </div>
  );
};

export default TooltipComponent;
