import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getQuestions } from "pages/api/questions";

import { ErrorNotify } from "components/notification";
import { Bottom, FullWrap, TopWrap } from "./styles";
import SubstainCard from "./SubCard/SubCard.jsx";
import ExpandCustomize from "../../dashboard/components/expandCustomize";


const StartSubstain = () => {
  const [isExpand, setIsExpand] = useState(false);
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

  const { data: questions, isFetching: isFetchingQuestions } = useQuery(
    ["getQuestions"],
    getQuestions,
    {
      onError: (error) => {
        ErrorNotify(error.response.data.error.message);
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
          <Bottom id="bottom-view" isExpand={isExpand}>
            <ExpandCustomize onExpand={e => setIsExpand(e)} questions={questions} isFetchingQuestions={isFetchingQuestions} />
          </Bottom>
        ) : null}
      </FullWrap>
    </>
  );
};
export default StartSubstain;
