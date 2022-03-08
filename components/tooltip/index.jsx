import React from "react";
import { FiInfo } from "react-icons/fi";
import { TooltipWrap, ContentWrap } from "./styles";

const TooltipComponent = ({ content }) => {
  return (
    <TooltipWrap>
      <FiInfo />
      <ContentWrap className={"content"}>{content}</ContentWrap>
    </TooltipWrap>
  );
};

export default TooltipComponent;
