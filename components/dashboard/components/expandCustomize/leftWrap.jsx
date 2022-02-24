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
} from "./styles";
import StepComponent from "../../../StepComponent";

const LeftWrapPage = ({ onNext, onPrevious }) => {
  const [isShowStep, setIsShowStep] = useState(false);
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
      {isShowStep ? (
        <StepComponent onNext={onNext} onPrevious={onPrevious} />
      ) : (
        <>
          <CardSubTitle>
            Are stand-alone systems and mini-grids integrated in the National
            Electrification Strategy (NES)?
            <FiInfo />
          </CardSubTitle>
          <ButtonGrp>
            <BlueButton title="yes" onClick={() => setIsShowStep(true)} />
            <BlueButton title="no" />
          </ButtonGrp>
        </>
      )}
    </LeftWrap>
  );
};

export default LeftWrapPage;
