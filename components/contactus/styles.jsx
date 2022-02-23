import styled from 'styled-components'
import { colors, fontSizes,space,fullWidth} from '../../constant'

export const FullCard = styled.div`
    Background: ${colors.white};
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    overflow:hidden;
`
export const Header = styled.div`
    Background: ${colors.white};
    padding: ${space[10] * 2}px;
    display:flex;
    align-item:center;
    justify-content: center;
`
export const AddressDetail = styled.div`
    display:flex;
    align-items:center;
    width:40%;
    svg{
        font-size: ${fontSizes[4] + 2}px;
        color: ${colors.primary};
        margin-right: ${space[8]}px;
    }
`
export const PhoneDetails = styled.div`
 
`
export const Title = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[2]  + 2}px;
    line-height: 26px;
    text-transform: capitalize;
    color: ${colors.lighttext};
     margin: ${space[0]}px;
`
export const Number = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[3]  + 1}px;
    line-height: 26px;
    color: ${colors.darktext};
    margin: ${space[0]}px;
`
export const InnerBody = styled.div`
    background: ${colors.lightBg};
    padding-top: ${space[10]}px;
    padding-bottom:${space[10] * 2}px;
    margin:auto;
`
export const AddressCard = styled.div`
    display:flex;
    justify-content: space-between;
    width: 80%;
    margin: auto;
`
export const BottomBody = styled.div`
    display:flex;
    align-items:flex-end;
    justify-content: space-between;
   padding: ${space[10] * 2}px ${space[10] * 3}px; 
`
export const Text = styled.p`
    color: ${colors.lighttext};
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[1]}px;
    line-height: 24px;
    text-transform: capitalize;
    margin: ${space[0]}px;
    &.text{
        margin-top: ${space[10] * 2}px;
        margin-bottom: ${space[10] * 3}px;
    }
    span{
        font-weight: 700;
        color: ${colors.darktext};
    }
`
export const BottomInfo = styled.div`
   width:${fullWidth};
`
export const FormWrapper = styled.div`
    width:${fullWidth};
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    justify-content: center;
`
export const Button = styled.div`
    width:288px;
    margin-top:10px;
`