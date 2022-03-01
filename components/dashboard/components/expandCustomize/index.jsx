import React, { useState } from "react";
import { useQuery } from "react-query";
import {
  getCountries,
  getGenerationSources,
  getYears,
  getRegions,
  getSegments,
  getDocumentTypes,
} from "pages/api/filter";
import { getReports } from "pages/api/reports";
import { getQuestions } from "pages/api/questions";

import { ErrorNotify } from "components/notification";
import Customize from "components/startComponent/customize";
import { Wrapper } from "./styles";
import RightWrapPage from "./rightWrap";
import LeftWrapPage from "./leftWrap";


const ExpandCustomize = () => {
  const [isExpand, setIsExpand] = useState(false);
  const [isNext, setIsNext] = useState(0);

  const { data: countriesData } = useQuery(["getCountries"], getCountries, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    },
  });

  const { data: generationSourcesData } = useQuery(
    ["getGenerationSources"],
    getGenerationSources,
    {
      onError: (error) => {
        ErrorNotify(error.response.data.error.message);
      },
    }
  );

  const { data: yearsData } = useQuery(["getYears"], getYears, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    },
  });

  const { data: regionsData } = useQuery(["getRegions"], getRegions, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    },
  });

  const { data: segmentsData } = useQuery(["getSegments"], getSegments, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    },
  });

  const { data: documentTypesData } = useQuery(
    ["getDocumentTypes"],
    getDocumentTypes,
    {
      onError: (error) => {
        ErrorNotify(error.response.data.error.message);
      },
    }
  );

  const { data: allReports } = useQuery(["getReports"], getReports, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    },
  });

  const { data: questions } = useQuery(["getQuestions"], getQuestions, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    },
  });

  return (
    <Wrapper isExpand={isExpand}>
      <div className={`bigCard ${isExpand ? "bigCardAnimation" : ""}`}>
        <LeftWrapPage
          onNext={() => setIsNext(isNext + 1)}
          onPrevious={() => setIsNext(isNext - 1)}
          questions={questions?.data?.data}
        />
        <RightWrapPage
          isNext={isNext}
          countriesData={countriesData}
          generationSourcesData={generationSourcesData}
          yearsData={yearsData}
          regionsData={regionsData}
          segmentsData={segmentsData}
          documentTypesData={documentTypesData}
          allReports={allReports}
        />
      </div>
      <div className={`smallCard ${isExpand ? "smallCardAnimation" : ""}`}>
        <Customize onYes={() => setIsExpand(!isExpand)} />
      </div>
    </Wrapper>
  );
};

export default ExpandCustomize;
