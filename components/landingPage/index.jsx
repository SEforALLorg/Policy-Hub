import React, { useState, useEffect, useCallback } from "react";
import { useQuery } from "react-query";
import { getQuestions } from "pages/api/questions";
import { useRouter } from "next/router.js";

import { ErrorNotify } from "components/notification";
import TopCard from "./topCard/index.jsx";
import Dashboard from "../dashboard";
import { getResourses, isMobile, landingPage } from "../../utilities/index.jsx";

const LandingPage = ({ setIsDashboardOpen, selectedRes, footerRes }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isBigCard, setIsBigCard] = useState(false);
  const [resources, setResources] = useState();

  useEffect(() => {
    if (localStorage.getItem("UserId")) {
      landingPage();
    }
  }, []);

  useEffect(() => {
    if (router?.query?.restart === "true") {
      setIsOpen(true);
      setGoBottom(true);
    }
  }, [router]);

  useEffect(() => {
    if (isOpen) {
      setIsDashboardOpen(true);
    }
  }, [isOpen]);

  const { data: questions, isFetching: isFetchingQuestions, refetch } = useQuery(
    ["getQuestions"],
    getQuestions,
    {
      enabled: !isMobile(),
      onError: (error) => {
        ErrorNotify(error?.response?.data?.error?.message);
      },
    }
  );

  const handleOpen = useCallback(() => {
    if (isMobile()) {
      refetch();
    }
    setIsOpen(true);
  }, []);

  const allQuestions = questions?.data?.data;

  useEffect(() => {
    if (questions?.data?.data) {
      localStorage.setItem("questions", JSON.stringify(questions));
    }
  }, [questions]);
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
        {!isOpen && <TopCard HandleOpen={handleOpen} />}
        {isOpen && (
          <div
            className={`${
              !isBigCard ? "h-[80vh]" : ""
            }  flex relative items-center	justify-center bottom-view`}
            id="bottom-view"
          >
            <Dashboard
              questions={
                JSON.parse(localStorage.getItem("questions")) || questions
              }
              isFetchingQuestions={
                JSON.parse(localStorage.getItem("questions"))
                  ? false
                  : isFetchingQuestions
              }
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