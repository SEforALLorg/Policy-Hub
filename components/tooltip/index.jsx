import React from "react";
import { FiInfo } from "react-icons/fi";

const TooltipComponent = ({ content, children, hideInfo , top, hideContent}) => {
  return (
    <div className="tooltipWrap" style={{ cursor: hideContent ? "" : "pointer"  }}>
      {hideInfo ? null : <div className="tooltipIcon"><FiInfo /></div>}
      {children}
      {hideContent ? '' : <div className={`content ${top ? 'top' : ''}`}>{content}</div>}
    </div>
  );
};

export default TooltipComponent;
