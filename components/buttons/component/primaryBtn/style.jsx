import styled from 'styled-components'
import { colors, fontSizes} from '../../../../constant'
export const Button = styled.button`
    background:  ${colors.primary};
    border-radius: 60px;
    width: 100%;
    height: 50px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[1]}px;
    line-height: 20px;
    text-transform: uppercase;
    border: none;
    color: ${colors.white};
    outline: none;
    text-decoration: none;
  
`