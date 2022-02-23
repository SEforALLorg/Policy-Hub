import styled from 'styled-components'
import { colors, fontSizes,space,fullWidth} from '../../../../constant'

export const CardWrap = styled.div`

`
export const CardBox = styled.p`
    background: ${colors.white};
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    padding: ${space[10]}px;
    margin-bottom:${space[10] * 2}px;
    Display:flex;
    justify-content:center;
    align-item:center
    width:${fullWidth};
    img{
        max-width:${fullWidth};
    }
`
export const Text= styled.a`
    color: ${colors.anqrtext};
    text-decoration:none;
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[1]}px;
    line-height: 19px;
    text-align: center;
    display:block;
    text-transform: capitalize;
`