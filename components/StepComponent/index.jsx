import React, { useState, useEffect } from "react";
import RadioButton from "../radioButton";
import {
  StepWrap,
  Title,
  OptionsWrap,
  Item,
  ButtonsWrap,
  SlideButton,
  Steps,
} from "./style";

const StepComponent = ({
  onNext,
  onPrevious,
  item,
  setOptionReport,
  setStepQuestion,
  stepQuestion,
}) => {
  const [optionData, setOptionData] = useState();

  const title =
    item?.attributes?.MainQuestion?.Question?.data?.attributes?.Question;
  const multiAnswer = item?.attributes?.AddAnswer;

  useEffect(() => {
    if (multiAnswer) {
      setOptionData(multiAnswer[0] || []);
      setOptionReport(multiAnswer[0]);
    }
  }, [multiAnswer]);

  return (
    <StepWrap>
      <Title>{title} </Title>
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
          onClick={onPrevious}
          className="previous"
          style={{ opacity: !stepQuestion?.length ? 0.5 : 1 }}
          disabled={!stepQuestion?.length}
        >
          <img src="static/images/leftArrow.svg" alt="" /> Previous
        </SlideButton>
        <Steps>1/3</Steps>
        <SlideButton
          onClick={() => {
            onNext(optionData?.NextQuestion?.data?.id);
            setStepQuestion(item);
          }}
        >
          Next <img src="static/images/rightArrow.svg" alt="" />
        </SlideButton>
      </ButtonsWrap>
    </StepWrap>
  );
};

export default StepComponent;
