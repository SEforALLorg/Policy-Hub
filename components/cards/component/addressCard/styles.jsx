import styled from 'styled-components'
import { colors, fontSizes,space,fullWidth} from '../../../../constant'

export const AddressWrap = styled.div`
    background: ${colors.white};
    border-radius: 7.3px;
    padding: ${space[10]}px;
    width:${fullWidth};
`
export const Title= styled.p`
    color: ${colors.darktext};
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[2] + 1}px;
    line-height: 30px;
    margin-bottom: ${space[5]}px;
`
export const Text= styled.p`
    color: ${colors.lighttext};
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[1]}px;
    line-height: 24px;
    margin: ${space[0]}px;
  
`
