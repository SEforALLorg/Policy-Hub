import styled from 'styled-components'
import { colors, fontSizes, space } from '../../../constant'

export const Wrapper = styled.div`
    padding:  ${space[10] + 4}px;
    background: ${colors.white};
    border-radius: 16px;
    width: 100%;
    margin: auto;
    max-width: 700px;
`
export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: ${space[5]}px;
`
export const Border = styled.div`
    margin: ${space[8]}px 0px;
    border-bottom: 1.6px solid rgba(6, 90, 137, 0.2);
`
export const ImgBox = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    user-select: none;
    margin-right: ${space[10]}px;
    img{
        max-width: 100%;
    }
`
export const CardTitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[3] + 4}px;
    line-height: 36px;
    text-transform: capitalize;
    user-select: none;
    color: ${colors.text};
    user-select: none;
    margin: ${space[0]}px;
`
export const CardSubTitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[2] + 4}px;
    line-height: 30px;
    text-transform: capitalize;
    user-select: none;
    color: ${colors.text};
    padding: 0px ${space[5]}px;
    margin-bottom: ${space[10] * 2}px;
     svg{
        color: ${colors.gray};
        font-size: 25px;
        margin-left:  ${space[4]}px;
     }
`
export const ButtonGrp = styled.div`
    margin-top: ${space[10]}px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 18px;
    width: 50%;
    margin:auto;
`
