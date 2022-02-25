import styled from 'styled-components'
import { colors, fontSizes, media, space, fullWidth } from '../../constant'

export const Wrapper = styled.div`
    margin-top: 10rem;
`
export const FooterWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${fullWidth};
    @media only screen and (max-width:${media.tabletX}) {
            flex-wrap: wrap;
    }
    @media only screen and (max-width:${media.mobile}) {
            justify-content: center;
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
    width: ${fullWidth};
    align-items: center;
    @media only screen and (max-width:${media.laptop}) {
        justify-content: space-around;
    }  
    @media only screen and (max-width:${media.tabletX}) {
        margin-top: ${space[10]}px;
        justify-content: space-between;
    }   
    @media only screen and (max-width:${media.mediumMobile}) {
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    @media only screen and (max-width:${media.mobile}) {
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
    @media only screen and (max-width:${media.mobile}) {
        margin-bottom: ${space[5]}px;
        text-align:center;
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
    @media only screen and (max-width:${media.mobile}) {
        width: ${fullWidth};
        margin-bottom: ${space[5]}px;
    }
`
export const Border = styled.div`
    border-bottom: 1.6px solid ${colors.white};
    margin:${space[7] + 1}px 0px;
    width: ${fullWidth};
`
export const BottomWrap = styled.div`
    display: flex;
    width: ${fullWidth};
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width:${media.tabletX}) {
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
    width: ${fullWidth};
    @media only screen and (max-width:${media.mobile}) {
        text-align: center;
    }
`
export const ImgBox = styled.div`
    display: flex;
    width: ${fullWidth};
    align-items: center;
    justify-content: flex-end;
     img{
         margin-right: ${space[10] + 10}px;
         max-width:${fullWidth};
         &:last-child{
            margin-right: ${space[0]}px;
        }
     }
    @media only screen and (max-width:${media.tabletX}) {
        justify-content: space-evenly; 
    }
    @media only screen and (max-width:${media.smallMobile}) {
            max-width: 30%;
            justify-content: flex-start;
    }
`