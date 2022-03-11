import styled from "styled-components";
import { colors } from "../../constant";

export const TooltipWrap = styled.div`
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-left: 6px;
    .content{
        visibility: hidden;
        opacity: 0;
    }
    &:hover{
        .content{
            visibility: visible;
            opacity: 1;
            transition: all .2s;
        }
    }
`;

export const ContentWrap = styled.div`
    width: 230px;
    box-shadow: 0px 0px 8px -4px #000;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 30px;
    transform: translateX(-50%);
    background-color: ${colors.white};
    z-index: 999;
    padding: 9px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    &::after {
        content: "";
        position: absolute;
        top: -16px;
        left: 50%;
        margin-left: -5px;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent #dfdfdf transparent;
    }
`;
