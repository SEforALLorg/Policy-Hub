import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getQuestions } from "pages/api/questions";

import { ErrorNotify } from "components/notification";
import { Bottom, FullWrap, TopWrap } from "./styles";
import SubstainCard from "./SubCard/SubCard.jsx";
import ExpandCustomize from "../../dashboard/components/expandCustomize";


const StartSubstain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [goBottom, setGoBottom] = useState(false)
  const HandleOpen = () => {
    setIsOpen(true);
    setGoBottom(true);
  };

  useEffect(() => {
    if (goBottom) {
      document.getElementById("bottom-view").scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "center",
      });
      setGoBottom(false);
    }
  }, [goBottom]);

  const { data: questions, isFetching: isFetchingQuestions } = useQuery(
    ["getQuestions"],
    getQuestions,
    {
      onError: (error) => {
        ErrorNotify(error?.response?.data?.error?.message);
      },
    }
  );

  return (
    <>
      <FullWrap>
        <TopWrap>
          <SubstainCard HandleOpen={HandleOpen} />
        </TopWrap>
        {isOpen ? (
          <Bottom id="bottom-view">
            <ExpandCustomize questions={questions} isFetchingQuestions={isFetchingQuestions} />
          </Bottom>
        ) : null}
      </FullWrap>
    </>
  );
};
export default StartSubstain;
