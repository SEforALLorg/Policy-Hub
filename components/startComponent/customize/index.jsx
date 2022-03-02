import React from "react";
import BlueButton from "../../buttons/component/BlueButton";
import { FiInfo } from "react-icons/fi";
import {
  Wrapper,
  CardHeader,
  ImgBox,
  CardTitle,
  CardSubTitle,
  ButtonGrp,
  Border,
} from "./styles";
import Loader from "../../loader";
const Customize = ({ onYes, questions, isFetchingQuestions, onNextQuestion, onReportsFind }) => {
  const firstQuestion = questions?.length && questions[0]

  const title = firstQuestion?.attributes?.MainQuestion?.Question?.data?.attributes?.Question

  const singleAnswer = firstQuestion?.attributes?.AddAnswer;

  return (
    <Wrapper>
      {
        isFetchingQuestions ? <Loader height={100} width={100} /> :
          <>
            <CardHeader>
              <ImgBox>
                <img src="static/images/cards.svg" alt="card" />
              </ImgBox>
              <CardTitle>
                Assess your country’s situation and <br />customize the decision-making
                process.
              </CardTitle>
            </CardHeader>
            <Border></Border>
            <CardSubTitle>
              {title}
              <FiInfo />
            </CardSubTitle>
            <ButtonGrp>
              {singleAnswer?.map((i) => (
                <BlueButton
                  title={i?.Answer}
                  onClick={() => {
                    onYes();
                    onNextQuestion(i?.NextQuestion?.data?.id);
                    onReportsFind(i);
                  }}
                />
              ))}
            </ButtonGrp>
          </>
      }
    </Wrapper>
  );
};

export default Customize;
