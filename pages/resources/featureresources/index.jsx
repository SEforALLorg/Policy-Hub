import React from 'react';
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { Container } from "reactstrap";
import { Wrapper, StartCards, FooterWrap } from "styles/start";
import Feature from 'components/feature_resources';
const FeatureResources = () => {
    return (
        <Wrapper>
            <Container fulid="md">
                <Header />
                <StartCards>
                    <Feature/>
                </StartCards>
                <FooterWrap>
                    <Footer />
                </FooterWrap>
            </Container>
        </Wrapper>
    );
};

export default FeatureResources;