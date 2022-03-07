import React, { useState } from "react";
import BlueButton from "../../../buttons/component/BlueButton";
import { FiInfo } from "react-icons/fi";
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
} from "./styles";
import StepComponent from "../../../StepComponent";
import { useEffect } from "react";
import CompletedSteps from "../../../completedSteps";

const LeftWrapPage = ({
  questions,
  setPublicationReports,
  setNonPublicationReports,
  firstQuestion,
  restart,
}) => {
  const [nextQuestionId, setNextQuestionId] = useState();
  const [firstQuestionId, setFirstQuestionId] = useState();
  const [userJourney, setUserJourney] = useState([]);
  const [stepQuestion, setStepQuestion] = useState([]);

  useEffect(() => {
    if (questions?.length && firstQuestion) {
      setNextQuestionId(firstQuestion);
      setFirstQuestionId(firstQuestion);
      setUserJourney([...userJourney, questions[0]]);
    }
  }, [questions?.length, firstQuestion]);

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
        <CardTitle>Customize your decision-making process</CardTitle>
      </CardHeader>
      {nextQuestionId &&
        userJourney?.slice(0, 3).map((item, index) => (
          <Steps
            key={index}
            onClick={() => {
              if (nextQuestionId) {
                onStepChange(item);
              }
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
            <YesButton>Yes</YesButton>
          </Steps>
        ))}
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
            return (
              <QuestionWrap key={index}>
                {questionType === "Questionnaire" ? (
                  <>
                    <CardSubTitle>
                      {questionTitle}
                      <FiInfo />
                    </CardSubTitle>
                    <ButtonGrp>
                      {singleAnswer?.map((i) => (
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
                        />
                      ))}
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
