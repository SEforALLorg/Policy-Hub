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
            <h5 className="cardBigHeading font-normal font-bold	text-[65px] leading-[70px] text-center	select-none	uppercase text-white	pb-[15px] mt-[2rem] sticky top-[11rem] left-[0px]">
          Sustainable
          <span className="text-Secondary px-[6px]"> Energy </span>
          for All <br />
          <span className="text-Primary pl-[6px]"> Knowledge</span> Hub
        </h5>
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
