import styled from 'styled-components'
import { colors, fontSizes} from '../../../constant'
export const Button = styled.button`
    background:  transparent;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[1] + 2}px;
    line-height: 18.6px;
    text-transform: capitalize;
    border: none;
    color: ${colors.darktext};
    outline: none;
    text-decoration: none;
  
`