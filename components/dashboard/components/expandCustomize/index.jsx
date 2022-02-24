import React, { useState } from "react";
import { Wrapper } from "./styles";
import RightWrapPage from "./rightWrap";
import LeftWrapPage from "./leftWrap";
import Customize from "../../../startComponent/customize";

const ExpandCustomize = () => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <Wrapper isExpand={isExpand}>
      <div className={`bigCard ${isExpand ? "bigCardAnimation" : ""}`}>
        <LeftWrapPage
          onYes={() => setIsExpand(!isExpand)}
        />
        <RightWrapPage />
      </div>
      <div className={`smallCard ${isExpand ? "smallCardAnimation" : ""}`}>
        <Customize onYes={() => setIsExpand(!isExpand)} />
      </div>
    </Wrapper>
  );
};

export default ExpandCustomize;
