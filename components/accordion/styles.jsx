import styled from 'styled-components'
import { colors, fontSizes,space,fullWidth} from '../../constant'
export const AccordionWrap = styled.div`
    background: ${colors.white};
    box-shadow: 0px 4.90168px 17.1559px rgba(0, 0, 0, 0.1);
    border-radius: 9.8px;
    width: ${fullWidth};;
    margin-bottom: ${space[5]}px;
    cursor: pointer;
    position: relative;
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
    text-transform: capitalize;
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
  &::-webkit-scrollbar {
    width: 0em;
  }
`;
export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
  font-size: 15px;
  padding: 8px;
  :hover{
    background: #2596be  ;
    color: #fff;
  }
`

export const Span = styled.span`
  background: ${prop => prop.selectedOption ? '#2e9fc7' : 'white'};
  margin-right: 10px;
  border: 1px solid;
  display: inline-block;
  height: 13px;
  width: 13px;
`