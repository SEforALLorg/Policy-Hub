import styled from 'styled-components'
import { colors, fontSizes, space ,fullWidth} from '../../../constant'

export const Wrapper = styled.div`
    padding:  ${space[10] * 2}px;
    background: ${colors.white};
    border-radius: 16px;
    width: ${fullWidth};
    margin: auto;
`
export const CardHeader = styled.div`
    display: flex;
    align-items: center;
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
        width:230px;
    }
`
export const CardTitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[4] + 5}px;
    line-height: 55px;
    text-transform: capitalize;
    user-select: none;
    color: ${colors.text};
    user-select: none;
    margin: ${space[0]}px;
`
export const CardSubTitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[4] + 4}px;
    line-height: 50px;
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
    width: 40%;
    margin:auto;
    button {
        margin-bottom: ${space[10]}px;
        height: 65px;
        font-size: ${fontSizes[2] + 3}px;
    }
`
