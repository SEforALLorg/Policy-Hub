import React, { useState, useEffect, useCallback, Suspense, lazy } from "react";
import { useRouter } from "next/router";
import Customize from "components/customize";
import Resources from "../resourcesType";
import { Wrapper } from "./styles";
import { applyTheme } from "../../theme/utils";
import baseTheme from "../../theme/base";
import {
  changeTheme,
  getResourceRoute,
  getRoute,
  putJourneyStep,
} from "../../utilities";
import { useTranslation } from "react-i18next";
import Loader from "../loader";

const LeftWrapPage = lazy(() => import("./leftWrap"));
const RightWrapPage = lazy(() => import("./rightWrap"));
const Dashboard = ({
  questions,
  isFetchingQuestions,
  setIsBigCard,
  resources,
  selectedRes,
  setIsOpen,
}) => {
  const router = useRouter();
  const [isExpand, setIsExpand] = useState(false);
  const [loader, setLoader] = useState(false);
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
  const [t, i18n] = useTranslation();

  useEffect(() => {
    const { id } = router?.query;
    const resource = localStorage.getItem("ResourceType");
    if (id) {
      setFirstQuestionId(Number(id));
      setIsResource(false);
      setSelectedResource(resource);
      selectedRes(resource);
      changeTheme(getRoute());
      setIsResource(false);
    }
  }, [router]);

  useEffect(() => {
    const query = router?.query;
    if (query?.bigCard === "true" && !stepAnswer) {
      setIsResource(false);
      setIsExpand(true);
      const journey = JSON.parse(localStorage.getItem("userOldJourney"));
      if (journey?.length) {
        const answer = journey?.filter(
          (item) =>
            item?.attributes?.MainQuestion?.Question?.data?.id ===
            Number(query?.question)
        )?.[0];
        setPublicationReports(
          journey?.[0]?.attributes?.AddAnswer?.[0]?.KeyPublication?.data
        );
        setNonPublicationReports(
          journey?.[0]?.attributes?.AddAnswer?.[0]?.NonKeyPublication?.data
        );
      }
    }
  }, [router]);

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
    setIsBigCard(false);
    setPayload([]);
    selectedRes(null);
  }, [isClearAll, onResetFilter]);

  const onReportFind = useCallback((e) => {
    setPublicationReports(e?.KeyPublication?.data);
    setNonPublicationReports(e?.NonKeyPublication?.data);
    setStepAnswer(e);
  }, []);

  const onNextQuestionId = useCallback(
    (e, resource) => {
      const resourceRoute = getResourceRoute(resource?.Name);
      setLoader(true);
      router.push({ pathname: `/${i18n.language}/${resourceRoute}/${e}` });
      setFirstQuestionId(e);
    },
    [i18n.language, router]
  );

  useEffect(() => {
    const question = questions?.data?.data?.find(
      (q) => q?.id === Number(firstQuestionId)
    );
    const firstQuestion = questions?.data?.data?.filter((item) => {
      return (
        item?.attributes?.MainQuestion?.Question?.data?.id ===
        Number(firstQuestionId)
      );
    })?.[0]?.attributes?.MainQuestion?.Question?.data;
    setFirstQuestion(question || firstQuestion);
  }, [firstQuestionId, questions]);

  const addJourney = useCallback(
    (latestDate, existingJourney, isExistingUser, data) => {
      let existingDate = new Date(latestDate);
      let prevJourney = { ...existingJourney };
      if (isExistingUser && Object.keys(existingJourney)?.length >= 1) {
        Object.entries(existingJourney)?.map((key) => {
          if (key?.[0] === String(existingDate)) {
            return (prevJourney[String(existingDate)] = data);
          }
        });
        putJourneyStep(prevJourney);
      }
    },
    []
  );

  const setUserJourney = useCallback(() => {
    let count = localStorage.getItem("count");
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
        if (count && count > 1) {
          addJourney(latestDate, existingJourney, isExistingUser, data);
        } else {
          addJourney(latestDate, existingJourney, isExistingUser, data);
        }
      }
    }
  }, [addJourney, newJourneyData, oldJourney, payload]);

  useEffect(() => {
    setUserJourney();
  }, [newJourneyData, setUserJourney]);

  return (
    <Wrapper isExpand={isExpand}>
      {!isResource ? (
        <>
          <div className={`bigCard ${isExpand ? "bigCardAnimation" : ""}`}>
            {isExpand ? (
              <Suspense fallback={<div className="h-[700px] w-full flex items-center justify-center" ><Loader width={80} height={80} /></div>}>
                <LeftWrapPage
                  selectedResource={selectedResource}
                  questions={questions?.data?.data.sort(
                    (a, b) => a?.id - b?.id
                  )}
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
                  resourcesData={resources}
                  isFetchingQuestions={isFetchingQuestions}
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
              </Suspense>
            ) : (
              <div className="h-[700px]" />
            )}
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
              loader={loader}
            />
          </div>
        </>
      ) : (
          <Resources
            resourcesData={resources}
            selected={(e) => {
              setSelectedResource(e);
              selectedRes(e?.attributes?.Name);
            }}
            onYes={() => setIsResource(false)}
            onNextQuestionId={onNextQuestionId}
            setIsOpen={setIsOpen}
            loader={loader}
          />
      )}
    </Wrapper>
  );
};

export default Dashboard;
