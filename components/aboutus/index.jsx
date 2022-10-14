import React from "react";
import ImgCard from "components/cards/imgCard";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("AboutTitle")}</title>
      </Head>
      <div className=" rounded-lg overflow-hidden shadow-md">
        <div className="bg-white xsm:p-5 small:p-10 flex justify-between items-center xsm:flex-wrap xsm:justify-center medium:flex-nowrap dropShadow">
          <div className="w-full pr-[30px] about-inner-wrap">
            <h5 className="font-bold text-large xsm:text-medium mobile:text-xmd laptop:text-large leading-[46px] uppercase text-darktext mb-2 center-content">
              {t("Aboutus")}
            </h5>
            <p className="not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4 text-justify center-content">
              <b>{t("SEforALL")}</b>
              {t("international")}{" "}
              <span
                className="text-Primary hover:underline cursor-pointer"
                onClick={() => window.open("https://www.seforall.org/")}
              >
                {t("clickHere")}
              </span>
              .
            </p>
            <p className="not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4 text-justify center-content">
              {t("The")}
              <b>{t("SustainableEnergyPlatform")}</b>
              {t("InteractivePlatform")}
            </p>
            <p className="not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4 text-justify center-content">
              {t("AdditionalPillars")}
            </p>
          </div>
          <div className="xsm:mr-0 xsm:mb-4 med:mb-0 w-[300px] about-logo">
            <img
              className="max-w-full"
              src={"../../static/images/SEforALL_Logo_Colour.png"}
              alt="flag"
            />
          </div>
        </div>
        <div className="bg-lightBg xsm:p-5 small:p-10 dropShadow">
          <p className="not-italic font-bold text-medium  xsm:text-small xsm:text-tiny med:text-medium leading-6 text-left text-medium text-darktext center-content">
            {" "}
            {t("SustainableEnergyFinanced")}{" "}
          </p>
          <div className="w-100 flex justify-between xsm:mt-2 xsm:pb-6 small:my-10 xsm:flex-wrap med:flex-nowrap">
            <div className="med:w-[49%]  xsm:w-full ">
              <ImgCard
                className="h-[236px] bg-white shadow-md rounded-2xl p-[3rem] mb-4 flex justify-center imgbox items-center w-full cursor-pointer about-logo-card"
                img={"../../static/images/rockfound.svg"}
                title={"The Rockefeller Foundation"}
                link={"https://www.rockefellerfoundation.org/"}
              />
            </div>
            <div className="med:w-[49%] xsm:w-full  xsm:mt-5 med:mt-0">
              <div
                className="cursor-pointer h-[236px] bg-white shadow-md rounded-2xl p-[3rem] mb-4 flex justify-center imgbox	items-center w-full about-logo-card"
                onClick={() =>
                  window.open("https://www.esteri.it/en/ministero/")
                }
              >
                <img
                  src={"../../static/images/dgcs_rettangolare_eng.jpg"}
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
                {t("MinistryOfForeign")}
              </a>
            </div>
          </div>
          <p className="not-italic font-bold text-medium xsm:text-small xsm:text-tiny med:text-medium leading-6 text-left text-medium text-darktext center-content">
            {" "}
            {t("SustainableEnergy")}{" "}
          </p>
          <div className="w-100 flex justify-between xsm:mt-2 small:my-10 xsm:flex-wrap med:flex-nowrap">
            <div className="med:w-[19%] xsm:w-100  xsm:w-full ">
              <ImgCard
                className="h-[165px] bg-white shadow-md rounded-2xl p-[30px] mb-4 flex justify-center	items-center w-full about-logo-card african-development"
                img={"../../static/images/african-development.jpg"}
                title={"African Development Bank Group"}
                link={"https://www.afdb.org/en"}
              />
            </div>
            <div className="med:w-[19%] xsm:w-100 xsm:mt-5 med:mt-0  xsm:w-full ">
              <ImgCard
                className="h-[165px] bg-white shadow-md rounded-2xl p-[30px] mb-4 flex justify-center	items-center w-full about-logo-card"
                img={"../../static/images/duke.png"}
                title={"The Energy Access Project at Duke University"}
                link={"https://energyaccess.duke.edu/"}
              />
            </div>
            <div className="med:w-[19%] xsm:w-100 xsm:mt-5 med:mt-0  xsm:w-full ">
              <ImgCard
                className="h-[165px] bg-white shadow-md rounded-2xl p-[30px] mb-4 flex justify-center	items-center w-full about-logo-card"
                img={"../../static/images/WRI_logo_4c.png"}
                title={"World Resources Institute"}
                link={"https://www.wri.org/"}
              />
            </div>
            <div className="med:w-[19%] xsm:w-100 xsm:mt-5 med:mt-0  xsm:w-full ">
              <ImgCard
                className="h-[165px] bg-white shadow-md rounded-2xl p-[30px] mb-4 flex justify-center	items-center w-full about-logo-card"
                img={"../../static/images/ARE_LOGO_2014_cmyk.png"}
                title={"Alliance for Rural Electrification"}
                link={"https://www.ruralelec.org/"}
              />
            </div>
            <div className="med:w-[19%] xsm:w-100 xsm:mt-5 med:mt-0  xsm:w-full ">
              <ImgCard
                className="h-[165px] bg-white shadow-md rounded-2xl p-[30px] mb-4 flex justify-center	items-center w-full about-logo-card energypedia-image"
                img={"../../static/images/energypedia_Logo.png"}
                title={"Energypedia"}
                link={"https://energypedia.info/wiki/Main_Page"}
                imgStyle={{ maxWidth: "70%" }}
              />
            </div>
          </div>
        </div>
        <div className="bg-white pt-10 pb-14 px-16 xsm:px-7 mobile:px-10 laptop:px-16 about-bottom-card">
          <p className="not-italic font-normal  xsm:text-xsmall text-justify small:text-tiny xsm:leading-4 small:leading-6 xsm:leading-[15.3px] xsm:leading-[20.3px] laptop:leading-[25.3px] text-text mb-base mb-4 center-content">
            <b> {t("ManyIndividuals")}</b>
          </p>
          <p className="font-bold text-text mb-[3px] text-[20px] center-content">
            {t("Curators")}
          </p>
          <p className="not-italic font-normal  xsm:text-xsmall text-justify small:text-tiny xsm:leading-4 small:leading-6 xsm:leading-[15.3px] center-content xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4">
            <b>{t("HadleyTaylor")}</b>
            {t("and")} {t("ledthecontent")}
            <span
              className="text-Primary hover:underline cursor-pointer"
              onClick={() => window.open("https://www.seforall.org/")}
            >
              {t("SustainableEnergyforAll")}
            </span>
            .
          </p>
          <p className="font-bold text-text mb-[3px] text-[20px] center-content">
            {t("Developers")}
          </p>
          <p className="not-italic font-normal center-content  xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-6 xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4">
            {t("DevelopedBy")}{" "}
            <span
              className="text-Primary hover:underline cursor-pointer"
              onClick={() => window.open("https://www.keymouseit.com/")}
            >
              KeyMouse IT Services Pvt. Ltd 
            </span>
            {t("BasedInIndia")}
          </p>
          <p className="font-bold text-text mb-[3px] text-[20px] center-content">
            {t("Contributors")}
          </p>
          <p className="not-italic font-normal  xsm:text-xsmall center-content small:text-tiny xsm:leading-4 small:leading-6 xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4">
            {t("WeAlsoThank")} <br />
            <b>Freda Akyeabea Opoku</b>,{t("AfricanDevelopment")}
            <b>Catoer Wibowo</b>,{t("Deutsche")}
            <b>Ashley Wearne</b>,{t("Transform")}
            <b>Jonathan Phillips</b>,{t("JamesE")}
            <b> Dimitrios Mentis</b>,{t("WRI")}
            <b>Ranisha Basnet</b>, Energypedia;
            <b> Prof. Joseph Mutale</b>,{t("ZARENA")}
            <b> Dr. Moeketsi Mpholo</b>,{t("NationalUniversity")}
            <b> Jessica Stephens</b>,{t("AMDA")}
            <b> Nasir Ibrahim</b>,{t("Electrification")}
          </p>
          <p className="not-italic font-normal  xsm:text-xsmall center-content small:text-tiny xsm:leading-4 small:leading-6 text-justify xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-4">
            {t("OrganizationsHighlighted")}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
