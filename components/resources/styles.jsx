import styled from 'styled-components'
import { colors, fontSizes,space,fullWidth} from '../../constant'

export const Full = styled.div`
    border-radius: 16px;
    overflow: hidden;
`
export const Header = styled.div`
    padding: ${space[10] * 2}px ${space[10] * 3}px;
    background: ${colors.white};
    filter: drop-shadow(0px 4px 4px rgba(64, 93, 109, 0.15));
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
    text-transform: capitalize;
    color: ${colors.lighttext};
    margin: ${space[0]}px;
`
export const ReportWrap = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Cards = styled.div`
    width: 30%;
    margin-right: ${space[10] + 5}px;
`
export const FilterCard = styled.div`
    width: 70%;

`
export const BorderWrap = styled.div`
    margin-bottom: ${space[10]}px;
`
export const Inner = styled.div`
    padding: ${space[10] + 5 }px ${space[10] * 2}px ${space[0]}px ${space[10]}px;
    background: ${colors.lightBg};
    width: ${fullWidth};
`
export const Border = styled.div`
    border-bottom: 2.4px solid rgba(134, 164, 176, 0.25);
    margin-bottom: ${space[2]}px;
`