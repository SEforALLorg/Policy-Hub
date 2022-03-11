import styled, { keyframes } from "styled-components";
import {
  colors,
  fontSizes,
  media,
  space,
  fullWidth,
} from "../../../../constant";
import { fadeOut, fadeIn } from "react-animations";

const fadeOutAnimation = keyframes`${fadeOut}`;
const fadeInAnimation = keyframes`${fadeIn}`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 100%;
  .slick-slide {
    height: 300px;
  }
  .slick-dots li button:before {
    transition: all 0.5s;
    font-size: 8px;
  }
  .slick-dots li.slick-active button:before {
    color: #fcb600;
    font-size: 20px;
  }
  .slick-dots {
    position: absolute;
    right: -33px;
    top: 50%;
    width: 10px;
    transform: translateY(-50%);
  }
  @media only screen and (min-width: 1680px) {
    height: 90%;
  }
`;
export const Card = styled.div`
  width: ${fullWidth};
  background: ${colors.white};
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: ${space[10] * 2}px ${space[10] * 4}px;
  position: relative;
  height: 100%;
  @media only screen and (max-width: 1680px) {
    padding: 30px ${space[10] * 4}px;
  }
`;

export const Title = styled.h5`
  font-style: normal;
  font-weight: 700;
  font-size: 37px;
  line-height: 44px;
  text-align: center;
  user-select: none;
  text-transform: uppercase;
  color: ${colors.text};
  text-align: center;
  padding-bottom: ${space[5]}px;
  margin-top: ${space[5]}px;
  // margin-bottom: 10px;
  @media only screen and (min-width: 1680px) {
    margin-top: 7px;
    font-size: ${fontSizes[5] + 5}px;
    margin-bottom: 20px;
    line-height: 64.4px;
  }
  @media only screen and (min-width: ${media.tablet}) and (max-width: ${media.laptop}) {
    font-size: ${fontSizes[4] + 2}px;
    line-height: 42px;
    margin-top: 0px;
  }
  @media only screen and (min-width: ${media.laptop}) and (max-width: ${media.screen}) {
    margin-top: 0px;
  }
`;
export const Span = styled.span`
  color: ${colors.secondary};
  padding: 0px ${space[3]}px;
`;
export const PrimarySpan = styled.span`
  color: ${colors.primary};
  padding-left: ${space[3]}px;
`;
export const SubTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: ${fontSizes[3] + 2}px;
  line-height: 45px;
  user-select: none;
  color: ${colors.text};
  margin: ${space[0]}px;
  width: ${fullWidth};
  span {
    font-weight: 700;
  }
  @media only screen and (min-width: ${media.tablet}) and (max-width: ${media.laptop}) {
    font-size: ${fontSizes[3] + 2}px;
    line-height: 50px;
  }
  @media only screen and (min-width: 1680px) {
    font-size: ${fontSizes[4] + 2}px;
    line-height: 50px;
  }
`;
export const ScrollText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: ${fontSizes[3]}px;
  line-height: 30px;
  text-align: center;
  user-select: none;
  color: ${colors.text};
  text-align: center;
  margin: ${space[0]}px;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  z-index: 99;
  bottom: ${space[4]}px;
  animation: 2s ${fadeOutAnimation};
  transition: all 0.5s;
  &.hide {
    opacity: 0;
  }
  svg {
    font-size: ${fontSizes[5] + 7}px;
    color: #13a2bc;
    cursor: pointer;
    @media only screen and (min-width: ${media.smallLaptop}) and (max-width: ${media.screen}) {
      font-size: ${fontSizes[5]}px;
      margin-top: -10px;
    }
  }
`;

export const Point = styled.div`
  border-left: 17px solid ${colors.primary};
`;
export const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  padding: ${space[10] * 3}px 0px;
  width: 100%;
  @media only screen and (min-width: ${media.smallLaptop}) and (max-width: ${media.screen}) {
    padding: ${space[10] * 2}px 0px;
  }
  &.topStep {
    padding-top: ${space[10] * 1}px;
    padding-bottom: ${space[10] * 4}px;
  }
`;
export const Box = styled.div`
  // border-bottom: 2.4px solid rgba(134, 164, 176, 0.25);
  &:last-child {
    border-bottom: none;
  }
  img {
    width: 175px;
    height: 160px;
  }
`;
export const BottomBtn = styled.div`
  width: 40%;
  position: absolute;
  bottom: -32px;
  opacity: 0;
  &.animationButton{
    animation: 2s ${fadeInAnimation};
    opacity: 1;
  }
  button{
    @media only screen and (max-width: 1680px) {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
  @media only screen and (max-width: 1680px) {
    width: 40%;
    bottom: -25px;
  }
  // animation: 6s ${fadeInAnimation};
  // transition: all 0.5s;
  // @media only screen and (min-width: ${media.smallLaptop}) and (max-width: ${media.screen}) {
  //   width: 44%;
  //   bottom: -32px;
  // }
`;


export const InnerTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 35px;
  user-select: none;
  color: ${colors.text};
  margin: ${space[0]}px;
  width: ${fullWidth};
  margin-bottom: 30px;
  span {
    font-weight: 700;
  }
  // @media only screen and (min-width: ${media.tablet}) and (max-width: ${media.laptop}) {
  //   font-size: ${fontSizes[3] + 2}px;
  //   line-height: 50px;
  // }
  @media only screen and (max-width: 1680px) {
    font-size: 18px;
    margin-bottom: 10px;
    line-height: 32px;
  }
`;
