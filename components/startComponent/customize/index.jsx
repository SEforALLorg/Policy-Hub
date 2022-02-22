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
const Customize = ({ onYes }) => {
  return (
    <Wrapper>
      <CardHeader>
        <ImgBox>
          <img src="static/images/cards.svg" alt="card" />
        </ImgBox>
        <CardTitle>
          Assess your country’s situation and customize the decision-making
          process.
        </CardTitle>
      </CardHeader>
      <Border></Border>
      <CardSubTitle>
        Is there an up-to-date National Electrification Strategy (NES)?
        <FiInfo />
      </CardSubTitle>
      <ButtonGrp>
        <BlueButton title="yes" onClick={onYes} />
        <BlueButton title="no" />
      </ButtonGrp>
    </Wrapper>
  );
};

export default Customize;
