import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getQuestions } from "pages/api/questions";

import { ErrorNotify } from "components/notification";
import SubstainCard from "./SubCard/SubCard.jsx";
import ExpandCustomize from "../../dashboard/components/expandCustomize";

const StartSubstain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [goBottom, setGoBottom] = useState(false);
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
      <div>
        <div className="w-[90%] mx-auto mt-[48px] mb-[64px] h-[75vh] landing-card">
          <SubstainCard HandleOpen={HandleOpen} />
        </div>
        {isOpen ? (
          <div
            className="h-[100vh] flex relative items-center	justify-center"
            id="bottom-view"
          >
            <ExpandCustomize
              questions={questions}
              isFetchingQuestions={isFetchingQuestions}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};
export default StartSubstain;
