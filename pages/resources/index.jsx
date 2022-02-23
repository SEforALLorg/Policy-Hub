import React from 'react';
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { Container } from "reactstrap";
import { Wrapper,  FooterWrap ,CardBox} from "styles/resources";
import ResouceStep from '../../components/resources';
const Resources = () => {
    return (
        <Wrapper>
        <Container fulid="md">
            <Header />
            <CardBox>
                <ResouceStep/>
            </CardBox>
          <FooterWrap>
            <Footer />
          </FooterWrap>
        </Container>
      </Wrapper>
    );
};

export default Resources;