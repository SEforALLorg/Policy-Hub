import styled from 'styled-components'
import { colors, fontSizes, space } from '../../constant'

export const Wrapper = styled.div`

`
export const FooterWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @media only screen and (max-width:991px) {
            flex-wrap: wrap;
        }
`
export const IconsWrap = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 10px;
    @media only screen and (max-width:1200px) {
        width: unset;
    } 
`
export const Icons = styled.div`
    border: 1px solid  ${colors.white};
    color: ${colors.white};
    border-radius: 50%;
    height: 48px;
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        font-size: 22px;
    }
`
export const RightWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    @media only screen and (max-width:1200px) {
        margin-top: ${space[10]}px;
        justify-content: space-around;
    }  
    @media only screen and (max-width:991px) {
        margin-top: ${space[10]}px;
        justify-content: space-between;
    }   
    @media only screen and (max-width:520px) {
            flex-wrap: wrap;
            gap: 12px;
            justify-content: flex-start;
    }
`
export const FootDetail = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: ${fontSizes[1]}px;
    line-height: 20px;
    text-transform: capitalize;
    color: ${colors.white};
    margin: ${space[0]}px;
    @media only screen and (max-width:1200px) {
        font-size: ${fontSizes[0] + 2}px;
    }
`
export const Border = styled.div`
    border-bottom: 1.6px solid ${colors.white};
    margin:${space[7] + 1}px 0px;
    width: 100%;
`
export const BottomWrap = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width:991px) {
            flex-wrap: wrap;
            gap: 12px;
            justify-content: flex-start;
        }
    }
`
export const CopyRight = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: ${fontSizes[0] + 2}px;
    line-height: 17px;
    text-transform: capitalize;
    color: ${colors.white};
    width: 100%;
`
export const ImgBox = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 30px;
    justify-content: flex-end;
     img{
         max-width:100%;
     }
    @media only screen and (max-width:991px) {
        justify-content: space-evenly; 
    }
    @media only screen and (max-width:480px) {
            max-width: 30%;
            justify-content: flex-start;
    }
`