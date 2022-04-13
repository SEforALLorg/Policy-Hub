import React, { useState } from "react";
import Customize from "components/customize";

import { Wrapper } from "./styles";
import RightWrapPage from "./rightWrap";
import LeftWrapPage from "./leftWrap";

const Dashboard = ({ questions, isFetchingQuestions, setIsBigCard }) => {
  const [isExpand, setIsExpand] = useState(false);
  const [publicationReports, setPublicationReports] = useState([]);
  const [nonPublicationReports, setNonPublicationReports] = useState([]);
  const [firstQuestion, setFirstQuestion] = useState();
  const [stepAnswer, setStepAnswer] = useState();
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
  };

  const onRestart = () => {
    setIsExpand(false);
    onResetFilter();
    setStepAnswer(undefined);
    setIsBigCard(false)
  };

  const onReportFind = (e) => {
    setPublicationReports(e?.KeyPublication?.data);
    setNonPublicationReports(e?.NonKeyPublication?.data);
    setStepAnswer(e?.Answer);
  };

  return (
    <Wrapper isExpand={isExpand}>
      <div className={`bigCard ${isExpand ? "bigCardAnimation" : ""}`}>
        <LeftWrapPage
          questions={questions?.data?.data?.sort((a, b) => a?.id - b?.id)}
          setPublicationReports={(e) => setPublicationReports(e)}
          setNonPublicationReports={(e) => setNonPublicationReports(e)}
          firstQuestion={firstQuestion}
          restart={() => onRestart()}
          stepAnswer={stepAnswer}
          resetFilters={() => onResetFilter()}
        />
        <RightWrapPage
          publicationReports={publicationReports}
          nonPublicationReports={nonPublicationReports}
          setSelectInputs={setSelectInputs}
          selectInputs={selectInputs}
          onResetFilter={onResetFilter}
          showAllReports={false}
        />
      </div>
      <div className={`smallCard ${isExpand ? "smallCardAnimation" : ""}`}>
        <Customize
          onYes={() => {
            setIsExpand(!isExpand)
            setIsBigCard(true)
          }}
          questions={questions?.data?.data?.sort((a, b) => a?.id - b?.id)}
          isFetchingQuestions={isFetchingQuestions}
          onNextQuestion={(e) => setFirstQuestion(e)}
          onReportsFind={(e) => onReportFind(e)}
        />
      </div>
    </Wrapper>
  );
};

export default Dashboard;
