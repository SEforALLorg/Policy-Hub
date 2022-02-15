import React from "react";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { Container } from "reactstrap";
import Customize from "components/startComponent/customize";
import { Wrapper, HeaderWrap, StartCards, FooterWrap } from "styles/start";
import StartSubstain from "../../components/startComponent/Substain";

const Start = () => (
  <Wrapper>
    <Container fulid="md">
      <HeaderWrap>
        <Header />
        <StartCards>
          <StartSubstain />
        </StartCards>
        <Customize />
      </HeaderWrap>
      <FooterWrap>
        <Footer />
      </FooterWrap>
    </Container>
  </Wrapper>
);

export default Start;
