import styled from 'styled-components'
import { colors, fontSizes,space,fullWidth} from '../../../../constant'
export const Card= styled.div`
    background: ${colors.white};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 16px;
    overflow:hidden;
    width:${fullWidth};
    img{
      max-width:${fullWidth};
    }
`

export const Video = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position:relative;
  
`

export const ImgBox = styled.div`
width:100%;
  .videoPlayer{
    max-width: ${fullWidth};
    object-fit: fill;
  }
`
export const  Detail = styled.div`
  padding: ${space[10] - 5}px ${space[10]}px ${space[5] + 7}px ${space[10] + 2}px;
`
export const  Heading = styled.h6`
    font-style: normal;
    font-size: ${fontSizes[2]}px;
    font-weight: 700;
    line-height: 24px;
    text-transform: capitalize;
    color: ${colors.boldtext};
    margin-bottom: ${space[1]}px;
`
export const  Title = styled.p`
    font-style: normal;
    font-size: ${fontSizes[1]  - 2}px;
    font-weight: 400;
    line-height: 17px;
    color: ${colors.boldtext};
    margin-bottom: ${space[4]}px;
    text-transform: none;
`
export const LinkWrap = styled.div`
  span{
    font-style: normal;
    font-size: ${fontSizes[1]}px;
    font-weight: 400;
    line-height: 17px;
    color: ${colors.black};
    margin-bottom: ${space[4]}px;
    text-transform: uppercase;
  }
 
`
export const  Link= styled.a`
    font-style: normal;
    font-size: ${fontSizes[1]}px;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
    text-decoration:none;
    color: ${colors.primary};
`