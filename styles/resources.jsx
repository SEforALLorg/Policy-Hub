import styled from 'styled-components'
import { colors, space } from '../constant'

export const Wrapper = styled.div`
    padding: ${space[5]}px;
    background: ${colors.background};
`

export const CardBox = styled.div`
    margin: ${space[2] - 1}em 0px;
`

export const FooterWrap = styled.div`
    padding-top: ${space[10] * 2}px;
    width: 100%;
    margin: auto;
`