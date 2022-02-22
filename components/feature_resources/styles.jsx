import styled from 'styled-components'
import { colors, fontSizes, space } from '../../constant'

export const FullWrapper = styled.div`
  width:100%;
  border-radius: 8px;
  overflow: hidden;
`
export const Wrapper = styled.div`
  padding: 0px ${space[10] * 5}px;
`
export const TopWrapper = styled.div`
    background: ${colors.white};
    padding:  ${space[10] + 4}px 0px ${space[10] + 3}px 0px;
    box-shadow: 0px 4px 4px rgba(64, 93, 109, 0.15);
`
export const Heading = styled.h3`
    font-style: normal;
    font-weight: bold;
    font-size: ${fontSizes[5] - 3}px;
    line-height: 46px;
    text-transform: uppercase;
    margin: ${space[0]}px;
    color: ${colors.primary};
`
export const ReportCard = styled.div`
    display:flex;
    margin: ${space[10] + 5}px 0px;
`
export const ReportImg = styled.div`
   margin-right: ${space[10]}px;
`
export const Detail = styled.div`
   width: 100%;
`
export const ReportHeading = styled.h5`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[4] + 1}px;
    line-height: 40px;
    text-transform: capitalize;
    color: ${colors.boldtext};
    margin-bottom: ${space[10] + 3}px;
`
export const ReportSubTitle = styled.p`
    font-style: normal;
    font-size: ${fontSizes[1] - 1}px;
    font-weight: 400;
    line-height: 18px;
    color: ${colors.boldtext};
    margin: ${space[0]}px;
`
export const GoButton = styled.div`
   margin-top: ${space[10] + 9}px;
    button{
        width: 183px;
        line-height: 19px;
        text-transform: capitalize;
        font-weight: 700;
        height: 32px;
        display: block;
        margin:auto;
    }
`
export const ReviewWrap = styled.div`
    padding-top: ${space[10] + 5}px;
    border-top: 2.4px solid rgba(134, 164, 176, 0.25); 
    display:flex;
    justify-content: space-between;
    .cards{
       margin-right:${space[10]}px;

    }
`
export const BrowserBtn = styled.div`
        button{
            font-weight:700;
            height:70px;
            width: 420px;
            font-size: ${fontSizes[3] + 4}px;
   }

`
export const InnerWrap = styled.div`
    background: ${colors.lightbg};
    padding: ${space[10] * 3}px 0px;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
`
export const ResourceContent = styled.div`
     width:49%;
     button{
         margin:auto;
         display:block;
     }
`
export const ResourcesWrap = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
`
export const ResourceHeading = styled.h3`
    font-style: normal;
    font-weight: bold;
    font-size: ${fontSizes[3] + 4}px;
    line-height: 28px;
    text-transform: uppercase;
    margin-bottom: ${space[10] + 7}px;
    color: ${colors.primary};
    text-align: center;
`