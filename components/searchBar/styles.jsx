import styled from 'styled-components'
import { colors, fontSizes,space,fullWidth} from '/constant'

export const Wrap = styled.div` 
    margin-bottom: ${space[8]}px;
`
export const Input = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width${fullWidth}:;
    position:relative;
   input{
        font-style: normal;
        font-weight: 400;
        font-size: ${fontSizes[1] + 1}px;
        line-height: 21px;
        margin: ${space[0]}px;
        color: ${colors.lighttext};
        background: ${colors.white};
        box-shadow: 0px 4.90168px 17.1559px rgba(0, 0, 0, 0.1);
        border-radius: 50px;
        border:none;
        width:${fullWidth};
        height:50px;
        padding-left: ${space[10]}px;
        position:relative;
  }
`
export const Icon = styled.div`
    position:absolute;
    right: 20px;
  svg{
      color: ${colors.primary};
      font-size: ${fontSizes[3] + 2}px;
  }
`