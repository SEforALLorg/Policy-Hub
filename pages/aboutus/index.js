import React from "react";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { Container } from "reactstrap";
import { Wrapper, FooterWrap, CardBox } from "styles/aboutus";
import About from "../../components/aboutus/About";
const AboutUs = () => {
  return (
    <main>
      <Wrapper>
        <Container fulid="md">
          <Header />
          <CardBox>
            <About />
          </CardBox>
          <FooterWrap>
            <Footer />
          </FooterWrap>
        </Container>
      </Wrapper>
    </main>
  );
};

export default AboutUs;
