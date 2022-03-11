import styled from 'styled-components'
import { colors, fontSizes, space, fullWidth } from '../../constant'
export const AccordionWrap = styled.div`
    background: ${colors.white};
    box-shadow: 0px 4.90168px 17.1559px rgba(0, 0, 0, 0.1);
    border-radius: 9.8px;
    width: ${fullWidth};;
    margin-bottom: ${space[5]}px;
    cursor: pointer;
    position: relative;
    border: ${({active}) => active ? '2px solid #13A2BC' : '2px solid #fff' };
    box-sizing: border-box;
`
export const Select = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${space[5]}px ${space[6]}px ;
    width: ${fullWidth};
    height:50px;
   
`
export const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[1] - 1}px;
    line-height: 21px;
    margin: ${space[0]}px;
    color: ${colors.lighttext};
    width: ${({ selectedOption }) => selectedOption ? '93%' : '100%'};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export const Icon = styled.div`
  svg{
      font-size: ${fontSizes[3] + 2}px;
  }
`

export const OptionWrap = styled.div`
    background: ${colors.white};
    box-shadow: 0px 4.90168px 17.1559px rgba(0, 0, 0, 0.1);
    border-radius: 9.80336px;
    padding: 10px;
    margin-bottom: ${space[5]}px;   
`

export const DropDownListContainer = styled.div`
`;

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
  height: 221px;
  z-index: 9999;
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
    background-color: rgba(19,166,191,0.2);
    border-radius: 10px;
  }
`;
export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
  font-size: 15px;
  padding: 8px;
  position: relative;
  display: flex;
  align-items: flex-start;
  @media only screen and (max-width: 1680px){
    font-size: 14px;
    margin-bottom: 7px;
    padding: 8px 5px;
  }
  :hover{
    background: #2596be;
    color: #fff;
    span{
      border: 1px solid white;
    }
  }
  input{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0;
  }
  p{
    margin:0px;
    flex:1;
    word-break: break-word;
  }
`

export const Span = styled.span`
  background: ${prop => prop.selectedOption ? '#2e9fc7' : 'white'};
  margin-right: 10px;
  border:  ${prop => prop.selectedOption ? '1px solid #2e9fc7' : '1px solid'} ;
  display: inline-block;
  height: 13px;
  width: 13px;
  margin-top: 4px;
  @media only screen and (max-width: 1680px){
    margin-right: 8px;
  }
`