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

const LeftWrapPage = ({
  onPrevious,
  questions,
  setPublicationReports,
  setNonPublicationReports,
  firstQuestion,
  restart
}) => {
  const [nextQuestionId, setNextQuestionId] = useState();
  const [firstQuestionId, setFirstQuestionId] = useState();
  const [userJourney, setUserJourney] = useState([]);
  
  useEffect(() => {
    if (questions?.length && firstQuestion) {
      setNextQuestionId(
        firstQuestion
      );
      setFirstQuestionId(
        firstQuestion
      );
      setUserJourney([questions[0], ...userJourney])
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
  return (
    <LeftWrap>
      <CardHeader>
        <ImgBox>
          <img src="static/images/yellowfile.svg" alt="card" />
        </ImgBox>
        <CardTitle>
          Customize your decision-making process
        </CardTitle>
      </CardHeader>
      {userJourney
        ?.slice(0, 3).map((item, index) => (
          <Steps key={index}>
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
        ))
        .reverse()}
      <Border></Border>{" "}
      {!nextQuestionId ? (
        <Restart
          onClick={() => {
            setNextQuestionId(firstQuestionId);
            setUserJourney([userJourney[0]]);
            restart()
          }}
        >
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
                          onClick={() => {
                            onNextQuestion(i?.NextQuestion?.data?.id);
                            onReportsFind(i);
                            setUserJourney([item, ...userJourney]);
                          }}
                        />
                      ))}
                    </ButtonGrp>
                  </>
                ) : (
                  <StepComponent
                    onNext={(e) => onNextQuestion(e)}
                    onPrevious={onPrevious}
                    item={item}
                    setOptionReport={(i) => onReportsFind(i)}
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
