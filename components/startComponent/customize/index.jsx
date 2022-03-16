import React from "react";
import BlueButton from "../../buttons/component/BlueButton";
import {
  Wrapper,
  CardHeader,
  ImgBox,
  CardTitle,
  CardSubTitle,
  ButtonGrp,
  Border,
  LoaderWrap,
} from "./styles";
import Loader from "../../loader";
import TooltipComponent from "../../tooltip";

const Customize = ({
  onYes,
  questions,
  isFetchingQuestions,
  onNextQuestion,
  onReportsFind,
}) => {
  const firstQuestion = questions?.length && questions[0];

  const title =
    firstQuestion?.attributes?.MainQuestion?.Question?.data?.attributes
      ?.Question;
  const singleAnswer = firstQuestion?.attributes?.AddAnswer;
  const ToolTipText = firstQuestion?.attributes?.ToolTipText;

  const onAnswerClick = (i) => {
    onYes();
    onNextQuestion(i?.NextQuestion?.data?.id);
    onReportsFind(i);
  }

  return (
    <Wrapper>
      {isFetchingQuestions ? (
        <LoaderWrap>
          <Loader height={80} width={80} />{" "}
        </LoaderWrap>
      ) : (
        <>
          <CardHeader>
            <ImgBox>
              <img src="static/images/cards.svg" alt="card" />
            </ImgBox>
            <CardTitle>
              Assess your country’s situation and<br /> 
              customize the decision-making process.
            </CardTitle>
          </CardHeader>
          <Border></Border>
          <CardSubTitle>
            {title}
            {ToolTipText && <TooltipComponent content={ToolTipText} />}
          </CardSubTitle>
          <ButtonGrp>
            {singleAnswer?.map((i, index) => (
              <BlueButton
                title={i?.Answer}
                onClick={() => onAnswerClick(i)}
                key={index}
              />
            ))}
          </ButtonGrp>
        </>
      )}
    </Wrapper>
  );
};

export default Customize;
