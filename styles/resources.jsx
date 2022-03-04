import styled from 'styled-components'
import { colors, space ,media,fullWidth} from '../constant'

export const Wrapper = styled.div`
    padding: ${space[5]}px;
    // background: ${colors.background};
`

export const CardBox = styled.div`
    margin: ${space[2] - 1}em 0em;
    @media only screen and (min-width: ${media.tabletX}) and (max-width: ${media.mediumScreen}){
        margin: ${space[1] - 1}em 0em;
    }
`

export const FooterWrap = styled.div`
    padding-top: ${space[10] * 2}px;
    width: ${fullWidth};
    margin: auto;
`