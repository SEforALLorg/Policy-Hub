import React from "react";
import {
  Wrapper,
} from "./styles";
import RightWrapPage from "./rightWrap";
import LeftWrapPage from "./leftWrap";

const ExpandCustomize = () => {
  return (
    <Wrapper>
      <LeftWrapPage />
      <RightWrapPage />
    </Wrapper>
  );
};

export default ExpandCustomize;
