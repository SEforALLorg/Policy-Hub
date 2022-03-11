import React, { useState } from "react";
import BlueButton from "../../../buttons/component/BlueButton";
import TooltipComponent from "components/tooltip";
import {
  CardHeader,
  ImgBox,
  CardTitle,
  CardSubTitle,
  ButtonGrp,
  Border,
  Steps,
  Text,
  Dot,
  StepTitle,
  YesButton,
  LeftWrap,
  QuestionWrap,
  RestartIcon,
} from "./styles";
import StepComponent from "../../../StepComponent";
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
  };

  return (
    <LeftWrap>
      <CardHeader>
        <ImgBox>
          <img src="static/images/yellowfile.svg" alt="card" />
        </ImgBox>
        <CardTitle>Improve your decision-making</CardTitle>
      </CardHeader>
      {nextQuestionId &&
        userJourney?.slice(0, 3).map((item, index) => (
          <Steps
            key={index}
            onClick={() => {
              if (nextQuestionId) {
                onStepChange(item);
                onReportsFind(item?.attributes?.AddAnswer[0]);
              }
              resetFilters();
            }}
          >
            <Text>
              <Dot className={index === 0 && "hideDot"} />
              <StepTitle>
                {
                  item?.attributes?.MainQuestion?.Question?.data?.attributes
                    ?.Question
                }
              </StepTitle>
            </Text>
            <YesButton>
              {item?.answer === "Mini-grid"
                ? "MG"
                : item?.answer?.includes("Standalone systems")
                ? "SHS"
                : item?.answer}
            </YesButton>
          </Steps>
        ))}
      {(Boolean(userJourney?.length) && nextQuestionId) && (
        <RestartIcon
          onClick={() => {
            setNextQuestionId(firstQuestionId);
            setUserJourney([]);
            setStepQuestion([]);
            restart();
          }}
        >
          <VscDebugRestart />
          <p>Restart</p>
        </RestartIcon>
      )}

      {nextQuestionId && <Border></Border>}
      {!nextQuestionId ? (
        <>
          <CompletedSteps
            onRestart={() => {
              setNextQuestionId(firstQuestionId);
              setUserJourney([]);
              setStepQuestion([]);
              restart();
            }}
          />
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
              <QuestionWrap key={index}>
                {questionType === "Questionnaire" ? (
                  <>
                    <CardSubTitle>
                      {questionTitle}
                      {ToolTipText && (
                        <TooltipComponent content={ToolTipText} />
                      )}
                    </CardSubTitle>
                    <ButtonGrp>
                      {singleAnswer?.map((i, index) => {
                        if (!i?.Answer) return null;

                        return (
                          <BlueButton
                            title={i?.Answer}
                            onClick={() => {
                              onNextQuestion(i?.NextQuestion?.data?.id);
                              onReportsFind(i);
                              setUserJourney([
                                ...userJourney,
                                { ...item, answer: i?.Answer },
                              ]);
                            }}
                            key={index}
                          />
                        );
                      })}
                    </ButtonGrp>
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
              </QuestionWrap>
            );
          })
      ) : null}
    </LeftWrap>
  );
};

export default LeftWrapPage;
