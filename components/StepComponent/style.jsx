import styled, { keyframes } from "styled-components";
import { colors, fontSizes, space } from "../../constant";

export const StepWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: ${fontSizes[0] + 3}px;
  line-height: 29px;
  text-transform: capitalize;
  color: ${colors.darkText};
`;

export const OptionsWrap = styled.div`
  padding: 0px ${space[5]}px;
  flex: 1;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${space[6]}px;
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
