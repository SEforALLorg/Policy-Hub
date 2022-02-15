import styled from 'styled-components'
import { colors, fontSizes, space } from '../../../constant'

export const Wrapper = styled.div`
    padding:  ${space[10] * 2}px;
    background: ${colors.white};
    border-radius: 16px;
    width: 80%;
    margin: auto;
`
export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: ${space[5]}px;
`
export const Border = styled.div`
    margin: ${space[7] + 1}px 0px;
    border-bottom: 1.6px solid rgba(6, 90, 137, 0.2);
`
export const ImgBox = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    position: relative;
    margin-right: ${space[10]}px;
`
export const CardTitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[3] + 6}px;
    line-height: 36px;
    text-transform: capitalize;
    color: ${colors.text};
`
export const CardSubTitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[3] + 1}px;
    line-height: 30px;
    text-transform: capitalize;
    color: ${colors.text};
     svg{
        color: ${colors.gray};
        font-size: 25px;
     }
`
export const ButtonGrp = styled.div`
    margin-top: ${space[10]}px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 18px;
    width: 100%;
`
