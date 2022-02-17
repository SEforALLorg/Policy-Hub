import styled from 'styled-components'
import { colors, fontSizes,space} from '../../constant'
export const AccordionWrap = styled.div`
    background: ${colors.white};
    box-shadow: 0px 4.90168px 17.1559px rgba(0, 0, 0, 0.1);
    border-radius: 9.8px;
    width:100%;
    margin-bottom: ${space[3]}px;
`
export const Select = styled.div`
    display: flex;
    align-items: center;
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
    color: ${colors.lighttext};
    text-transform: capitalize;
`
export const Icon = styled.div`
  svg{
      font-size: ${fontSizes[3] + 2}px;
  }
`