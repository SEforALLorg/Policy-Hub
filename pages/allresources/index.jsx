import React from "react";
import Head from "next/head";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { Container } from "reactstrap";
import { Wrapper, FooterWrap, CardBox } from "styles/resources";
import ALLReports from "../../components/resources";

const Resources = () => {
  return (
    <main>
       <Head>
        <title>Sustainable Energy for All | Knowledge Hub | All Resources</title>
      </Head>
      <Wrapper>
        <Container fulid="md">
          <Header />
          <CardBox>
            <ALLReports />
          </CardBox>
          <FooterWrap>
            <Footer />
          </FooterWrap>
        </Container>
      </Wrapper>
    </main>
  );
};

export default Resources;
