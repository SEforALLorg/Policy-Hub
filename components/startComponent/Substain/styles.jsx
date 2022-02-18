import styled  from 'styled-components'
import {space} from "../../../constant/index"
export const FullWrap = styled.div`

`
export const TopWrap = styled.div`
    margin-top:  ${space[1] + 1}rem;
    margin-bottom: ${space[2]}rem;
    @media only screen and (min-width:1200px) and (max-width:1400px){
        margin-top:  ${space[1] - 1}rem;
    }
`
export const Bottom = styled.div`
     height: 100vh;
     display: flex;
`