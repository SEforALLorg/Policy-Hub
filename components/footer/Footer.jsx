import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import {
    Wrapper,
    FooterWrap,
    IconsWrap,
    Icons,
    RightWrap,
    FootDetail,
    Border,
    BottomWrap,
    CopyRight,
    ImgBox,
    FootDetailBtn
} from "./styles";
const Footer = () => {
    return (
        <Wrapper>
            <FooterWrap>
                <IconsWrap>
                    <Icons>
                        <FaFacebookF />
                    </Icons>
                    <Icons>
                        <BsTwitter />
                    </Icons>
                    <Icons>
                        <FaLinkedinIn />
                    </Icons>
                    <Icons>
                        <FaInstagram />
                    </Icons>
                    <Icons>
                        <FaYoutube />
                    </Icons>
                </IconsWrap>
                <RightWrap>
                    <FootDetail>
                        Powered by sustainable energy for all
                    </FootDetail>
                    <FootDetailBtn>
                        View resources
                    </FootDetailBtn>
                    <FootDetailBtn>
                     Download decision tree
                    </FootDetailBtn>
                </RightWrap>
            </FooterWrap>
            <Border></Border>
            <BottomWrap>
                <CopyRight>
                    Copyright 2022 sustainable energy for all
                </CopyRight>
                <ImgBox>
                    <img src={"/static/images/setall.svg"} alt="all" />
                    <img src={"/static/images/founder.svg"} alt="founder" />
                    <img src={"/static/images/star.svg"} alt="star" />
                </ImgBox>
            </BottomWrap>
        </Wrapper>
    );
};

export default Footer;