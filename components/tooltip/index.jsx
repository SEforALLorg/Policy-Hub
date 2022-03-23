import React from "react";
import { FiInfo } from "react-icons/fi";

const TooltipComponent = ({ content }) => {
  return (
    <div className="tooltipWrap">
      <FiInfo />
      <div className={"content"}>{content}</div>
    </div>
  );
};

export default TooltipComponent;
