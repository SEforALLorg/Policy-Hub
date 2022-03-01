import React, { useState } from "react";
import { useEffect } from "react";
import { Bottom, FullWrap, TopWrap } from "./styles";
import SubstainCard from "./SubCard/SubCard.jsx";
import ExpandCustomize from "../../dashboard/components/expandCustomize";

const StartSubstain = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          <Bottom id="bottom-view">
            <ExpandCustomize />
          </Bottom>
        ) : null}
      </FullWrap>
    </>
  );
};
export default StartSubstain;
