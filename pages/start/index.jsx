import React from "react";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { Container } from "reactstrap";
import { Wrapper, StartCards, FooterWrap } from "styles/start";
import StartSubstain from "../../components/startComponent/Substain";
import Dashboard from "../../components/dashboard/dashboard";

const Start = () => {
  return (
    <Wrapper>
      <div className="mobile:p-2.5 xsm:p-[5px]">
        <div className="custom-container mx-auto">
          <div className="px-3 py-2">
            <Header />
          </div>
          <StartCards>
            <StartSubstain />
          </StartCards>
          <Dashboard />
          <FooterWrap>
            <Footer />
          </FooterWrap>
        </div>
      </div>
    </Wrapper>
  );
};
export default Start;
