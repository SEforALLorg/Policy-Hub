import React, { useState } from "react";
import BlueButton from "../../../buttons/component/BlueButton";
import TooltipComponent from "components/tooltip";
import StepComponent from "../../../stepComponent";
import { useEffect } from "react";
import CompletedSteps from "../../../completedSteps";
import { VscDebugRestart } from "react-icons/vsc";

const LeftWrapPage = ({
  questions,
  setPublicationReports,
  setNonPublicationReports,
  firstQuestion,
  restart,
  stepAnswer,
  resetFilters,
}) => {
  const [nextQuestionId, setNextQuestionId] = useState();
  const [firstQuestionId, setFirstQuestionId] = useState();
  const [userJourney, setUserJourney] = useState([]);
  const [stepQuestion, setStepQuestion] = useState([]);

  useEffect(() => {
    if (questions?.length && firstQuestion && stepAnswer) {
      setNextQuestionId(firstQuestion);
      setFirstQuestionId(firstQuestion);
      setUserJourney([...userJourney, { ...questions[0], answer: stepAnswer }]);
    }
  }, [questions?.length, firstQuestion, stepAnswer]);

  const onNextQuestion = (e) => {
    if (!nextQuestionId) return null;
    setNextQuestionId(e);
  };

  const onReportsFind = (e) => {
    setPublicationReports(e?.KeyPublication?.data);
    setNonPublicationReports(e?.NonKeyPublication?.data);
  };

  const onPreviousQuestion = () => {
    let revisedArray = [...stepQuestion];
    setNextQuestionId(
      revisedArray[0]?.attributes?.MainQuestion?.Question?.data?.id
    );
    revisedArray.splice(0, 1);
    setStepQuestion(revisedArray);
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
  };

  const onRestart = () => {
    setNextQuestionId(firstQuestionId);
    setUserJourney([]);
    setStepQuestion([]);
    restart();
  };

  const onSubmitAnswer = (i, item) => {
    onNextQuestion(i?.NextQuestion?.data?.id);
    onReportsFind(i);
    setUserJourney([...userJourney, { ...item, answer: i?.Answer }]);
    setStepQuestion([]);
  };

  return (
    <div className="w-[40%] p-7 shadow-lg z-50	 relative dashboard-left-wrap">
      <div className="flex items-center pb-2.5">
        <div className="flex items-center relative select-none mr-5">
          <img
            className="w-[90px] h-[90px] left-header-image"
            src="static/images/yellowfile.svg"
            alt="card"
          />
        </div>
        <div className="font-bold text-medium leading-[26px] select-none text-text m-0">
        Customized Support
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
                {
                  item?.attributes?.MainQuestion?.Question?.data?.attributes
                    ?.Question
                }
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
            Restart
          </p>
        </div>
      )}

      {nextQuestionId && <div className={'mt-[16px] mb-[16px]'} style={{ borderBottom: '1.6px solid rgba(6, 90, 137, 0.2)' }} />}
      {!nextQuestionId ? (
        <>
          <CompletedSteps onRestart={() => onRestart()} />
        </>
      ) : questions?.length ? (
        questions
          .filter(
            (q) =>
              q?.attributes?.MainQuestion?.Question?.data?.id === nextQuestionId
          )
          .map((item, index) => {
            const questionTitle =
              item?.attributes?.MainQuestion?.Question?.data?.attributes
                ?.Question;
            const singleAnswer = item?.attributes?.AddAnswer;
            const questionType = item?.attributes?.QuestionType;
            const ToolTipText = item?.attributes?.ToolTipText;
            const QuestionKeyType =
              item?.attributes?.MainQuestion?.QuestionKeyType?.data?.attributes
                ?.QuestionKeyType;
            let findSteps;
            if (QuestionKeyType) {
              findSteps = questions?.filter(
                (e) =>
                  e?.attributes?.MainQuestion?.QuestionKeyType?.data?.attributes
                    ?.QuestionKeyType === QuestionKeyType
              );
            }

            return (
              <div className={'QuestionWrap'} key={index}>
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
      ) : null}
    </div>
  );
};

export default LeftWrapPage;
