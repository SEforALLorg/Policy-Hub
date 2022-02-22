import React from 'react';
import BlueButton from "../../../buttons/component/BlueButton";
import { FiInfo } from "react-icons/fi";
import {
    Wrapper,
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
    YesButton
} from "./styles";
const ExpandCustomize = () => {
    return (
        <Wrapper>
            <CardHeader>
                <ImgBox>
                    <img src={"static/images/yellowfile.svg"} alt="card" />
                </ImgBox>
                <CardTitle>
                    Assess your country’s situation and customize the decision-making process.
                </CardTitle>
            </CardHeader>
            <Steps>
                <Text>
                    <Dot></Dot>
                    <StepTitle>
                        Is there an up-to-date National Electrification Strategy (NES)?
                    </StepTitle>
                </Text>
                <YesButton>Yes</YesButton>
            </Steps>
            <Border></Border>
            <CardSubTitle>
                Are stand-alone systems and mini-grids integrated in
                the National Electrification Strategy (NES)?
                <FiInfo />
            </CardSubTitle>
            <ButtonGrp>
                <BlueButton title="yes" />
                <BlueButton title="no" />
            </ButtonGrp>
        </Wrapper>
    );
};

export default ExpandCustomize;