import React, { useState, useEffect } from "react";
import RadioButton from "../radioButton";
import TooltipComponent from "../tooltip";
import {
  StepWrap,
  Title,
  OptionsWrap,
  Item,
  ButtonsWrap,
  SlideButton,
  Steps,
  BigTitle,
} from "./style";

const StepComponent = ({
  onNext,
  onPrevious,
  item,
  setOptionReport,
  setStepQuestion,
  stepQuestion,
  totalSteps
}) => {
  const [optionData, setOptionData] = useState();
  const [stepCount, setStepCount] = useState(1);
  
  const title =
    item?.attributes?.MainQuestion?.Question?.data?.attributes?.Question;
  const multiAnswer = item?.attributes?.AddAnswer;

  const nextCount = totalSteps?.length || 1
  
  useEffect(() => {
    if (multiAnswer) {
      setOptionData(multiAnswer[0] || []);
      setOptionReport(multiAnswer[0]);
    }
  }, [multiAnswer]);

  const ToolTipText = item?.attributes?.ToolTipText;
  return (
    <StepWrap>
      {item?.attributes?.QuestionTitle && (
        <BigTitle>
          {item?.attributes?.QuestionTitle}
          {ToolTipText && (
            <TooltipComponent content={ToolTipText} />
          )}
        </BigTitle>
      )}
      <Title>
        {stepCount}. {title}{" "}
      </Title>
      <OptionsWrap>
        {multiAnswer?.map((i, index) => {
          if (!i?.Answer) return null;
          return (
            <Item
              key={index}
              onClick={() => {
                setOptionData(i);
                setOptionReport(i);
              }}
            >
              <RadioButton checked={optionData?.id === i?.id} />
              <p>{i?.Answer}</p>
            </Item>
          );
        })}
      </OptionsWrap>
      <ButtonsWrap>
        <SlideButton
          onClick={() => {
            onPrevious();
            setStepCount(stepCount - 1);
          }}
          className="previous"
          style={{ opacity: !stepQuestion?.length ? 0.5 : 1 }}
          disabled={!stepQuestion?.length}
        >
          <img src="static/images/leftArrow.svg" alt="" /> Previous
        </SlideButton>
        <Steps>
          {stepCount}/{nextCount}
        </Steps>
        <SlideButton
          onClick={() => {
            onNext(optionData?.NextQuestion?.data?.id);
            setStepQuestion(item);
            if(!item?.attributes?.MainQuestion?.QuestionKeyType?.data) return null
            setStepCount(stepCount + 1);
          }}
        >
          Next <img src="static/images/rightArrow.svg" alt="" />
        </SlideButton>
      </ButtonsWrap>
    </StepWrap>
  );
};

export default StepComponent;
