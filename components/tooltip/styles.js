import styled from "styled-components";
import { colors } from "../../constant";

export const TooltipWrap = styled.div`
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-left: 3px;
    vertical-align: middle;
    margin-top: -5px;
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
    svg{
        font-size: 17px;
    }
`;

export const ContentWrap = styled.div`
    width: 290px;
    box-shadow: 0px 0px 8px -4px #000;
    position: absolute;
    left: 50%;
    top: 30px;
    transform: translateX(-50%);
    background: #065A89;
    border-radius: 3.83823px;
    z-index: 999;
    padding: 9px;
    font-size: 14px;
    color: ${colors.white};
    font-weight: 400;
    line-height: 20px;
    filter: drop-shadow(5px 5px 12px rgba(31, 99, 148, 0.25));
    &::after {
        content: "";
        position: absolute;
        top: -16px;
        left: 50%;
        margin-left: -5px;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent #065A89 transparent;
    }
`;
