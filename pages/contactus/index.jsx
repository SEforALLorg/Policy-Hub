import React from "react";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import ContactBox from "../../components/contactus";

const ContactUs = () => {
  return (
    <main>
      <div className='mobile:p-2.5 xsm:p-[5px]'>
        <div className='custom-container mx-auto'>
          <div className='px-3 py-2'>
            <Header />
          </div>
          <div className='xsm:my-4 6xl:my-12'>
            <ContactBox />
          </div>
          <div className='w-full m-auto	pt-10'>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
