import styled from "styled-components";
import { space } from "../../../constant/index";
export const FullWrap = styled.div``;
export const TopWrap = styled.div`
  margin-top: ${space[1] + 1}rem;
  margin-bottom: ${space[2]}rem;
  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    margin-top: ${space[1] - 1}rem;
  }
`;
export const Bottom = styled.div`
  height: ${({ isExpand }) => (isExpand ? "100%" : "100vh")};
  display: flex;
  position: relative;
  .collapsible {
    transition: transform 1.5s ease-out;
    transform-origin: center center;
    transform: scale(0, 0) translate(0, 0);
    width: 0px;
  }
  .collapsed {
    transform: scale(1, 1) translate(0, 0);
    width: 100%;
  }
  .collapsibleSmall {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s linear 0s, opacity 2s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  .collapsedSmall {
    visibility: hidden;
    opacity: 0;
    transition: visibility 2s linear 2s, opacity 4s;
    width: 100%;
    margin-top: -29px;
  }
`;
