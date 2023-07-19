import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { VscDebugRestart } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

import BlueButton from "components/buttons/blueButton";
import TooltipComponent from "components/tooltip";
import StepComponent from "components/stepComponent";
import CompletedSteps from "components/completedSteps";
import { getResourceFirstQuestion, getRoute, shortName } from "../../utilities";
import DetailModal from "../detailModal";
import { changingLeftWrapLogo } from "../../constant/changinglogo";
import { CLEANCOOKING } from "../../constant";
import Loader from "../loader";

const LeftWrapPage = ({
  questions,
  setPublicationReports,
  setNonPublicationReports,
  firstQuestion,
  restart,
  stepAnswer,
  resetFilters,
  isResetPage,
  setIsResetPage,
  newJourney,
  firstHit,
  isExpand,
  isFetchingQuestions,
}) => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const [nextQuestionId, setNextQuestionId] = useState();
  const [userJourney, setUserJourney] = useState([]);
  const [stepQuestion, setStepQuestion] = useState([]);
  const [detailModal, setDetailModal] = useState(false);
  const isEnglish = i18n.language === "en";
  const localResource = JSON.parse(localStorage.getItem("resourceObj") || "[]");
  const localStepQuestion = JSON.parse(
    localStorage.getItem("stepQuestions") || "[]"
  );

  useEffect(() => {
    if (router?.query?.id) {
      const questionId = Number(router?.query?.id);
      const findIndex = userJourney?.findIndex(
        (question) =>
          question?.attributes?.MainQuestion?.Question?.data?.id === questionId
      );
      if (findIndex > -1) {
        setUserJourney(userJourney.slice(0, findIndex));
      }
    }
  }, [router?.query?.id]);
  useEffect(() => {
    if (localStepQuestion?.length) {
      setStepQuestion(localStepQuestion);
    }
  }, [localStepQuestion?.length]);
  useEffect(() => {
    if (questions?.length && firstQuestion) {
      const findData = questions.filter(
        (q) =>
          q?.attributes?.MainQuestion?.Question?.data?.id === nextQuestionId
      );
      setNextQuestionId(firstQuestion?.id || firstQuestion);
    }
  }, [questions?.length, firstQuestion, stepAnswer]);

  useEffect(() => {
    if (questions?.length) {
      if (JSON.parse(localStorage.getItem("userOldJourney"))?.length) {
        setUserJourney(JSON.parse(localStorage.getItem("userOldJourney")));
      }
    }
  }, [questions?.length]);

  useEffect(() => {
    if (firstHit) {
      setUserJourney([
        ...userJourney,
        {
          ...firstHit,
          questionName: firstHit?.question,
          answer: firstHit?.answer,
        },
      ]);
      localStorage.setItem(
        "userOldJourney",
        JSON.stringify([
          ...userJourney,
          {
            ...firstHit,
            questionName: firstHit?.question,
            answer: firstHit?.answer,
            frenchAnswer: firstHit?.frenchAnswer
          },
        ])
      );
    }
  }, [firstHit]);

  useEffect(() => {
    setTimeout(() => {
      const val = Object.values(userJourney);
      if (val?.length === 1) {
        return setDetailModal(true);
      }
    }, 2000);
  }, [userJourney]);

  const onNextQuestion = (e) => {
    if (!nextQuestionId) return null;
    setNextQuestionId(e);
    resetFilters();
    setIsResetPage(!isResetPage);
  };

  const onReportsFind = (e) => {
    setPublicationReports(e?.KeyPublication?.data);
    setNonPublicationReports(e?.NonKeyPublication?.data);
    setIsResetPage(!isResetPage);
  };

  const onPreviousQuestion = () => {
    resetFilters();
    let revisedArray = [...stepQuestion];
    const questionId = revisedArray[0]?.attributes?.MainQuestion?.Question?.data?.id;
    setNextQuestionId(questionId);
    router.push(
      {
        pathname: `/${i18n.language}/${getRoute()}/${questionId}`,
        query: {
          bigCard: true,
          step: Number(router?.query?.step) - 1,
        },
      },
      undefined,
      { shallow: true }
    );
    revisedArray?.splice(0, 1);
    setStepQuestion(revisedArray);
    localStorage.setItem("stepQuestions", JSON.stringify(revisedArray));
    setIsResetPage(!isResetPage);
  };

  const onStepChange = (e) => {
    let revisedArray = [...userJourney];
    const targetObject = revisedArray?.find((i) => i?.id === e?.id);
    const targetIndex = revisedArray?.indexOf(targetObject);
    const questionId = e?.attributes?.MainQuestion?.Question?.data?.id || e?.id
    onNextQuestion(questionId);
    revisedArray.splice(targetIndex, 2);
    setUserJourney(targetIndex === 0 ? [] : revisedArray);
    localStorage.setItem(
      "userOldJourney",
      JSON.stringify(targetIndex === 0 ? [] : revisedArray)
    );
    onReportsFind(e?.attributes?.AddAnswer[0]);
    setStepQuestion([]);
    localStorage.setItem("stepQuestions", []);
    resetFilters();
    setIsResetPage(!isResetPage);
    router.push(
      {
        pathname: `/${i18n.language}/${getRoute()}/${questionId}`,
        query: {
          bigCard: true,
          step: ""
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const onRestart = () => {
    // router.push({ pathname: i18n.language, query: { restart: true } }, undefined, {
    //   shallow: true,
    // });
    router.push(
      {
        pathname: `/${i18n.language}/${getRoute()}/${getResourceFirstQuestion()}`,
      },
      undefined,
      { shallow: true }
    );
    // setNextQuestionId(Number(perviousId));
    setUserJourney([]);
    localStorage.removeItem("userOldJourney")
    // setStepQuestion([]);
    restart();
    // setIsResetPage(!isResetPage);
  };

  const onSubmitAnswer = (i, item) => {
    // onNextQuestion(i?.NextQuestion?.data?.id);
    onReportsFind(i);
    setUserJourney([...userJourney, { ...item, answer: i?.Answer, frenchAnswer: i?.FrenchAnswer }]);
    localStorage.setItem(
      "userOldJourney",
      JSON.stringify([...userJourney,
        { ...item, answer: i?.Answer, frenchAnswer: i?.FrenchAnswer }])
    );
    setStepQuestion([]);
    localStorage.removeItem("stepQuestions", []);
    resetFilters();
    setIsResetPage(!isResetPage);
    const data = {
      question: isEnglish
        ? item?.attributes?.MainQuestion?.Question?.data?.attributes?.Question
        : item?.attributes?.MainQuestion?.Question?.data?.attributes
            ?.FrenchQuestion,
      answer: isEnglish ? i?.Answer : i?.FrenchAnswer,
    };
    newJourney(data);
    router.push(
      {
        pathname: `/${i18n.language}/${getRoute()}/${i?.NextQuestion?.data?.id}`,
        query: { bigCard: true, step: 1 },
      },
      undefined,
      { shallow: true }
    );
  };

  const onMiniClick = (e) => {
    const completeQuestion = questions?.find((item) => item?.id === e?.[1]);
    const questionId = e?.[0];
    setNextQuestionId(questionId);
    const oldJourney = [
      ...userJourney.splice(0, 2),
      {
        ...completeQuestion,
        answer: e?.[2],
        frenchAnswer: e?.[3],
      },]
    setUserJourney([...oldJourney]);
    localStorage.setItem("userOldJourney",JSON.stringify([...oldJourney]));
    // console.log(userJourney,'userJourney',oldJourney);
    setStepQuestion([]);
    localStorage.setItem("stepQuestions", []);
    setIsResetPage(!isResetPage);
    router.push(
      {
        pathname: `/${i18n.language}/${getRoute()}/${questionId}`,
        query: { bigCard: true, step: 1 },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div
      className="w-[40%] p-7 shadow-lg z-50 relative dashboard-left-wrap z-[1] rounded-l-[20px]"
      style={{
        height:
          !isExpand && localResource?.attributes?.Name !== CLEANCOOKING
            ? 400
            : "",
      }}
    >
      {isFetchingQuestions ? (
        <div className="flex items-center flex-col h-full justify-center">
          <Loader height={80} width={80} />{" "}
        </div>
      ) : (
        <>
          <div className="flex items-center pb-2.5">
            <div className="flex items-center relative mr-5">
              {changingLeftWrapLogo?.map((key) => {
                if (
                  localStorage.getItem("ResourceType") === Object.keys(key)?.[0]
                ) {
                  return (
                    <img
                      className="w-[70px] h-[70px] left-header-image"
                      src={Object.values(key)?.[0]}
                      alt="card"
                      key={"card-image"}
                    />
                  );
                }
              })}
            </div>
            <div className="font-bold text-medium leading-[26px] text-text m-0 textColor">
              {isEnglish
                ? localResource?.attributes?.Name
                : localResource?.attributes?.FrenchName}
            </div>
          </div>
          {nextQuestionId &&
            userJourney?.slice(0, 3)?.map((item, index) => (
              <div
                key={item?.questionName}
                onClick={() => {
                  if (nextQuestionId) {
                    onStepChange(item);
                  }
                  resetFilters();
                }}
                className="flex items-center pt-[4px] pb-[4px] cursor-pointer stepRow"
                style={{ height: 45 }}
              >
                <p className="flex items-center flex-1 pr-[5px] mb-[0px]">
                  <div className={`stepDot ${index === 0 && "hideDot"}`} />
                  <p className="text-[14px] text-ellipsis overflow-hidden stepText flex-1 textColor mb-[0px]">
                    {item?.questionName ||
                      (isEnglish
                        ? item?.attributes?.MainQuestion?.Question?.data
                            ?.attributes?.Question
                        : item?.attributes?.MainQuestion?.Question?.data
                            ?.attributes?.FrenchQuestion)}
                  </p>
                </p>
                <button className="yesButton">
                  {shortName(isEnglish ? item?.answer : item?.frenchAnswer)}
                </button>
              </div>
            ))}
          {Boolean(userJourney?.length) && nextQuestionId && (
            <div
              className="flex items-center w-[80px] ml-auto mb-[-13px] cursor-pointer justify-end restartIconColor"
              onClick={() => onRestart()}
            >
              <VscDebugRestart color={"#065a89"} />
              <p
                className="text-[14px] ml-[2px] mt-[2px] textColor mb-[0px]"
                style={{ color: "#065a89" }}
              >
                {t("Restart")}
              </p>
            </div>
          )}

          {nextQuestionId && (
            <div
              className={"mt-[16px] mb-[16px]"}
              style={{ borderBottom: "1.6px solid rgba(6, 90, 137, 0.2)" }}
            />
          )}
          {!nextQuestionId && (
            <CompletedSteps
              onRestart={() => onRestart()}
              onMiniClick={(e) => onMiniClick(e)}
            />
          )}
          {detailModal && (
            <DetailModal open={detailModal} firstHit={firstHit} />
          )}
          {questions?.length
            ? questions
                .filter(
                  (q) =>
                    q?.attributes?.MainQuestion?.Question?.data?.id ===
                    nextQuestionId
                )
                .map((item, index) => {
                  const questionTitle = isEnglish
                    ? item?.attributes?.MainQuestion?.Question?.data?.attributes
                        ?.Question
                    : item?.attributes?.MainQuestion?.Question?.data?.attributes
                        ?.FrenchQuestion;
                  const singleAnswer = item?.attributes?.AddAnswer;
                  const questionType = item?.attributes?.QuestionType;
                  const ToolTipText = isEnglish
                    ? item?.attributes?.ToolTipText
                    : item?.attributes?.FrenchToolTipText;
                  const QuestionKeyType =
                    item?.attributes?.MainQuestion?.QuestionKeyType?.data
                      ?.attributes?.QuestionKeyType;
                  let findSteps;
                  if (QuestionKeyType) {
                    findSteps = questions?.filter(
                      (e) =>
                        e?.attributes?.MainQuestion?.QuestionKeyType?.data
                          ?.attributes?.QuestionKeyType === QuestionKeyType
                    );
                  }
                  return (
                    <div className={"QuestionWrap"} key={"QuestionWrap"}>
                      {questionType === "Questionnaire" ? (
                        <>
                          <div className="font-bold text-[17px] leading-6 text-text mb-10 pr-5 textColor">
                            {questionTitle}
                            {ToolTipText && (
                              <TooltipComponent
                                id={"leftWrap"}
                                content={ToolTipText}
                              />
                            )}
                          </div>
                          <div className="flex items-center flex-col w-[70%] my-[8rem] mx-auto left-wrap-buttons">
                            {singleAnswer?.map((i) => {
                              if (!i?.Answer) return null;

                              return (
                                <BlueButton
                                  className="mb-3 p-2"
                                  title={
                                    isEnglish ? i?.Answer : i?.FrenchAnswer
                                  }
                                  onClick={() => onSubmitAnswer(i, item)}
                                  key={isEnglish ? i?.Answer : i?.FrenchAnswer}
                                />
                              );
                            })}
                          </div>
                        </>
                      ) : (
                        <StepComponent
                          onNext={(e) => onNextQuestion(e)}
                          setStepQuestion={(e) => {
                            localStorage.setItem(
                              "stepQuestions",
                              JSON.stringify([e, ...stepQuestion])
                            );
                            setStepQuestion([e, ...stepQuestion]);
                          }}
                          item={item}
                          setOptionReport={onReportsFind}
                          onPrevious={onPreviousQuestion}
                          stepQuestion={stepQuestion}
                          totalSteps={findSteps}
                          sendData={newJourney}
                        />
                      )}
                    </div>
                  );
                })
            : null}
        </>
      )}
    </div>
  );
};

export default LeftWrapPage;
