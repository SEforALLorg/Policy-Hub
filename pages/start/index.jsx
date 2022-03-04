import React from "react";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { Container } from "reactstrap";
import { Wrapper, StartCards, FooterWrap } from "styles/start";
import StartSubstain from "../../components/startComponent/Substain";
import Dashboard from "../../components/dashboard/dashboard";

const Start = () => {
  return (
    <Wrapper style={{backgroundImage: `url(static/images/BG.png)`}}>
      <Container fulid="md">
        <Header />
        <StartCards>
          <StartSubstain />
        </StartCards>
        <Dashboard />
        <FooterWrap>
          <Footer />
        </FooterWrap>
      </Container>
    </Wrapper>
  );
};
export default Start;
