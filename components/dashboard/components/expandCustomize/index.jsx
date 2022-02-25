import React, { useState } from "react";
import { Wrapper } from "./styles";
import RightWrapPage from "./rightWrap";
import LeftWrapPage from "./leftWrap";
import Customize from "../../../startComponent/customize";

const ExpandCustomize = () => {
  const [isExpand, setIsExpand] = useState(false);
  const [isNext, setIsNext] = useState(0);
  const  reports = [
    {
      id:1,
    },
    {
      id:2,
    },
    {
      id:3,
    },
    {
      id:4,
    },
  ]
  
  return (
    <Wrapper isExpand={isExpand}>
      <div className={`bigCard ${isExpand ? "bigCardAnimation" : ""}`}>
        <LeftWrapPage
          onNext={() => setIsNext(isNext + 1)}
          onPrevious={() => setIsNext(isNext - 1)}
        />
        <RightWrapPage reports={reports} isNext={isNext} />
      </div>
      <div className={`smallCard ${isExpand ? "smallCardAnimation" : ""}`}>
        <Customize onYes={() => setIsExpand(!isExpand)} />
      </div>
    </Wrapper>
  );
};

export default ExpandCustomize;
