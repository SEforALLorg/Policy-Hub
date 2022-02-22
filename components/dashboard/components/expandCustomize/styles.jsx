import styled, { keyframes } from "styled-components";
import { colors, fontSizes, space } from "../../../../constant/index";
import { zoomInRight } from "react-animations";

const fadeOutAnimation = keyframes`${zoomInRight}`;

export const Wrapper = styled.div`
  background: ${colors.white};
  width: 100%;
  border-radius: 20px;
  display: flex;
  height: 650px;
  margin-top: ${space[10] * 2}px;
  margin-bottom: ${space[10] * 2}px;
  overflow: hidden;
  animation: 0.8s ${fadeOutAnimation};
`;

export const LeftWrap = styled.div`
  width: 40%;
  padding: ${space[7] * 2}px;
  box-shadow: 6px 0px 106px -77px ${colors.black};
  z-index: 9999;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${space[5]}px;
`;
export const Border = styled.div`
  margin: ${space[8]}px 0px;
  border-bottom: 1.6px solid rgba(6, 90, 137, 0.2);
`;
export const ImgBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  user-select: none;
  margin-right: ${space[10]}px;
  img {
    width: 90px;
    height: 90px;
  }
`;
export const CardTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: ${fontSizes[2] + 2}px;
  line-height: 26px;
  text-transform: capitalize;
  user-select: none;
  color: ${colors.text};
  user-select: none;
  margin: ${space[0]}px;
`;
export const CardSubTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: ${fontSizes[1] + 1}px;
  line-height: 24px;
  text-transform: capitalize;
  user-select: none;
  color: ${colors.text};
  margin-bottom: ${space[10] * 2}px;
  svg {
    color: ${colors.gray};
    font-size: ${fontSizes[2]};
    margin-left: ${space[2] + 1}px;
    margin-top: -9px;
  }
`;
export const ButtonGrp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 65%;
  margin: ${space[3]}rem auto;
  button {
    margin-bottom: ${space[6]}px;
  }
`;
export const Steps = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  padding: ${space[6]}px 0px;
`;
export const Text = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
export const Dot = styled.span`
  width: 10px;
  height: 10px;
  background: ${colors.primary};
  border-radius: 50%;
  display: inline-block;
  margin-right: ${space[4]}px;
`;
export const StepTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: ${fontSizes[0]}px;
  line-height: 20px;
  text-transform: capitalize;
  color: #454545;
  margin: ${space[0]}px;
`;
export const YesButton = styled.button`
  background: ${colors.primary};
  width: 54px;
  height: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: ${fontSizes[0] + 2}px;
  line-height: 24px;
  color: ${colors.white};
  border-radius: 84px;
  border: none;
`;

// Right Wrap
export const RightWrap = styled.div`
  background: ${colors.lightBg};
  padding: ${space[7] * 2}px ${space[5] * 2}px;
  width: 60%;
`;

export const ReportsWrap = styled.div`
  display: flex;
  margin-top: ${space[10] + 10}px;
`;
export const ReportsLeftWrap = styled.div`
  width: 30%;
  margin-right: ${space[8]}px;
`;
export const ReportsRightWrap = styled.div`
  width: 70%;
  overflow: auto;
  height: 500px;
  padding-bottom: ${space[10]}px;
  &::-webkit-scrollbar {
    width: 0em;
  }
`;
