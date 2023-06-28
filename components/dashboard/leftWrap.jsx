import React, { useState, useEffect } from "react";
import { VscDebugRestart } from "react-icons/vsc";

import BlueButton from "components/buttons/blueButton";
import TooltipComponent from "components/tooltip";
import StepComponent from "components/stepComponent";
import CompletedSteps from "components/completedSteps";
import { useTranslation } from "react-i18next";
import { shortName } from "../../utilities";
import DetailModal from "../detailModal";
import { changingLeftWrapLogo } from "../../constant/changinglogo";
import { CLEANCOOKING } from "../../constant";

const LeftWrapPage = ({
  questions,
  setPublicationReports,
  setNonPublicationReports,
  firstQuestion,
  perviousId,
  restart,
  stepAnswer,
  resetFilters,
  isResetPage,
  setIsResetPage,
  newJourney,
  firstHit,
  selectedResource,
  isExpand,
}) => {
  const { t, i18n } = useTranslation();
  const [nextQuestionId, setNextQuestionId] = useState();
  const [userJourney, setUserJourney] = useState([]);
  const [stepQuestion, setStepQuestion] = useState([]);
  const [detailModal, setDetailModal] = useState(false);
  const isEnglish = i18n.language === "en";

  useEffect(() => {
    if (questions?.length && firstQuestion && stepAnswer) {
      setNextQuestionId(firstQuestion);
      const question = questions.filter((key) => {
        if (key?.id === Number(perviousId)) {
          return key;
        }
      });
      setUserJourney([
        ...userJourney,
        {
          ...question[0],
          answer: stepAnswer?.Answer,
          frenchAnswer: stepAnswer?.FrenchAnswer,
        },
      ]);
    }
  }, [questions?.length, firstQuestion, stepAnswer]);

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
    setNextQuestionId(
      revisedArray[0]?.attributes?.MainQuestion?.Question?.data?.id
    );
    revisedArray?.splice(0, 1);
    setStepQuestion(revisedArray);
    setIsResetPage(!isResetPage);
  };

  const onStepChange = (e) => {
    let revisedArray = [...userJourney];
    const targetObject = revisedArray?.find((i) => i?.id === e?.id);
    const targetIndex = revisedArray?.indexOf(targetObject);
    onNextQuestion(e?.attributes?.MainQuestion?.Question?.data?.id);
    revisedArray.splice(targetIndex, 2);
    setUserJourney(targetIndex === 0 ? [] : revisedArray);
    onReportsFind(e?.attributes?.AddAnswer[0]);
    setStepQuestion([]);
    resetFilters();
    setIsResetPage(!isResetPage);
  };

  const onRestart = () => {
    setNextQuestionId(Number(perviousId));
    setUserJourney([]);
    setStepQuestion([]);
    restart();
    setIsResetPage(!isResetPage);
  };

  const onSubmitAnswer = (i, item) => {
    onNextQuestion(i?.NextQuestion?.data?.id);
    onReportsFind(i);
    setUserJourney([
      ...userJourney,
      { ...item, answer: i?.Answer, frenchAnswer: i?.FrenchAnswer },
    ]);
    setStepQuestion([]);
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
  };

  const onMiniClick = (e) => {
    const completeQuestion = questions?.find((item) => item?.id === e?.[1]);
    setNextQuestionId(e?.[0]);
    setUserJourney([
      ...userJourney
        .splice(0, 2)
        ?.filter((item) => item?.id !== completeQuestion?.id),
      {
        ...completeQuestion,
        answer: e?.[2],
        frenchAnswer: e?.[3],
      },
    ]);
    setStepQuestion([]);
    setIsResetPage(!isResetPage);
  };

  return (
    <div
      className="w-[40%] p-7 shadow-lg z-50 relative dashboard-left-wrap z-[1] rounded-l-[20px]"
      style={{
        height:
          !isExpand && selectedResource?.attributes?.Name !== CLEANCOOKING
            ? 400
            : "",
      }}
    >
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
            ? selectedResource?.attributes?.Name
            : selectedResource?.attributes?.FrenchName}
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
            <p className="flex items-center flex-1 pr-[5px]">
              <div className={`stepDot ${index === 0 && "hideDot"}`} />
              <p className="text-[14px] text-ellipsis overflow-hidden stepText flex-1 textColor">
                {item?.questionName ||
                  (isEnglish
                    ? item?.attributes?.MainQuestion?.Question?.data?.attributes
                        ?.Question
                    : item?.attributes?.MainQuestion?.Question?.data?.attributes
                        ?.FrenchQuestion)}
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
            className="text-[14px] ml-[2px] mt-[2px] textColor"
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
      {detailModal && <DetailModal open={detailModal} firstHit={firstHit} />}
      {questions?.length
        ? questions
            .filter(
              (q) =>
                q?.attributes?.MainQuestion?.Question?.data?.id ===
                nextQuestionId
            )
            .map((item) => {
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

              const renderQuestionnaire = () => (
                <>
                  <div className="font-bold text-[17px] leading-6 text-text mb-10 pr-5 textColor">
                    {questionTitle}
                    {ToolTipText && (
                      <TooltipComponent id={"leftWrap"} content={ToolTipText} />
                    )}
                  </div>
                  <div className="flex items-center flex-col w-[70%] my-[8rem] mx-auto left-wrap-buttons">
                    {singleAnswer?.map((i) => {
                      if (!i?.Answer) return null;

                      return (
                        <BlueButton
                          className="mb-3 p-2"
                          title={isEnglish ? i?.Answer : i?.FrenchAnswer}
                          onClick={() => onSubmitAnswer(i, item)}
                          key={isEnglish ? i?.Answer : i?.FrenchAnswer}
                        />
                      );
                    })}
                  </div>
                </>
              );

              return (
                <div className={"QuestionWrap"} key={questionTitle}>
                  {questionType === "Questionnaire" ? (
                    renderQuestionnaire()
                  ) : (
                    <StepComponent
                      onNext={onNextQuestion}
                      setStepQuestion={(e) =>
                        setStepQuestion([e, ...stepQuestion])
                      }
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
    </div>
  );
};

export default LeftWrapPage;
