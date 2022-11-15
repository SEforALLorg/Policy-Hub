import React, { useState, useEffect } from "react";
import { VscDebugRestart } from "react-icons/vsc";

import BlueButton from "components/buttons/blueButton";
import TooltipComponent from "components/tooltip";
import StepComponent from "components/stepComponent";
import CompletedSteps from "components/completedSteps";
import { useTranslation } from "react-i18next";
import SubscribeComponent from "../subscribeComponent";

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
}) => {
  const [nextQuestionId, setNextQuestionId] = useState();
  const [userJourney, setUserJourney] = useState([]);
  const [stepQuestion, setStepQuestion] = useState([]);
  const [subcription, setSubscription] = useState(false);

  useEffect(() => {
    if (questions?.length && firstQuestion && stepAnswer) {
      setNextQuestionId(firstQuestion);
      const question = questions.filter((key) => {
        if (key.id === Number(perviousId)) {
          return key;
        }
      })
      setUserJourney([...userJourney, { ...question[0], answer: stepAnswer }]);
    }
  }, [questions?.length, firstQuestion, stepAnswer]);

  useEffect(() => {
    const val = Object.values(userJourney);
    if (val.length === 3) {
      setSubscription(true);
    }
  }, [userJourney]) 

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
    let revisedArray = [...stepQuestion];
    setNextQuestionId(
      revisedArray[0]?.attributes?.MainQuestion?.Question?.data?.id
    );
    revisedArray.splice(0, 1);
    setStepQuestion(revisedArray);
    setIsResetPage(!isResetPage);
  };

  const onStepChange = (e) => {
    let revisedArray = [...userJourney];
    const targetObject = revisedArray.find((i) => i.id === e?.id);
    const targetIndex = revisedArray.indexOf(targetObject);
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
    setUserJourney([...userJourney, { ...item, answer: i?.Answer }]);
    setStepQuestion([]);
    resetFilters();
    setIsResetPage(!isResetPage);
  };

  const completeQuestion = questions?.find((item) => item?.id === 11);

  const onStandaloneClick = () => {
    setNextQuestionId(24);
    setUserJourney([
      ...userJourney.splice(0, 2),
      {
        ...completeQuestion,
        answer: "Standalone systems",
      },
    ]);
    setStepQuestion([]);
    setIsResetPage(!isResetPage);
  };

  const onMiniClick = () => {
    setNextQuestionId(18);
    setUserJourney([
      ...userJourney.splice(0, 2),
      {
        ...completeQuestion,
        answer: "Mini-grid",
      },
    ]);
    setStepQuestion([]);
    setIsResetPage(!isResetPage);
  };
  const { t, i18n } = useTranslation();

  return (
    <div className="w-[40%] p-7 shadow-lg z-50	 relative dashboard-left-wrap z-[1]">
      <div className="flex items-center pb-2.5">
        <div className="flex items-center relative select-none mr-5">
          <img
            className="w-[90px] h-[90px] left-header-image"
            src="static/images/yellowfile.svg"
            alt="card"
          />
        </div>
        <div className="font-bold text-medium leading-[26px] select-none text-text m-0">
          {t("Assessthesituation")}
        </div>
      </div>
      {nextQuestionId &&
        userJourney?.slice(0, 3).map((item, index) => (
          <div
            key={index}
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
              <p className="text-[14px] text-ellipsis overflow-hidden stepText flex-1">
                {item?.questionName ||
                  item?.attributes?.MainQuestion?.Question?.data?.attributes
                    ?.Question}
              </p>
            </p>
            <button className="yesButton">
              {item?.answer === "Mini-grid"
                ? "MG"
                : item?.answer?.includes("Standalone systems")
                ? "SHS"
                : item?.answer}
            </button>
          </div>
        ))}
      {Boolean(userJourney?.length) && nextQuestionId && (
        <div
          className="flex items-center w-[80px] ml-auto mb-[-13px] cursor-pointer justify-end"
          onClick={() => onRestart()}
        >
          <VscDebugRestart color={"#065a89"} />
          <p
            className="text-[14px] ml-[2px] mt-[2px]"
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
          onStandaloneClick={() => onStandaloneClick()}
          onMiniClick={() => onMiniClick()}
          subcription={subcription}
        />
      )}
      {subcription && (
        <SubscribeComponent
          subcription={subcription}
        />
      )}
      {questions?.length
        ? questions
            .filter(
              (q) =>
                q?.attributes?.MainQuestion?.Question?.data?.id ===
                nextQuestionId
            )
            .map((item, index) => {
              const questionTitle =
                item?.attributes?.MainQuestion?.Question?.data?.attributes
                  ?.Question;
              const singleAnswer = item?.attributes?.AddAnswer;
              const questionType = item?.attributes?.QuestionType;
              const ToolTipText = item?.attributes?.ToolTipText;
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
                <div className={"QuestionWrap"} key={index}>
                  {questionType === "Questionnaire" ? (
                    <>
                      <div className="font-bold text-[17px] leading-6 select-none text-text mb-10 pr-5">
                        {questionTitle}
                        {ToolTipText && (
                          <TooltipComponent content={ToolTipText} />
                        )}
                      </div>
                      <div className="flex items-center flex-col w-[50%] my-[8rem] mx-auto left-wrap-buttons">
                        {singleAnswer?.map((i, index) => {
                          if (!i?.Answer) return null;

                          return (
                            <BlueButton
                              className="mb-3"
                              title={i?.Answer}
                              onClick={() => onSubmitAnswer(i, item)}
                              key={index}
                            />
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <StepComponent
                      onNext={(e) => onNextQuestion(e)}
                      setStepQuestion={(e) =>
                        setStepQuestion([e, ...stepQuestion])
                      }
                      item={item}
                      setOptionReport={(i) => onReportsFind(i)}
                      onPrevious={onPreviousQuestion}
                      stepQuestion={stepQuestion}
                      totalSteps={findSteps}
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
