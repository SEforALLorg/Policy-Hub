import React from "react";
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
}) => {
  return (
    <div
      className={`my-anchor-element-${id} tooltipWrap`}
      style={{ cursor: hideContent ? "" : "pointer" }}
    >
      {hideInfo ? null : (
        <div className="tooltipIcon">
          <FiInfo />
        </div>
      )}
      {children}
      {/* {hideContent ? '' : <div className={`content ${top ? 'top' : ''} ${answer?.length < 25 && "customizeTooltip"}`}>{content}</div>} */}
      {hideContent ? (
        ""
      ) : (
        <Tooltip
          className={customizeStyle ? customizeStyle : "tooltip_content"}
          anchorSelect={`.my-anchor-element-${id}`}
          clickable={false}
          place="top"
        >
          {content}
        </Tooltip>
      )}
    </div>
  );
};

export default TooltipComponent;
