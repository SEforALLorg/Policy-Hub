import React from 'react';
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { Container } from "reactstrap";
import { Wrapper, CardBox, FooterWrap } from "styles/resources";
import Feature from 'components/feature_resources';
const FeatureResources = () => {
    return (
        <Wrapper>
            <Container fulid="md">
                <Header />
                <CardBox>
                    <Feature/>
                </CardBox>
                <FooterWrap>
                    <Footer />
                </FooterWrap>
            </Container>
        </Wrapper>
    );
};

export default FeatureResources;