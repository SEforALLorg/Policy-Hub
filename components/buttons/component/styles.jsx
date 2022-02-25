import styled from 'styled-components'
import { colors, fontSizes ,fullWidth} from '../../../constant'
export const Button = styled.button`
    background:  ${colors.lightBlue};
    border-radius: 69px;
    width: ${fullWidth};
    height: 50px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[0] + 2}px;
    line-height: 20px;
    text-transform: uppercase;
    border: none;
    color: ${colors.blue};
    outline: none;
    text-decoration: none;
  
`