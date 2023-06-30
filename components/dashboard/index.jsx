import React, { useState, useEffect, useCallback } from "react";
import Customize from "components/customize";

import { Wrapper } from "./styles";
import RightWrapPage from "./rightWrap";
import LeftWrapPage from "./leftWrap";
import Resources from "../resourcesType";
import { applyTheme } from "../../theme/utils";
import baseTheme from "../../theme/base";
import { putJourneyStep } from "../../utilities";

const Dashboard = ({
  questions,
  isFetchingQuestions,
  setIsBigCard,
  resources,
  selectedRes,
  setIsOpen,
}) => {
  const [isExpand, setIsExpand] = useState(false);
  const [isResource, setIsResource] = useState(true);
  const [publicationReports, setPublicationReports] = useState([]);
  const [nonPublicationReports, setNonPublicationReports] = useState([]);
  const [firstQuestion, setFirstQuestion] = useState();
  const [firstQuestionId, setFirstQuestionId] = useState();
  const [stepAnswer, setStepAnswer] = useState();
  const [isClearAll, setClearAll] = useState(false);
  const [isResetPage, setIsResetPage] = useState(false);
  const [oldJourney, setOldJourney] = useState([]);
  const [newJourneyData, setNewJourneyData] = useState([]);
  const [payload, setPayload] = useState([]);
  const [selectedResource, setSelectedResource] = useState();
  const [selectInputs, setSelectInputs] = useState({
    countries: [],
    regions: [],
    segments: [],
    document_types: [],
    years: [],
    generation_sources: [],
    co_authors: [],
    publishing_organizations: [],
    sector: [],
    fuel: [],
  });

  const onResetFilter = useCallback(() => {
    setSelectInputs({
      countries: [],
      regions: [],
      segments: [],
      document_types: [],
      years: [],
      generation_sources: [],
      co_authors: [],
      publishing_organizations: [],
      sector: [],
      fuel: [],
    });
    setClearAll(!isClearAll);
  }, [isClearAll]);

  const onRestart = useCallback(() => {
    applyTheme(baseTheme);
    setIsExpand(false);
    onResetFilter();
    setStepAnswer(undefined);
    setIsBigCard(false);
    setClearAll(!isClearAll);
    setIsResource(true);
    setPayload([]);
    localStorage.removeItem("ResourceType");
    selectedRes(null);
  }, [isClearAll, onResetFilter]);

  const onReportFind = useCallback((e) => {
    setPublicationReports(e?.KeyPublication?.data);
    setNonPublicationReports(e?.NonKeyPublication?.data);
    setStepAnswer(e);
  }, []);

  const onNextQuestionId = useCallback(
    (e) => {
      setFirstQuestionId(e);
      const question = questions?.data?.data?.find((q) => q?.id === Number(e));
      setFirstQuestion(question);
    },
    [questions]
  );

  const addJourney = useCallback(
    (latestDate, existingJourney, isExistingUser, data) => {
      let existingDate = new Date(latestDate);
      let prevJourney = { ...existingJourney };
      if (isExistingUser && Object.keys(existingJourney)?.length >= 1) {
        Object.entries(existingJourney)?.map((key) => {
          if (key?.[0] === String(existingDate)) {
            prevJourney[String(existingDate)] = data;
            return prevJourney;
          }
        });
        putJourneyStep(prevJourney);
      }
    },
    []
  );

  const setUserJourney = useCallback(() => {
    let isExistingUser = JSON.parse(localStorage.getItem("userInfo"));
    let latestDate = localStorage.getItem("currentDate");
    let existingJourney;
    if (isExistingUser) {
      existingJourney = isExistingUser?.Journey;
    }
    if (localStorage.getItem("UserId")) {
      if (newJourneyData?.length) {
        let data = [];
        if (!payload?.length) {
          data = oldJourney?.concat(newJourneyData);
          setPayload(data);
        } else if (payload?.length) {
          data = payload?.concat(newJourneyData);
          setPayload(data);
        }
        addJourney(latestDate, existingJourney, isExistingUser, data);
      }
    }
  }, [addJourney, newJourneyData, oldJourney, payload]);

  useEffect(() => {
    setUserJourney();
  }, [newJourneyData]);

  useEffect(() => {
    const question = questions?.data?.data?.find(
      (q) => q?.id === Number(firstQuestionId)
    );
    setFirstQuestion(question);
  }, [firstQuestionId]);

  return (
    <Wrapper isExpand={isExpand}>
      {!isResource ? (
        <>
          <div className={`bigCard ${isExpand ? "bigCardAnimation" : ""}`}>
            <LeftWrapPage
              selectedResource={selectedResource}
              questions={questions?.data?.data.sort((a, b) => a?.id - b?.id)}
              setPublicationReports={setPublicationReports}
              setNonPublicationReports={setNonPublicationReports}
              firstQuestion={firstQuestion}
              perviousId={firstQuestionId}
              restart={onRestart}
              stepAnswer={stepAnswer}
              resetFilters={onResetFilter}
              isResetPage={isResetPage}
              setIsResetPage={setIsResetPage}
              newJourney={(e) => setNewJourneyData([e])}
              firstHit={oldJourney[0]}
              isExpand={isExpand}
            />
            <RightWrapPage
              publicationReports={publicationReports}
              nonPublicationReports={nonPublicationReports}
              setSelectInputs={setSelectInputs}
              selectInputs={selectInputs}
              onResetFilter={onResetFilter}
              showAllReports={false}
              setClearAll={setClearAll}
              isClearAll={isClearAll}
              isResetPage={isResetPage}
              isExpand={isExpand}
            />
          </div>
          <div className={`smallCard ${isExpand ? "smallCardAnimation" : ""}`}>
            <Customize
              onYes={() => {
                setIsExpand(!isExpand);
                setIsBigCard(true);
              }}
              // setCurrentDate={(e)=>setLatestDate(e)}
              setJourney={(e) => setOldJourney([e])}
              questions={[firstQuestion]}
              isFetchingQuestions={isFetchingQuestions}
              onNextQuestion={(e) => setFirstQuestion(e)}
              onReportsFind={(e) => onReportFind(e)}
            />
          </div>
        </>
      ) : (
        <>
          <Resources
            resourcesData={resources}
            selected={(e) => {
              setSelectedResource(e);
              selectedRes(e?.attributes?.Name);
            }}
            onYes={() => setIsResource(false)}
            onNextQuestionId={onNextQuestionId}
            setIsOpen={setIsOpen}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Dashboard;
