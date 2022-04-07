import React from "react";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import LandingPage from "components/landingPage";

const Landing = () => {
  return (
    <div>
      <div className="mobile:p-2.5 xsm:p-[5px]">
        <div className="custom-container mx-auto">
          <div className="px-3 py-2 fixed w-[100%] left-[0px] header-title-wrap">
            <Header />
          </div>
          <div>
            <LandingPage />
          </div>
          <div className='pt-[40px]'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
