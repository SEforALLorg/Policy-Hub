import styled from "styled-components";
import { space } from "../../../constant/index";
export const FullWrap = styled.div``;
export const TopWrap = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: ${space[2]}rem;
  height: 70vh;
  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    margin-top: ${space[1] - 1}rem;
  }
  @media only screen and (min-width: 1680px){
    width: 90%;
    margin: 0 auto;
    margin-top: ${space[1] + 1}rem;
    margin-bottom: ${space[2]}rem;
  }
`;
export const Bottom = styled.div`
  // height: ${({isExpand}) => isExpand ? '' : '100vh'};
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 1680px){
    height: 100vh;
  }
`;
