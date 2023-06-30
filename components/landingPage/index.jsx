import React, { useState, useEffect, useCallback } from "react";
import { useQuery } from "react-query";
import { getQuestions } from "pages/api/questions";

import { ErrorNotify } from "components/notification";
import TopCard from "./topCard/index.jsx";
import Dashboard from "../dashboard";
import { getResourses, landingPage } from "../../utilities/index.jsx";

const LandingPage = ({ setIsDashboardOpen, selectedRes, footerRes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBigCard, setIsBigCard] = useState(false);
  const [resources, setResources] = useState();

  useEffect(() => {
    if (localStorage.getItem("UserId")) {
      landingPage();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsDashboardOpen(true);
    }
  }, [isOpen]);

  const { data: questions, isFetching: isFetchingQuestions, refetch } = useQuery(
    ["getQuestions"],
    getQuestions,
    {
      enabled: window.innerWidth > 767,
      onError: (error) => {
        ErrorNotify(error?.response?.data?.error?.message);
      },
    }
  );

  const handleOpen = useCallback(() => {
    if (window.innerWidth < 767) {
      refetch();
    }
    setIsOpen(true);
  }, []);

  const allQuestions = questions?.data?.data;

  useEffect(() => {
    const fetchData = async () => {
      if (allQuestions?.length) {
        const resources = await getResourses(allQuestions);
        const dataObject = {};
        resources.flat().forEach((element) => {
          dataObject[element.id] = element;
        });
        setResources(dataObject);
      }
    };

    fetchData();
  }, [allQuestions]);

  return (
    <>
      <div>
        {!isOpen && <TopCard HandleOpen={handleOpen} />}
        {isOpen && (
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
              selectedRes={selectedRes}
              footerRes={footerRes}
              setIsOpen={setIsOpen}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default LandingPage;