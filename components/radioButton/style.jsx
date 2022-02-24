import styled, { keyframes } from "styled-components";
import { colors, fontSizes, space } from "../../constant";

export const CheckBoxWrap = styled.div`
  .container-wrap {
    display: block;
    position: relative;
    padding-left: 28px;
    margin-bottom: 22px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .container-wrap input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 1px solid ${colors.borderColor};
    background-color: ${colors.white};
    border-radius: 50%;
  }
  .container-wrap:hover input ~ .checkmark {
    background-color: ${colors.white};
  }
  .container-wrap input:checked ~ .checkmark {
    background-color: ${colors.white};
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  .container-wrap input:checked ~ .checkmark:after {
    display: block;
  }
  .container-wrap .checkmark:after {
    top: 3px;
    left: 3px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${colors.secondary};
  }
`;
