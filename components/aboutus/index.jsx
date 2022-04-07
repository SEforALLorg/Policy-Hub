import React from "react";
import ImgCard from "components/cards/imgCard";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Sustainable Energy for All | Knowledge Hub | About</title>
      </Head>
      <div className=" rounded-lg overflow-hidden shadow-md">
        <div className="bg-white xsm:p-5 small:p-10 flex justify-between items-center xsm:flex-wrap xsm:justify-center medium:flex-nowrap dropShadow">
          <div className="w-full pr-[30px]">
            <h5 className="font-bold text-large xsm:text-medium mobile:text-xmd laptop:text-large leading-[46px] uppercase text-darktext mb-2">
              About us
            </h5>
            <p className="not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4 text-justify">
              <b>Sustainable Energy for All (SEforALL)</b> is an international
              organization that works in partnership with the United Nations and
              leaders in government, the private sector, financial institutions,
              civil society, and philanthropies to drive faster action towards
              the achievement of Sustainable Development Goal 7 (SDG7) – access
              to affordable, reliable, sustainable, and modern energy for all by
              2030 – in line with the Paris Agreement on climate. To learn more
              about SEforALL,{" "}
              <span
                className="text-Primary hover:underline cursor-pointer"
                onClick={() => window.open("https://www.seforall.org/")}
              >
                click here
              </span>
              .
            </p>
            <p className="not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4 text-justify">
              The <b>Sustainable Energy for All Knowledge Hub</b> is an
              interactive platform providing sustainable energy policy makers
              and practitioners with off-the-shelf guidelines, tools, templates
              and cases on energy policy and regulation published by
              international organizations and thought leaders. In its first
              phase, the knowledge hub offers key resources on electricity
              access.
            </p>
            <p className="break-words not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4 text-justify">
              Further resources to support electrification efforts can be found
              at{" "}
              <span
                className="text-Primary hover:underline cursor-pointer"
                onClick={() =>
                  window.open("https://www.electrifyingeconomies.org/")
                }
              >
                electrifyingeconomies.org.
              </span>
            </p>
            <p className="not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4 text-justify">
              Additional pillars of sustainable energy (access to clean cooking,
              sustainable cooling, energy efficiency and renewable energy) will
              be added soon.
            </p>
          </div>
          <div className="xsm:mr-0 xsm:mb-4 med:mb-0 med:mr-10 w-[300px] about-logo">
            <img
              className="max-w-full"
              src={"static/images/SEforALL_Logo_Colour.png"}
              alt="flag"
            />
          </div>
        </div>
        <div className="bg-lightBg xsm:p-5 small:p-10 dropShadow">
          <p className="not-italic font-bold text-medium  xsm:text-small xsm:text-tiny med:text-medium leading-6 text-left text-medium text-darktext">
            {" "}
            Sustainable Energy for All Knowledge Hub is financed by{" "}
          </p>
          <div className="w-100 flex justify-between xsm:mt-2 xsm:pb-6 small:my-10 xsm:flex-wrap med:flex-nowrap">
            <div className="med:w-[49%]  xsm:w-full ">
              <ImgCard
                className="h-[236px] bg-white shadow-md rounded-2xl p-5 mb-4 flex justify-center imgbox items-center w-full cursor-pointer"
                img={"static/images/rockfound.svg"}
                title={"The Rockefeller Foundation"}
                link={"https://www.rockefellerfoundation.org/"}
              />
            </div>
            <div className="med:w-[49%] xsm:w-full  xsm:mt-5 med:mt-0">
              <div
                className="cursor-pointer h-[236px] bg-white shadow-md rounded-2xl p-5 mb-4 flex justify-center imgbox	items-center w-full"
                onClick={() =>
                  window.open("https://www.esteri.it/en/ministero/")
                }
              >
                <img
                  src={"/static/images/dgcs_rettangolare_eng.jpg"}
                  alt="star"
                  className="xsm:mt-4 small:mt-0 xsm:m-auto small:m-0 cursor-pointer"
                  width={500}
                />
              </div>
              <a
                className="text-anqrtext no-underline not-italic	font-normal	xsm:text-xsmall small:text-tiny leading-5 text-center block"
                href={"https://www.esteri.it/en/ministero/"}
                target={"_blank"}
              >
                Ministry of Foreign Affairs of Italy
              </a>
            </div>
          </div>
          <p className="not-italic font-bold text-medium xsm:text-small xsm:text-tiny med:text-medium leading-6 text-left text-medium text-darktext">
            {" "}
            Sustainable Energy for All Knowledge Hub partners include, but are
            not limited to:{" "}
          </p>
          <div className="w-100 flex justify-between xsm:mt-2 small:my-10 xsm:flex-wrap med:flex-nowrap">
            <div className="med:w-[24%] xsm:w-100  xsm:w-full ">
              <ImgCard
                className="h-[165px] bg-white shadow-md rounded-2xl p-5 mb-4 flex justify-center	items-center w-full"
                img={"static/images/Era.svg"}
                title={"International Renewable Energy Agency"}
                link={"https://www.irena.org/"}
              />
            </div>
            <div className="med:w-[24%] xsm:w-100 xsm:mt-5 med:mt-0  xsm:w-full ">
              <ImgCard
                className="h-[165px] bg-white shadow-md rounded-2xl p-5 mb-4 flex justify-center	items-center w-full"
                img={"static/images/worldbank.svg"}
                title={"The World Bank"}
                link={"https://www.worldbank.org/en/home"}
              />
            </div>
            <div className="med:w-[24%] xsm:w-100 xsm:mt-5 med:mt-0  xsm:w-full ">
              <ImgCard
                className="h-[165px] bg-white shadow-md rounded-2xl p-5 mb-4 flex justify-center	items-center w-full"
                img={"static/images/esmap.svg"}
                title={"Energy Sector Management Assistance Program"}
                link={"https://www.esmap.org/"}
              />
            </div>
            <div className="med:w-[24%] xsm:w-100 xsm:mt-5 med:mt-0  xsm:w-full ">
              <ImgCard
                className="h-[165px] bg-white shadow-md rounded-2xl p-5 mb-4 flex justify-center	items-center w-full"
                img={"static/images/giz.svg"}
                title={
                  "Deutsche Gesellschaft für Internationale Zusammenarbeit"
                }
                link={"https://www.giz.de/en/html/index.html"}
              />
            </div>
          </div>
        </div>
        <div className="bg-white pt-10 pb-14 px-16 xsm:px-7 mobile:px-10 laptop:px-16">
          <p className="not-italic font-normal  xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-6 xsm:leading-[15.3px] xsm:leading-[20.3px] laptop:leading-[25.3px] text-text mb-base mb-4">
          <b> Many individuals and organizations contributed in many different
            ways to the creation of the Sustainable Energy for All Knowledge
            Hub, and we are most grateful for their efforts.</b>
          </p>
          <p className="font-bold text-text mb-[3px] text-[20px]">Curators:</p>
          <p className="not-italic font-normal  xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-6 xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4">
            <b>Hadley Taylor</b>, <b>Min Hyejung</b>, <b>Niklas Hayek</b>, <b>Anant Wadhwa</b>, and <b>Stephen
            Kent</b> led the content creation and review on behalf of Sustainable
            Energy for All (SEforALL).
          </p>
          <p className="font-bold text-text mb-[3px] text-[20px]">
            Developers:
          </p>
          <p className="not-italic font-normal  xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-6 xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4">
            The website was designed and developed by  <span
                className="text-Primary hover:underline cursor-pointer"
                onClick={() =>
                  window.open("https://www.keymouseit.com/")
                }
              >KeyMouse IT Services Pvt. Ltd</span>.
             based in India. <b>KeyMouse IT</b> has significant depth of expertise
            and experience in delivering web & mobile based technology solutions
            to its clients across various verticals.
          </p>
          <p className="font-bold text-text mb-[3px] text-[20px]">
            Contributors:
          </p>
          <p className="not-italic font-normal  xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-6 xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4">
            We also thank the following individuals for their consultation and
            participation:
          </p>
          <p className="not-italic font-normal  xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-6 xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base">
            The organizations highlighted in the resources were all generous
            with their time, providing detailed information and reviewing draft
            versions. Any errors remaining are the responsibility of the website
            authors.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
