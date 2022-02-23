import styled from 'styled-components'
import { colors, fontSizes,space} from '../../constant/index'
export const CheckWrap = styled.label`
.container {
    display: flex;
    align-items:center;
    position: relative;
    padding-left: ${space[10] + 10}px;
    margin-bottom: ${space[10] + 2}px;
    cursor: pointer;
    font-size: ${fontSizes[2] + 2}px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-radius: 2px;
    overflow:hidden;
}

.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 22px;
    width: 22px;
    background-color: #eee;
}

.container:hover input ~ .checkmark {
    background-color: #ccc;
}

.container input:checked ~ .checkmark {
        background-color: ${colors.background};
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.container input:checked ~ .checkmark:after {
    display: block;
}

.container .checkmark:after {
    left: 9px;
    top: 3px;
    width: 6px;
    height: 13px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

`
export const Label = styled.span`
    color: ${colors.lighttext};
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSizes[1]}px;
    line-height: 22px;
    text-transform: capitalize;
    margin: ${space[0]}px;
`