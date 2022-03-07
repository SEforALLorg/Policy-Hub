import styled from 'styled-components'
import { colors, fontSizes,space,fullWidth} from '../../constant'

export const Full = styled.div`
    border-radius: 16px;
    .right-wrap{
        width: 100%;
        border-top-right-radius: 0px;
        border-bottom-left-radius: 20px;
    }
    .report-left-wrap{
        width: 35%;
    }
    .report-right-wrap{
        width: 65%;
        max-width: unset;
    }
`
export const Header = styled.div`
    padding: ${space[10] * 2}px ${space[10] * 3}px;
    background: ${colors.white};
    filter: drop-shadow(0px 4px 4px rgba(64, 93, 109, 0.15));
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`
export const Heading = styled.h5`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[5]  - 3}px;
    line-height: 46px;
    text-transform: uppercase;
    color: ${colors.text};
`
export const SubHeading = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[3]  + 1}px;
    line-height: 29px;
    color: ${colors.lighttext};
    margin: ${space[0]}px;
`