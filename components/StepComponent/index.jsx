import React from "react";
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

const StepComponent = ({onNext, onPrevious}) => {
  return (
    <StepWrap>
      <Title>1. Determine mini-grid ownership and operator model </Title>
      <OptionsWrap>
        <Item>
          <RadioButton checked={true} />
          <p>Utility operator model</p>
        </Item>
        <Item>
          <RadioButton />
          <p>Private operator model</p>
        </Item>
        <Item>
          <RadioButton />
          <p>Community operator model</p>
        </Item>
        <Item>
          <RadioButton />
          <p> Public-private operator model</p>
        </Item>
      </OptionsWrap>
      <ButtonsWrap>
        <SlideButton onClick={onPrevious} className="previous"><img src="static/images/leftArrow.svg" alt="" /> Previous</SlideButton>
        <Steps>1/3</Steps>
        <SlideButton onClick={onNext}>Next <img src="static/images/rightArrow.svg" alt="" /></SlideButton>
      </ButtonsWrap>
    </StepWrap>
  );
};

export default StepComponent;
