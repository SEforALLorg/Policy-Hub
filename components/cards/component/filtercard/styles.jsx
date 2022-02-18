import styled from 'styled-components'
import { colors, fontSizes,space} from '../../../../constant'

export const Wrapper = styled.div`
    background: ${colors.white};
    box-shadow: 0px 4.90168px 17.1559px rgba(0, 0, 0, 0.1);
    border-radius: 7.3px;
    width:100%;
    margin-bottom: ${space[4]}px;
`
export const Detail = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: ${space[6]}px;
    width:100%;
`
export const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[1] + 1}px;
    line-height: 21px;
    margin: ${space[0]}px;
    color: ${colors.text};
    text-transform: capitalize;

`
export const Icon = styled.div`
  svg{
      font-size: ${fontSizes[3] + 2}px;
      color: ${colors.secondary}
  }
`
export const Border = styled.div`
    border: 2.4px solid rgba(134, 164, 176, 0.15);
`
export const BottomWrap = styled.div`
    display: flex;
    padding: ${space[6]}px;
`
export const Box= styled.div`
    display: flex;
    align-items: center;
    img{
        margin-right: ${space[4]}px;
    }
    &:after{
        content:'';
        border-left: 3px solid rgba(134, 164, 176, 0.15);
        width: 3px;
        height: 20px;
        margin: 0px ${space[10]}px;
    }
    &:last-child:after{
        border-left: none;  
    }
`