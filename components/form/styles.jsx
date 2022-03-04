import styled from 'styled-components'
import { colors, fontSizes,space,fullWidth} from '../../constant/index'

export const FormWrap = styled.div`
  display:flex;
  align-items:center;
  margin-bottom: ${space[5]}px;
  input{
    background: ${colors.white};
    box-shadow: 0px 4.90134px 17.1547px rgba(0, 0, 0, 0.1);
    border-radius: 9.8px;
    border:none;
    outline:none;
    height:50px;
    padding: ${space[10]}px;
    color: ${colors.lighttext};
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[1]}px;
    line-height: 21px;
    width:${fullWidth};
  }
`
export const FieldTitle = styled.p`
    color: ${colors.text};
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[2]}px;
    line-height: 29px;
    margin-right: ${space[10] + 5}px;
    margin-bottom: ${space[0]}px;
`
