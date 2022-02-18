import styled from 'styled-components'
import { colors, fontSizes,space} from '../../constant'

export const Wrapper = styled.div`
  width:100%;
`
export const Card= styled.div`
    background: ${colors.white};
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: ${space[10] * 2}px;
    display:flex;
    justify-content: space-between;
`
export const ImgWrap = styled.div`
   width: 40%;
   img{
       max-width: 100%;
   }
`
export const Detail = styled.div`
   width: 100%;
`
export const Heading = styled.h5`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[5]  - 3}px
    line-height: 46px;
    text-transform: uppercase;
    color: ${colors.darktext}
`
export const SubTitle = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25.3px;
    text-transform: capitalize;
    color: ${colors.lighttext};
    margin-bottom: ${space[10]}px;
    span{
        display:block;
        font-weight: 700;
        color: ${colors.primary} 
    }
`
export const BottomCard = styled.div`
    background: ${colors.lightbg};
    padding: ${space[10] * 2}px;
`
export const SubHeading = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[2]  + 2}px;
    line-height: 26px;
    text-align:center;
    text-transform: capitalize;
    color: ${colors.darktext}
`   
export const ImgContainer = styled.div`
   width: 100%;
   display:flex;
   justify-content: space-between;
   margin: ${space[10] * 2}px 0px;
`