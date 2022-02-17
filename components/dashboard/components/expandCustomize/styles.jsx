import styled from 'styled-components'
import { colors, fontSizes, space } from '../../../../constant/index'

export const Wrapper = styled.div`
    padding:  ${space[10] * 2}px;
    background: ${colors.white};
    width: 100%;
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
        // max-width: 100%;
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
export const CardSubTitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[4] - 2}px;
    line-height: 30px;
    text-transform: capitalize;
    user-select: none;
    color: ${colors.text};
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
export const Steps = styled.div`
    display: flex;
    align-items: center;
    justify-content: baseline;
    padding: ${space[6]}px 0px;
`
export const Text = styled.div`
    display: flex;
    align-items: baseline;
`
export const Dot = styled.span`
    width: 13px;
    height: 10px;
    background: ${colors.primary};
    border-radius: 50%;
    display: inline-block;
    margin-right: ${space[5]}px;
`
export const StepTitle = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[2] + 2}px;
    line-height: 26px;
    text-transform: capitalize;
    color: #454545;
    margin: ${space[0]}px;
`
export const YesButton = styled.button`
    background: ${colors.primary};
    width: 61px;
    height: 35px;
    font-style: normal;
    font-weight: 500;
    font-size: ${fontSizes[2]}px;
    line-height: 24px;
    color: ${colors.white};
    border-radius: 84px;
    border: none;
`