import styled from 'styled-components'
import { colors, space,fullWidth ,media} from '../constant'

export const Wrapper = styled.div`
    padding: ${space[5]}px;
    background: ${colors.background};
`

export const CardBox = styled.div`
    margin: ${space[2] - 1}em 0px;
    @media only screen and (min-width: ${media.laptop}) and (max-width: ${media.screen}) {
        margin: ${space[1] - 1}em 0px;
    }
`

export const FooterWrap = styled.div`
    padding-top: ${space[10] * 2}px;
    width: ${fullWidth};
    margin: auto;
`