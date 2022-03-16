import styled, { keyframes } from "styled-components";
import { colors } from "../../constant";

export const Wrapper = styled.div`
  display: block;
  .checkmark{
    height: 18px;
    width: 18px;
  }
  .container .checkmark:after{
    left: 7px;
    top: 1px;
    width: 6px;
    height: 12px;
    border-width: 0 2px 2px 0;
  }
`;

export const Title = styled.h4`
  font-weight: bold;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  text-transform: capitalize;
  color: ${colors.text};
`;

export const Description = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 27px;
  text-align: center;
  color: ${colors.text};
`;

export const Restart = styled.div`
  width: 120px;
  height: 120px;
  margin: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 3.75373px 3.75373px rgb(0 0 0 / 25%);
  border-radius: 11.2612px;
  cursor: pointer;
  flex-direction: column;
  img {
    width: 65px;
    height: 65px;
  }
  p {
    font-weight: normal;
    font-size: 13px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    color: ${colors.primary};
    margin: 0px;
    margin-top: 5px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputWrap = styled.div`
  margin: 0px 5px;
  p {
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    text-align: left;
    color: ${colors.text};
    margin: 0px;
    margin-top: 5px;
    margin-left: 11px;
  }
  input {
    background: ${colors.white};
    box-shadow: 0px 4.59958px 16.0985px rgba(0, 0, 0, 0.1);
    border-radius: 9.19916px;
    border: 1px solid ${colors.white};
    padding: 10px 10px;
    outline: none !important;
    font-size: 16px;
    &:focus{
      box-shadow: 0px 4.59958px 16.0985px rgba(0, 0, 0, 0.1) !important;
      border: 1px solid ${colors.primary} !important;
    }
  }
`;

export const ButtonWrap = styled.div`
  button {
    width: 244px;
    width: 214px;
    height: 38px;
    margin: 0 auto;
    display: block;
    opacity: ${({disabled}) => disabled ? 0.4 : 1}
  }
`;
