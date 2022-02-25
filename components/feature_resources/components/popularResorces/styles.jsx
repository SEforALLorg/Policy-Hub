import styled from 'styled-components'
import { colors, fontSizes,space,fullWidth} from '../../../../constant'
export const Card= styled.div`
    background: ${colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7.3px;
    display:flex;
    overflow:hidden;
    width:${fullWidth};
    margin-bottom:${space[5]}px;
    img{
      max-width:${fullWidth};
    }
`
export const  Detail = styled.div`
  padding: ${space[10]}px ${space[8] - 1}px ${space[5] - 0.5}px ${space[6] + 0.5}px;
   .header{
    display:flex;
    justify-content: space-between;
  }
`
export const  Heading = styled.h6`
    font-style: normal;
    font-size: ${fontSizes[1]}px;
    font-weight: 700;
    line-height: 19px;
    color: ${colors.boldtext};
`