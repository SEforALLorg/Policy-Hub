import styled from 'styled-components'
import { colors, fontSizes,space,fullWidth} from '../../../../constant'

export const Wrapper = styled.div`
    background: ${colors.white};
    box-shadow: 0px 4.90168px 17.1559px rgba(0, 0, 0, 0.1);
    border-radius: 7.3px;
    width:${fullWidth};
    margin-bottom: ${space[10]}px;
`
export const Detail = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: ${space[6]}px;
    width:${fullWidth};
`
export const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: ${space[9]}px;
    img{
        width:${fullWidth};
        margin-right: ${space[9]}px;
    }
`
export const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[0] + 2}px;
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
    border-bottom: 2.4px solid rgba(134, 164, 176, 0.15);
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