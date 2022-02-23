import styled from 'styled-components'
import { colors, fontSizes, space,fullWidth} from '../../../../constant/index'

export const FullWrap = styled.div`
    padding: ${space[10] * 2}px ${space[10]}px ${space[0]}px ${space[6]}px;
    background: ${colors.lightBg};
    width: ${fullWidth};
`
export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: ${space[5]}px;
`
export const ImgBox = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    user-select: none;
    margin-right: ${space[10]}px;
    img{
        // max-width: ${fullWidth};
    }
`
export const CardTitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[3] + 6}px;
    line-height: 36px;
    text-transform: capitalize;
    user-select: none;
    color: ${colors.text};
    user-select: none;
    margin: ${space[0]}px;
`
export const ReportWrap = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
`
export const Cards = styled.div`
    width: ${fullWidth};
`