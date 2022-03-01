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
  Restart,
} from "./styles";
import StepComponent from "../../../StepComponent";
import { useEffect } from "react";

const LeftWrapPage = ({ onNext, onPrevious, questions }) => {
  const [nextQuestionId, setNextQuestionId] = useState();
  const [firstQuestionId, setFirstQuestionId] = useState();

  useEffect(() => {
    if (questions?.length) {
      setNextQuestionId(
        questions[0]?.attributes?.MainQuestion?.Question?.data?.id
      );
      setFirstQuestionId(
        questions[0]?.attributes?.MainQuestion?.Question?.data?.id
      );
    }
  }, [questions?.length]);

  const onNextQuestion = (e) => {
    if (!nextQuestionId) return null;
    setNextQuestionId(e);
  };

  return (
    <LeftWrap>
      <CardHeader>
        <ImgBox>
          <img src="static/images/yellowfile.svg" alt="card" />
        </ImgBox>
        <CardTitle>
          Assess your country’s situation and customize the decision-making
          process.
        </CardTitle>
      </CardHeader>
      <Steps>
        <Text>
          <Dot />
          <StepTitle>
            Is there an up-to-date National Electrification Strategy (NES)?
          </StepTitle>
        </Text>
        <YesButton>Yes</YesButton>
      </Steps>
      <Border></Border>{" "}
      {!nextQuestionId ? (
        <Restart onClick={() => setNextQuestionId(firstQuestionId)}>
          <img src="static/images/restart.svg" alt="" />
        </Restart>
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
                          onClick={() =>
                            onNextQuestion(i?.NextQuestion?.data?.id)
                          }
                        />
                      ))}
                    </ButtonGrp>
                  </>
                ) : (
                  <StepComponent
                    onNext={(e) => onNextQuestion(e)}
                    onPrevious={onPrevious}
                    item={item}
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
