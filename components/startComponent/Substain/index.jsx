import React, { useState } from "react";
import Customize from "../customize/index";
import { useEffect } from "react";
import Dashboard from "../../dashboard/dashboard";
import { Bottom,FullWrap ,TopWrap} from "./styles";
import SubstainCard from "./SubCard/SubCard.jsx";
const StartSubstain = () => {
  const [isOpen, setIsOpen] = useState(false)
  const HandleOpen = () => {
    setIsOpen(true);
  }

  useEffect(() => {
    if (isOpen) {
      document.getElementById('bottom-view').scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'center',
      })
    }
  }, [isOpen])

  return (
    <>
      <FullWrap>
        <TopWrap>
        <SubstainCard HandleOpen={HandleOpen} />
        </TopWrap>
        {isOpen ?
          <Bottom id="bottom-view">
            <Customize />
          </Bottom>
          : null}
        {/* <Dashboard/> */}
      </FullWrap>
    </>
  );
}
export default StartSubstain;
