import styled from 'styled-components'
import { colors, fontSizes, space } from '../../../constant'

export const Wrapper = styled.div`
    width: 100%;
    background-color: #fff;
    background: ${colors.white};
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: ${space[10] * 2}px;
`

export const Title = styled.h5`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[6] + 6}px;
    line-height: 72.4px;
    text-align: center;
    text-transform: uppercase;
    color: ${colors.text};
    text-align: center;
    padding-bottom: ${space[5]}px;
`
export const Span = styled.span`
    color: ${colors.secondary};
    padding-left: ${space[3]}px;
`
export const PrimarySpan = styled.span`
    color: ${colors.primary};
    padding-left: ${space[3]}px;
 `
export const SubTitle = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[2] + 2}px;
    line-height: 26px;
    text-align: center;
    text-transform: capitalize;
    color: ${colors.text};
`
export const Icon = styled.span`
   svg{
    font-size: 44px;
    display: block;
    margin: auto;
    color: #13a2bc;
   }
`