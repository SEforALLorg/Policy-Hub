import styled from 'styled-components'
import { colors, fontSizes,space,fullWidth} from '../../constant'

export const Wrapper = styled.div`
  width: ${fullWidth};
  border-radius: 8px;
  overflow: hidden;
`
export const Card= styled.div`
    background: ${colors.white};
    filter: drop-shadow(0px 4px 4px rgba(64, 93, 109, 0.15));
    padding: ${space[10] * 2}px;
    display:flex;
    justify-content: space-between;
`
export const ImgWrap = styled.div`
   width: 40%;
   img{
       max-width: ${fullWidth};
   }
`
export const Detail = styled.div`
   width: fullWidth;
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
    color: ${colors.lighttext};
    margin-bottom: ${space[10]}px;
    span{
        display:block;
        font-weight: 700;
        color: ${colors.primary} 
    }
`
export const BottomCard = styled.div`
    background: ${colors.lightBg};
    padding: ${space[10] * 2}px;
    filter: drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.25));
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
   width: ${fullWidth};
   display:flex;
   justify-content: space-between;
   margin: ${space[10] * 2}px 0px;
`
export const Box = styled.div`
   width: 49%;
`
export const BottomBox = styled.div`
   width: 24%;
`
export const FootBody = styled.div`
     background: ${colors.white};
     padding:  ${space[10] + 4}px  ${space[10] * 3}px;
`