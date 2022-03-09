import styled from "styled-components";
import { colors, fontSizes, media } from "../../../../constant";
export const Button = styled.button`
  background: ${colors.secondary};
  border-radius: 70px;
  width: 100%;
  height: 70px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: ${fontSizes[3] + 2}px;
  line-height: 42px;
  text-transform: uppercase;
  border: none;
  color: ${colors.white};
  outline: none;
  text-decoration: none;
  @media only screen and (min-width: ${media.smallLaptop}) and (max-width: ${media.screen}) {
    height: 65px;
    font-size: ${fontSizes[2] + 2}px;
  }
`;
