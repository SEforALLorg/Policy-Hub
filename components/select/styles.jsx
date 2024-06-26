import styled from 'styled-components'

export const DropDownList = styled.ul`
  padding: 10px;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: grey;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 10px;
  border: skyblue;
  &:first-child {
    padding-top: 0.8em;
  }
  position: absolute;
  width: 100%;
  overflow-y: scroll;
  left: 0px;
  top: 52px;
  max-height: 280px;
  z-index: 9999999999;
  box-shadow: 0px 4.90168px 17.1559px rgb(0 0 0 / 10%);
  @media only screen and (max-width: 1680px){
    top: ${({ top }) => top ? 'unset' : '52px'};
    bottom: ${({ top }) => top ? '52px' : ''};
    box-shadow: ${({ top }) => top ? '0px -4.90168px 17.1559px rgb(0 0 0 / 10%)' : '0px 4.90168px 17.1559px rgb(0 0 0 / 10%)'};
  }
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);
    margin-top: 5px;
  }
   
  &::-webkit-scrollbar-thumb {
    background: var(--theme-button-color);
    border-radius: 10px;
  }
  @media only screen and (max-width: 1600px){
    max-height: 170px;
  }
`;

export const Span = styled.span`
  background: ${prop => prop.selectedOption ? "var(--theme-yes-button-color)": 'white'};
  margin-right: 10px;
  border:  ${prop => prop.selectedOption ? "var(--theme-yes-button-color)" : '1px solid'} ;
  border-color: ${prop => prop.selectedOption ? "#fff !important" : '#808080'};
  display: inline-block;
  height: 13px;
  width: 13px;
  margin-top: 3px;
  @media only screen and (max-width: 1680px){
    margin-right: 8px;
  }
`