import styled ,{ keyframes } from 'styled-components'
import { colors, fontSizes, space } from '../../../../constant'
import { fadeOutDown } from 'react-animations';
const fadeOutDownAnimation = keyframes`${fadeOutDown}`;

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
`
export const Card = styled.div`
    width: 100%;
    background: ${colors.white};
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: ${space[10] * 2}px ${space[10] * 3}px;
    position: relative;
`

export const Title = styled.h5`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[6] + 6}px;
    line-height: 72.4px;
    text-align: center;
    user-select: none;
    text-transform: uppercase;
    color: ${colors.text};
    text-align: center;
    padding-bottom: ${space[5]}px;
`
export const Span = styled.span`
    color: ${colors.secondary};
    padding: 0px ${space[3]}px;
`
export const PrimarySpan = styled.span`
    color: ${colors.primary};
    padding-left: ${space[3]}px;
 `
export const SubTitle = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[5] - 3}px;
    line-height: 54px;
    text-transform: capitalize;
    user-select: none;
    color: ${colors.text};
    margin: ${space[0]}px;
    width: 100%;
    span{
        font-weight: 700;
    }
`
export const ScrollText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[5] - 2}px;
    line-height: 48px;
    text-align: center;
    user-select: none;
    color: ${colors.text};
    text-align: center;
    margin: ${space[0]}px;
    @media only screen and (min-width:1200px) and (max-width:1399px){
        font-size: ${fontSizes[4]}px;
        line-height: 40px;
    }
`
export const Icon = styled.div`
    display:flex;
    align-items:center;
    flex-direction: column;
    position: fixed;
    z-index: 99;
    bottom: 30px;
    animation: 6s ${fadeOutDownAnimation};
   svg{
    font-size: ${fontSizes[5] + 7}px;
    color: #13a2bc;
    cursor: pointer;
   }
`

export const Point = styled.div`
    border-left: 17px solid ${colors.primary};  
     
`
export const Step = styled.div`
    display:flex;
    align-items:center;
    gap:20px;
    justify-content: space-between;
    padding: ${space[10] * 3}px 0px;
    width:100%;
`
export const Box = styled.div`
   border-bottom: 2.4px solid rgba(134, 164, 176, 0.25);
   &:last-child{
    border-bottom:none;
   }
   img{
    max-width: 100%;
}  
`
export const  BottomBtn = styled.div`
    width:50%;
    position: absolute;
    bottom: -44px;
`