import styled, { keyframes } from "styled-components";
import { colors, space } from "constant/index";
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
    @media only screen and (max-width: 767px){
      display: none;
    }
  }
  .bigCardAnimation {
    animation: 2s ${fadeInAnimation};
    opacity: 1;
    @media only screen and (max-width: 767px){
      display: block;
    }
  }
  .smallCard {
    position: absolute;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 100%;
    @media only screen and (max-width: 767px){
      display: block;
      position: unset;
    }
  }
  .smallCardAnimation {
    animation: 2s ${fadeOutAnimation};
    opacity: 0;
    visibility: hidden;
    @media only screen and (max-width: 767px){
      display: none;
    }
  }
  @media only screen and (min-width: 1680px) {
    transform: ${({ isExpand }) => (isExpand ? "" : "scale(0.5)")};
  }
  @media only screen and (min-width:768px) and (max-width: 1024px){
    transform: ${({ isExpand }) => (isExpand ? "" : "scale(0.8,0.75)")};
  }
  @media only screen and (max-width: 767px){
    transform: unset;
  }
`;