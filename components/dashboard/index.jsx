import React, { useState,useEffect } from "react";
import Customize from "components/customize";

import { Wrapper } from "./styles";
import RightWrapPage from "./rightWrap";
import LeftWrapPage from "./leftWrap";
import Resources from "../resourcesType";
import { applyTheme } from "../../theme/utils";
import baseTheme from "../../theme/base";
import { postJourneyStep, putJourneyStep } from "../../utilities";

const Dashboard = ({
  questions,
  isFetchingQuestions,
  setIsBigCard,
  resources,
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
  const [selectInputs, setSelectInputs] = useState({
    countries: [],
    regions: [],
    segments: [],
    document_types: [],
    years: [],
    generation_sources: [],
    co_authors: [],
    publishing_organizations: [],
  });

  const onResetFilter = () => {
    setSelectInputs({
      countries: [],
      regions: [],
      segments: [],
      document_types: [],
      years: [],
      generation_sources: [],
      co_authors: [],
      publishing_organizations: [],
    });
    setClearAll(!isClearAll);
  };

  const onRestart = () => {
    applyTheme(baseTheme);
    setIsExpand(false);
    onResetFilter();
    setStepAnswer(undefined);
    setIsBigCard(false);
    setClearAll(!isClearAll);
    setIsResource(true)
  };

  const onReportFind = (e) => {
    setPublicationReports(e?.KeyPublication?.data);
    setNonPublicationReports(e?.NonKeyPublication?.data);
    setStepAnswer(e?.Answer);
  };
  
  const onNextQuestionId = (e) => {
    setFirstQuestionId(e)
    const question = questions?.data?.data?.find((q) => q?.id === Number(firstQuestionId))
    setFirstQuestion(question);
  }

  useEffect(() => {
    const question = questions?.data?.data?.find((q) => q?.id === Number(firstQuestionId))
    setFirstQuestion(question);
  }, [firstQuestionId])

  useEffect(() => { 
    if (newJourneyData.length) {
      let data = [];
      if (!payload?.length) {
        data = oldJourney.concat(newJourneyData);
        setPayload(data);
      } else if (payload?.length) {
        data = payload.concat(newJourneyData);
        setPayload(data);
      }
      putJourneyStep(data);
    }
  }, [newJourneyData]);

  const postFirst = () => {
    postJourneyStep(oldJourney[0]);
  }

  return (
    <Wrapper isExpand={isExpand}>
      {!isResource ? (
        <>
          <div className={`bigCard ${isExpand ? "bigCardAnimation" : ""}`}>
            <LeftWrapPage
              questions={questions?.data?.data.sort((a, b) => a?.id - b?.id)}
              setPublicationReports={(e) => setPublicationReports(e)}
              setNonPublicationReports={(e) => setNonPublicationReports(e)}
              firstQuestion={firstQuestion}
              perviousId={firstQuestionId}
              restart={() => onRestart()}
              stepAnswer={stepAnswer}
              resetFilters={() => onResetFilter()}
              isResetPage={isResetPage}
              setIsResetPage={setIsResetPage}
              newJourney={(e) => setNewJourneyData([e])}
              firstHit={()=> postFirst()}
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
            />
          </div>
          <div className={`smallCard ${isExpand ? "smallCardAnimation" : ""}`}>
            <Customize
              onYes={() => {
                setIsExpand(!isExpand);
                setIsBigCard(true);
              }}
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
              onYes={() => setIsResource(false)}
              onNextQuestionId={onNextQuestionId}
            />
        </>
      )}
    </Wrapper>
  );
};

export default Dashboard;
