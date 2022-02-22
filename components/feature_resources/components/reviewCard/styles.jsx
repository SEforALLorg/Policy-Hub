import styled from 'styled-components'
import { colors, fontSizes,space} from '../../../../constant'
export const Card= styled.div`
    background: ${colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7.3px;
    display:flex;
    overflow:hidden;
    width:100%;
    img{
      max-width:100%;
    }
`
export const Icon = styled.div`
  svg{
      font-size: ${fontSizes[3] + 2}px;
      color: ${colors.secondary}
  }
`

export const  Detail = styled.div`
  padding: ${space[7]}px ${space[5] - 0.3}px ${space[4] - 0.5}px ${space[6] + 0.5}px;
   .header{
    display:flex;
    justify-content: space-between;
  }
`
export const  Heading = styled.div`
    font-style: normal;
    font-size: ${fontSizes[1]  - 2}px;
    font-weight: 700;
    line-height: 17px;
    color: ${colors.boldtext};
    margin-bottom: ${space[2] + 1}
`
export const  SubTitle = styled.div`
  font-style: normal;
  font-size: ${fontSizes[1]  - 2}px;
  font-weight: 400;
  line-height: 17px;
  color: ${colors.boldtext};
  margin-bottom: ${space[2] + 1}px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
export const  Bottom = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  button{
    color: ${colors.primary};
    font-size: ${fontSizes[1]}px;
    text-transform: capitalize;
    font-weight: 400;
    line-height: 19px;
    width: 118px;
    height: 26.5px;
  }
`