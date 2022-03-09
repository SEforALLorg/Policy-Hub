import React from "react";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import About from "../../components/aboutus/About";

const AboutUs = () => {
  return (
    <main>
      <div className='mobile:p-2.5 xsm:p-[5px]'>
        <div className='custom-container mx-auto'>
          <div className='px-3 py-2'>
            <Header />
          </div>
          <div className='xsm:my-4 6xl:my-12 '>
            <About />
          </div>
          <div className='w-full pt-10'>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
