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
        {isOpen ? (
          <Bottom isExpand={isExpand} id="bottom-view">
            {isExpand ? (
              <ExpandCustomize />
            ) : (
              <Customize onYes={() => setIsExpand(true)} />
            )}
          </Bottom>
        ) : null}
        {/* <Dashboard/> */}
      </FullWrap>
    </>
  );
};
export default StartSubstain;
