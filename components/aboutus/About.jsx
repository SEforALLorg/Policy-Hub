import React from "react";
import ImgCard from "../cards/component/imgCard";

const About = () => {
  return (
    <>
      <div className=" rounded-lg overflow-hidden shadow-md">
        <div className="bg-white xsm:p-5 small:p-10 flex justify-between items-center xsm:flex-wrap xsm:justify-center medium:flex-nowrap dropShadow">
          <div className="xsm:mr-0 xsm:mb-4 med:mb-0 med:mr-10 xsm:w-[30%] medium:w-max">
            <img
              className="max-w-full"
              src={"static/images/substain.svg"}
              alt="flag"
            />
          </div>
          <div className="w-full">
            <h5 className="font-bold text-large xsm:text-medium mobile:text-xmd laptop:text-large leading-[46px] uppercase text-darktext mb-2">
              About us
            </h5>
            <p className="not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4">
              The Sustainable Energy for All Knowledge Hub is an interactive
              platform providing sustainable energy policy makers and
              practitioners with off-the-shelf guidelines, tools, templates and
              cases on energy policy and regulation published by international
              organizations and thought leaders. In its first phase, the
              knowledge hub offers key resources on electricity access.
            </p>
            <p className="break-words not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4">
              Further resources to support electrification efforts can be found
              at{" "}
              <span className="text-Primary underline">
                electrifyingeconomies.org.
              </span>
            </p>
            <p className="not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4 ">
              Additional pillars of sustainable energy (access to clean cooking,
              sustainable cooling, energy efficiency and renewable energy) will
              be added soon.
            </p>
          </div>
        </div>
        <div className="bg-lightBg xsm:p-5 small:p-10 dropShadow">
          <p className="not-italic font-bold text-medium  xsm:text-small xsm:text-tiny med:text-medium leading-6 text-center text-medium text-darktext">
            {" "}
            The knowledge hub is financed by{" "}
          </p>
          <div className="w-100 flex justify-between xsm:mt-2 xsm:pb-6 small:my-10 xsm:flex-wrap med:flex-nowrap">
            <div className="med:w-[49%]  xsm:w-full ">
              <ImgCard
                className="h-[236px] bg-white shadow-md rounded-2xl p-5 mb-4 flex justify-center imgbox items-center w-full"
                img={"static/images/rockfound.svg"}
                title={"Rockefeller Foundation"}
              />
            </div>
            <div className="med:w-[49%] xsm:w-full  xsm:mt-5 med:mt-0">
              <ImgCard
                className="h-[236px] bg-white shadow-md rounded-2xl p-5 mb-4 flex justify-center imgbox	items-center w-full"
                img={"static/images/farnesina.svg"}
                title={"Ministry of Foreign Affairs of Italy"}
              />
            </div>
          </div>
          <p className="not-italic font-bold text-medium xsm:text-small xsm:text-tiny med:text-medium leading-6 text-center text-medium text-darktext">
            {" "}
            The knowledge hub partners include but not limited to{" "}
          </p>
          <div className="w-100 flex justify-between xsm:mt-2 small:my-10 xsm:flex-wrap med:flex-nowrap">
            <div className="med:w-[24%] xsm:w-100  xsm:w-full ">
              <ImgCard
                className="h-[165px] bg-white shadow-md rounded-2xl p-5 mb-4 flex justify-center	items-center w-full"
                img={"static/images/Era.svg"}
                title={"International RenewableEnergy Agency"}
              />
            </div>
            <div className="med:w-[24%] xsm:w-100 xsm:mt-5 med:mt-0  xsm:w-full ">
              <ImgCard
                className="h-[165px] bg-white shadow-md rounded-2xl p-5 mb-4 flex justify-center	items-center w-full"
                img={"static/images/worldbank.svg"}
                title={"The World Bank"}
              />
            </div>
            <div className="med:w-[24%] xsm:w-100 xsm:mt-5 med:mt-0  xsm:w-full ">
              <ImgCard
                className="h-[165px] bg-white shadow-md rounded-2xl p-5 mb-4 flex justify-center	items-center w-full"
                img={"static/images/esmap.svg"}
                title={"Energy Sector Management Assistance Program"}
              />
            </div>
            <div className="med:w-[24%] xsm:w-100 xsm:mt-5 med:mt-0  xsm:w-full ">
              <ImgCard
                className="h-[165px] bg-white shadow-md rounded-2xl p-5 mb-4 flex justify-center	items-center w-full"
                img={"static/images/giz.svg"}
                title={
                  "Deutsche Gesellschaft für Internationale Zusammenarbeit"
                }
              />
            </div>
          </div>
        </div>
        <div className="bg-white pt-10 pb-14 px-16 xsm:px-7 mobile:px-10 laptop:px-16">
          <p className="not-italic font-normal  xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-6 xsm:leading-[15.3px] xsm:leading-[20.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4">
            Many people contributed in many different ways to the creation of
            the Sustainable Energy for All Knowledge Hub, and we are most
            grateful for their efforts.
          </p>
          <p className="not-italic font-normal  xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-6 xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4">
            Hadley Taylor, Min Hyejung, Niklas Hayek, Anant Wadhwa, and Stephen
            Kent led the content creation and review on behalf of Sustainable
            Energy for All (SEforALL).
          </p>
          <p className="not-italic font-normal  xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-6 xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4">
            This website was designed and developed by Keymouse IT. (Details
            from KMIT)
          </p>
          <p className="not-italic font-normal  xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-6 xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base">
            We also wish to thank the following individuals for their
            consultation and participation: ADD NAMES The organizations
            showcased in the case studies were all generous with their time,
            providing detailed information and reviewing draft versions. Any
            errors remaining are the responsibility of the website authors.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
