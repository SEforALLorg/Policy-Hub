import styled from "styled-components";
import { colors } from "../../constant";

export const TooltipWrap = styled.div`
    display: inline-block;
    position: relative;
    cursor: pointer;
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
    width: 158px;
    height: 77px;
    box-shadow: 0px 0px 8px -4px #000;
    border-radius: 9px;
    position: absolute;
    left: 50%;
    top: 30px;
    transform: translateX(-50%);
    background-color: ${colors.white};
    z-index: 999;
    padding: 4px;
    font-size: 15px;
    font-weight: 400;
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
