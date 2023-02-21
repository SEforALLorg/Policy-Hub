import React, { useRef } from "react";
import { FiInfo } from "react-icons/fi";

const TooltipComponent = ({ content, children, hideInfo , top, hideContent, answer, onHoverStart, onHoverEnd}) => {
  const hoverRef = useRef();
  return (
    <div ref={hoverRef} onMouseEnter={()=>{answer ? onHoverStart() : console.log(hoverRef.current)}} onMouseLeave={()=>{answer && onHoverEnd()}} className="tooltipWrap" style={{ cursor: hideContent ? "" : "pointer"  }}>
      {hideInfo ? null : <div className="tooltipIcon"><FiInfo /></div>}
      {children}
      {hideContent ? '' : <div className={`content ${top ? 'top' : ''} ${answer?.length < 25 && "customizeTooltip"}`}>{content}</div>}
    </div>
  );
};

export default TooltipComponent;
