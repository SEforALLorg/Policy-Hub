import styled from 'styled-components'
import { colors, fontSizes,fullWidth} from '../../../../constant'
export const Button = styled.button`
    background:  ${colors.secondary};
    border-radius: 70px;
    width: ${fullWidth};
    height: 91px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[4] + 2}px;
    line-height: 42px;
    text-transform: uppercase;
    border: none;
    color: ${colors.white};
    outline: none;
    text-decoration: none;
  
`