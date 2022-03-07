import React, { useState } from "react";
import { useQuery } from "react-query";
import { getQuestions } from "pages/api/questions";

import { ErrorNotify } from "components/notification";
import Customize from "components/startComponent/customize";
import { Wrapper } from "./styles";
import RightWrapPage from "./rightWrap";
import LeftWrapPage from "./leftWrap";

const ExpandCustomize = ({
  onExpand
}) => {
  const [isExpand, setIsExpand] = useState(false);
  const [publicationReports, setPublicationReports] = useState([]);
  const [nonPublicationReports, setNonPublicationReports] = useState([]);
  const [firstQuestion, setFirstQuestion] = useState();

  const [selectInputs, setSelectInputs] = useState({
    countries: [],
    regions: [],
    segments: [],
    document_types: [],
    years: [],
    generation_sources: [],
    co_authors: [],
    publishing_organizations: []
  });  

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
    <Wrapper isExpand={isExpand}>
      <div className={`bigCard ${isExpand ? "bigCardAnimation" : ""}`}>
        <LeftWrapPage
          questions={questions?.data?.data?.sort((a, b) => a?.id - b?.id)}
          setPublicationReports={(e) => setPublicationReports(e)}
          setNonPublicationReports={(e) => setNonPublicationReports(e)}
          firstQuestion={firstQuestion}
          restart={() => {
            setIsExpand(false)
            onExpand(false);
            setSelectInputs({
              countries: [],
              regions: [],
              segments: [],
              document_types: [],
              years: [],
              generation_sources: [],
            })
          }}
        />
        <RightWrapPage
          publicationReports={publicationReports}
          nonPublicationReports={nonPublicationReports}
          setSelectInputs={setSelectInputs}
          selectInputs={selectInputs}
        />
      </div>
      <div className={`smallCard ${isExpand ? "smallCardAnimation" : ""}`}>
        <Customize
          onYes={() => {
            setIsExpand(!isExpand)
            onExpand(true);
          }}
          questions={questions?.data?.data?.sort((a, b) => a?.id - b?.id)}
          isFetchingQuestions={isFetchingQuestions}
          onNextQuestion={(e) => setFirstQuestion(e)}
          onReportsFind={(e) => {
            setPublicationReports(e?.KeyPublication?.data);
            setNonPublicationReports(e?.NonKeyPublication?.data);
          }}
        />
      </div>
    </Wrapper>
  );
};

export default ExpandCustomize;
