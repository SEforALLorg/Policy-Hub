import React from "react";
import { FiInfo } from "react-icons/fi";

const TooltipComponent = ({ content, children, hideInfo , top, hideContent}) => {
  return (
    <div className="tooltipWrap">
      {hideInfo ? null : <FiInfo />}
      {children}
      {hideContent ? '' : <div className={`content ${top ? 'top' : ''}`}>{content}</div>}
    </div>
  );
};

export default TooltipComponent;
