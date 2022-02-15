import styled from 'styled-components'
import { colors, fullWidth, space } from '../constant'

export const Wrapper = styled.div`
    padding: ${space[5]}px;
    background: ${colors.background};
`

export const HeaderWrap = styled.div`
    width: 80%;
    margin: auto;
`

export const StartCards = styled.div`
    margin: ${space[1] + 1}rem 0px;
`

export const FooterWrap = styled.div`
    padding-top: ${space[10] * 2}px;
    width: ${fullWidth};
    margin: auto;
`