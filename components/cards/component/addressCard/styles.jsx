import styled from 'styled-components'
import { colors, fontSizes,space} from '../../../../constant'

export const AddressWrap = styled.div`
    background: ${colors.white};
    border-radius: 7.3px;
    padding: ${space[10]}px;
    width:100%;
`
export const Title= styled.p`
    color: ${colors.darktext};
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[3] + 1}px;
    line-height: 30px;
    text-transform: capitalize;
`
export const Text= styled.p`
    color: ${colors.lighttext};
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[2]}px;
    line-height: 24px;
    text-transform: capitalize;
    margin: ${space[0]}px;
  
`
