import styled, { keyframes } from "styled-components";
import { colors, fontSizes, space } from "../../../../constant/index";
import { fadeOut, fadeIn } from "react-animations";

const fadeOutAnimation = keyframes`${fadeOut}`;
const fadeInAnimation = keyframes`${fadeIn}`;

export const Wrapper = styled.div`
  background: ${colors.white};
  margin: auto;
  border-radius: 20px;
  display: flex;
  margin-top: ${space[10] * 2}px;
  margin-bottom: ${space[10] * 2}px;
  // width: ${({ isExpand }) => (isExpand ? "100%" : "700px")};
  // height: ${({ isExpand }) => (isExpand ? "100%" : "400px")};
  // overflow: hidden;
  transition: transform 2s ease-out;
  transform: ${({ isExpand }) => (isExpand ? "" : "scale(0.5, 0.55)")};
  position: relative;
  width: 100%;
  .bigCard {
    display: flex;
    opacity: 0;
    // position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
  }
  .bigCardAnimation {
    animation: 2s ${fadeInAnimation};
    opacity: 1;
  }
  .smallCard {
    position: absolute;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 100%;
  }
  .smallCardAnimation {
    animation: 2s ${fadeOutAnimation};
    opacity: 0;
    visibility: hidden;
  }
  @media only screen and (min-width: 1680px) {
    transform: ${({ isExpand }) => (isExpand ? "" : "scale(0.5)")};
  }
`;

export const LeftWrap = styled.div`
  width: 40%;
  padding: ${space[7] * 2}px;
  box-shadow: 6px 0px 106px -77px ${colors.black};
  z-index: 9999;
  position: relative;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
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
  user-select: none;
  color: ${colors.text};
  margin-bottom: ${space[10] * 2}px;
  padding-right: 18px;
  svg {
    color: ${colors.gray};
    font-size: ${fontSizes[2] - 3}px;
    margin-left: ${space[2] + 1}px;
    margin-top: -2px;
  }
`;
export const ButtonGrp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  margin: ${space[2]}rem auto;
  button {
    margin-bottom: ${space[6]}px;
  }
  @media only screen and (min-width: 1680px) {
    margin: ${space[4]}rem auto;
  }
`;
export const Steps = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  padding: ${space[2]}px 0px;
  height: 45px;
  cursor: pointer;
`;
export const Text = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-right: 5px;
`;
export const Dot = styled.span`
  width: 10px;
  height: 10px;
  background: ${colors.primary};
  border-radius: 50%;
  display: inline-block;
  margin-right: ${space[4]}px;
  position: relative;
  &::after {
    content: "";
    border-left: 2px solid #13a2bc;
    width: 2px;
    height: 50px;
    position: absolute;
    left: 4px;
    bottom: 2px;
  }
  &.hideDot {
    &::after {
      border-left: none;
    }
  }
`;
export const StepTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: ${fontSizes[0] + 2}px;
  line-height: 20px;
  color: #454545;
  margin: ${space[0]}px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

// Right Wrap
export const RightWrap = styled.div`
  background: ${colors.lightBg};
  padding: ${space[7] * 2}px ${space[5] * 2}px;
  width: 60%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const ReportsWrap = styled.div`
  display: flex;
  margin-top: ${space[10] + 10}px;
  // height: 100%;
`;
export const ReportsLeftWrap = styled.div`
  width: 30%;
  margin-right: ${space[8]}px;
  height: 410px;
  overflow: auto;
  overflow-x: hidden;
  padding: 0px 7px;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);
    margin-top: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(19, 166, 191, 0.2);
    border-radius: 10px;
  }
  @media only screen and (min-width: 1680px) {
    height: unset;
    overflow: visible;
    padding: 0px;
  }
`;
export const ReportsRightWrap = styled.div`
  width: 70%;
  // max-width: 427px;
  overflow: auto;
  padding-right: 5px;
  height: 410px;
  // height: 475px;
  // height: calc(100vh - 133px);
  min-height: 90%;
  max-height: 100%;
  display: flex;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);
    margin-top: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(19, 166, 191, 0.2);
    border-radius: 10px;
  }
  @media only screen and (min-width: 1680px) {
    height: 530px;
  }
`;

export const InnerSlideWrap = styled.div`
  transition: all 2s;
  position: relative;
  margin-right: 20px;
  width: 100%;
  display: inline-block;
  position: relative;
  min-width: 100%;
`;

export const QuestionWrap = styled.div`
  &.animation {
    animation: 2s ${fadeInAnimation};
  }
  &.animation-inner {
    animation: 2s ${fadeInAnimation};
  }
`;

export const Nodata = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.text};
  flex-direction: column;
  margin-top: -25px;
  a {
    color: ${colors.primary};
    font-size: 14px;
  }
  p {
    display: flex;
    align-items: center;
    margin: 0px;
  }
  svg {
    margin-right: 5px;
    margin-top: -3px;
  }
`;

export const LoaderWrap = styled.div`
  text-align: center;
  .spinner-border {
    border: 0.25em solid #065a89;
    border-right-color: transparent;
  }
`;

export const Divider = styled.div`
  border-bottom: 2.45084px solid rgba(134, 164, 176, 0.25);
`;

export const LoaderWrapFull = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const BlankData = styled.div`
  height: 1px;
`;

export const RestartIcon = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  margin-left: auto;
  margin-bottom: -13px;
  cursor: pointer;
  justify-content: flex-end;
  svg{
    color: #065a89;
  }
  p{
    color: #065a89;
    margin-left: 2px;
    margin-top: 2px;
    font-size: 14px;
  }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
`;
