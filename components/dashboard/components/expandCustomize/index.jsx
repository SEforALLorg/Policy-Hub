import React, { useMemo, useState } from "react";
import { useQuery } from "react-query";
import qs from "qs";
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
  });  

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

  const { data: questions, isFetching: isFetchingQuestions } = useQuery(
    ["getQuestions"],
    getQuestions,
    {
      onError: (error) => {
        ErrorNotify(error.response.data.error.message);
      },
    }
  );

  const query = useMemo(() => {
    return qs.stringify({
      filters: {
        id: {
          $in: [...nonPublicationReports, ...publicationReports].map(
            (i) => i?.id
          ),
        },
        AddFilters: {
          countries: {
            id: {
              $in: selectInputs?.countries,
            },
          },
          regions: {
            id: {
              $in: selectInputs?.regions,
            },
          },
          segments: {
            id: {
              $in: selectInputs?.segments,
            },
          },
          document_types: {
            id: {
              $in: selectInputs?.document_types,
            },
          },
          years: {
            id: {
              $in: selectInputs?.years,
            },
          },
          generation_sources: {
            id: {
              $in: selectInputs?.generation_sources,
            },
          },
        },
      },
    });
  }, [selectInputs, nonPublicationReports, publicationReports]);

  const { data: allReports, isFetching: isFetchingReports } = useQuery(
    ["getReports", query],
    () => getReports(query),
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
          countriesData={countriesData}
          generationSourcesData={generationSourcesData}
          yearsData={yearsData}
          regionsData={regionsData}
          segmentsData={segmentsData}
          documentTypesData={documentTypesData}
          allReports={allReports}
          publicationReports={publicationReports}
          nonPublicationReports={nonPublicationReports}
          isFetchingReports={isFetchingReports}
          setSelectInputs={setSelectInputs}
          selectInputs={selectInputs}
        />
      </div>
      <div className={`smallCard ${isExpand ? "smallCardAnimation" : ""}`}>
        <Customize
          onYes={() => setIsExpand(!isExpand)}
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
