import styled from 'styled-components'
import { colors, fontSizes} from '../../constant'
export const Button = styled.button`
    background:  ${colors.lightBlue};
    border-radius: 69px;
    width: 50%;
    height: 50px;
    text-decoration: underline;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[1]}px;
    line-height: 20px;
    text-transform: uppercase;
    border: none;
    color: ${colors.blue};
    outline: none;
    text-decoration: none;
  
`