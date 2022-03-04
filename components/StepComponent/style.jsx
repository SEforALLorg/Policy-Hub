import styled, { keyframes } from "styled-components";
import { colors, fontSizes, space } from "../../constant";

export const StepWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: ${fontSizes[0] + 3}px;
  line-height: 29px;
  color: ${colors.darkText};
  margin:0px;
  height: 45px;
`;

export const OptionsWrap = styled.div`
  padding: 0px ${space[5]}px;
  height: 212px;
  overflow: auto;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${space[6]}px;
  cursor: pointer;
  p {
    font-size: ${fontSizes[0] + 2}px;
    line-height: 24px;
    margin: 0px;
    color: ${colors.darkText};
  }
`;

export const ButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  position: absolute;
    bottom: 18px;
    width: 100%;
    left: 0px;
    padding: 0px 20px;
`;

export const SlideButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${colors.transparent};
  border: none;
  color: ${colors.blue};
  font-wight: 600;
  font-size: ${fontSizes[0] + 2}px;
  img {
    width: 10px;
    height: 10px;
    margin-left: 7px;
    margin-top: -3px;
  }
  &.previous {
    img {
      margin-left: 0px;
      margin-right: 7px;
    }
  }
`;

export const Steps = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.transparent};
  border: none;
  color: ${colors.blue};
  font-wight: 600;
  font-size: ${fontSizes[0] + 2}px;
`;

export const BigTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: ${fontSizes[1] + 1}px;
  line-height: 24px;
  user-select: none;
  color: ${colors.text};
  margin-bottom: 0px;
  svg {
    color: ${colors.gray};
    font-size: ${fontSizes[2] - 3}px;
    margin-left: ${space[2] + 1}px;
    margin-top: -2px;
  }
`;