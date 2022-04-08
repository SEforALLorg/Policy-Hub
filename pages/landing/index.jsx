import React, { useState } from "react";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import LandingPage from "components/landingPage";

const Landing = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false)
  return (
    <div>
      <div className="mobile:p-2.5 xsm:p-[5px]">
        <div className="custom-container mx-auto">
          <div className={`px-3 py-2 ${!isDashboardOpen ? 'header-title-wrap' : ''}`}>
            <Header />
          </div>
          <div>
            <LandingPage setIsDashboardOpen={setIsDashboardOpen} />
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
