import styled from 'styled-components'
import { colors, fontSizes, media,space } from '../../constant'

export const Wrapper = styled.div`

`
export const FooterWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @media only screen and (max-width:${media.mobileX}) {
            flex-wrap: wrap;
        }
`
export const IconsWrap = styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    @media only screen and (min-width:${media.laptop}) and (max-width:${media.screen}) {
        width: 60%;
    }
    @media only screen and (max-width:${media.laptop}) {
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
    cursor: pointer;
    margin-right: ${space[8]}px;
    svg{
        font-size: 22px;
    }
`
export const RightWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    @media only screen and (max-width:${media.laptop}) {
        margin-top: ${space[10]}px;
        justify-content: space-around;
    }  
    @media only screen and (max-width:${media.mobileX}) {
        margin-top: ${space[10]}px;
        justify-content: space-between;
    }   
    @media only screen and (max-width:${media.mediumMobile}) {
            flex-wrap: wrap;
            justify-content: flex-start;
    }
    @media only screen and (max-width:${media.mediumMobile}) {
        display:block;
    }
`
export const FootDetail = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: ${fontSizes[1]}px;
    line-height: 20px;
    text-transform: capitalize;
    color: ${colors.white};
    margin-right: ${space[5]}px;
    margin-bottom: ${space[0]}px;
    user-select: none;
    @media only screen and (max-width:${media.laptop}) {
        font-size: ${fontSizes[0] + 2}px;
    }
    @media only screen and (max-width:${media.mediumMobile}) {
        margin-bottom: ${space[5]}px;
}
`
export const FootDetailBtn = styled.button`
    font-style: normal;
    font-weight: 500;
    font-size: ${fontSizes[1]}px;
    line-height: 20px;
    text-transform: capitalize;
    color: ${colors.white};
    margin-right: ${space[5]}px;
    padding: ${space[5]}px ${space[8]}px;
    border: 1px solid ${colors.white};
    border-radius: 42px;
    background:transparent;
    display:flex;
    align-items:center;
    justify-content:center;
    user-select: none;
    &:last-child{
        margin-right: ${space[0]}px;
    }
    @media only screen and (max-width:${media.laptop}) {
        font-size: ${fontSizes[0] + 2}px;
    }
    @media only screen and (max-width:${media.mediumMobile}) {
        margin-bottom: ${space[5]}px;
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
    @media only screen and (max-width:${media.mobileX}) {
            flex-wrap: wrap;
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
    user-select: none;
    color: ${colors.white};
    width: 100%;
`
export const ImgBox = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
     img{
         margin-right: ${space[5]}px;
         max-width:100%;
         &:last-child{
            margin-right: ${space[0]}px;
        }
     }
    @media only screen and (max-width:${media.mobileX}) {
        justify-content: space-evenly; 
    }
    @media only screen and (max-width:${media.smallMobile}) {
            max-width: 30%;
            justify-content: flex-start;
    }
`