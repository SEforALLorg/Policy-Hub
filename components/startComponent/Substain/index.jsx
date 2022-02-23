import React, { useState } from "react";
import Customize from "../customize/index";
import { useEffect } from "react";
import Dashboard from "../../dashboard/dashboard";
import { Bottom, FullWrap, TopWrap } from "./styles";
import SubstainCard from "./SubCard/SubCard.jsx";
import ExpandCustomize from "../../dashboard/components/expandCustomize";

const StartSubstain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  const HandleOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.getElementById("bottom-view").scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "center",
      });
    }
  }, [isOpen]);
  
  return (
    <>
      <FullWrap>
        <TopWrap>
          <SubstainCard HandleOpen={HandleOpen} />
        </TopWrap>
        {/* <button onClick={() => setIsExpand(false)}>normal</button> */}
        {isOpen ? (
          <Bottom isExpand={isExpand} id="bottom-view">
            <div
              className={`collapsibleSmall ${isExpand ? "collapsedSmall" : ""}`}
            >
              <Customize onYes={() => setIsExpand(!isExpand)} />
            </div>

            <div className={`collapsible ${isExpand ? "collapsed" : ""}`}>
              <ExpandCustomize />
            </div>
          </Bottom>
        ) : null}
      </FullWrap>
    </>
  );
};
export default StartSubstain;
