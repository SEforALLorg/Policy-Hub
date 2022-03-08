import React from "react";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { Container } from "reactstrap";
import { Wrapper, FooterWrap, CardBox } from "styles/contactus";
import ContactBox from "../../components/contactus";
const ContactUs = () => {
  return (
    <main>
      <Wrapper>
        <Container fulid="md">
          <Header />
          <CardBox>
            <ContactBox />
          </CardBox>
          <FooterWrap>
            <Footer />
          </FooterWrap>
        </Container>
      </Wrapper>
    </main>
  );
};

export default ContactUs;
