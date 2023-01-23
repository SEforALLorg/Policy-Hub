import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getQuestions } from "pages/api/questions";

import { ErrorNotify } from "components/notification";
import TopCard from "./topCard/index.jsx";
import Dashboard from "../dashboard";
import { getResourses, landingPage } from "../../utilities/index.jsx";

const LandingPage = ({ setIsDashboardOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBigCard, setIsBigCard] = useState(false);
  const [goBottom, setGoBottom] = useState(false);
  const [resources, setResources] = useState();
  const HandleOpen = () => {
    setIsOpen(true);
    setGoBottom(true);
  };

  useEffect(()=>{
    if (localStorage.getItem("userInfo")) {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"))
      landingPage(userInfo);
    }
  },[])

  useEffect(() => {
    if (isOpen) {
      setIsDashboardOpen(true);
    }
  }, [isOpen]);

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

  const allQuestions = questions?.data?.data;

  useEffect(async () => {
    const dataObject = {};
    if (allQuestions?.length) {
      const resources = await getResourses(allQuestions);
      const flatArray = resources.flat();
      flatArray.map((element) => {
        dataObject[element.id] = element;
      });
      setResources(dataObject);
    }
  }, [allQuestions]);

  return (
    <>
      <div>
        {/* <div className="w-[90%] mx-auto mt-[48px] mb-[64px] h-[75vh] landing-card"> */}
        {!isOpen && <TopCard HandleOpen={HandleOpen} />}

        {/* </div> */}
        {isOpen ? (
          <div
            className={`${
              !isBigCard ? "h-[80vh]" : ""
            }  flex relative items-center	justify-center bottom-view`}
            id="bottom-view"
          >
            <Dashboard
              questions={questions}
              isFetchingQuestions={isFetchingQuestions}
              setIsBigCard={setIsBigCard}
              resources={resources}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};
export default LandingPage;
