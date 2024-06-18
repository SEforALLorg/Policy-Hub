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
  margin-top: 20px;
  margin-bottom: ${space[10] * 2}px;
  transition: transform 1.6s ease-out;
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
    animation: 1.6s ${fadeInAnimation};
    opacity: 1;
    @media only screen and (min-width: 991px){
      height: 760px;
    }
    @media only screen and (min-width: 768px) and (max-width: 900px){
      height: 820px;
    }
    @media only screen and (max-width: 767px){
      display: block;
    }
  }
  .increse-electricity-bigCardAnimation-height{
    @media only screen and (min-width: 768px){
      height: 700px;
    }
  }
  .increse-efficiency-bigCardAnimation-height {
    @media only screen and (min-width: 1201px){
      height: 850px;
    }
    @media only screen and (min-width: 991px) and (max-width: 1200px){
      height: 900px;
    }
    @media only screen and (min-width: 768px) and (max-width: 990px){
      height: 950px;
    }
  }
  .increse-phc-bigCardAnimation-height {
    @media only screen and (min-width: 1201px){
      height: 865px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1200px){
      height: 920px
    }
  }
  .smallCard {
    position: absolute;
    top: 0px;
    height: 100%;
    left: 0px;
    width: 100%;
    @media only screen and (max-width: 767px){
      display: block;
      position: unset;
    }
  }
  .smallCardAnimation {
    animation: 1.6s ${fadeOutAnimation};
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
    transform: ${({ isExpand }) => (isExpand ? "" : "scale(0.75,0.75)")};
  }
  @media only screen and (min-width:1024px) and (max-width: 1180px){
    transform: ${({ isExpand }) => (isExpand ? "" : "scale(0.65,0.65)")};
  }
  @media only screen and (max-width: 767px){
    transform: unset;
    margin-top: 0px !important;
  }
`;