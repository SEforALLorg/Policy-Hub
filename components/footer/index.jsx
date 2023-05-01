import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { resource } from "../../constant/resource";
import {
  CLEANCOOKING,
  ELECTRICITYACCESS,
  ENERGYEFFICIENCY,
  SUSTAINABLECOOLING,
} from "../../constant";

const Footer = ({ footerRes }) => {
  const { t, i18n } = useTranslation();
  const onClickHandler = (resource) => {
    switch (resource) {
      case "ElectricityAccess":
        window.open("static/pdf/Electrification.pdf");
        // setTitle("Electricity Access");
        break;
      case "CleanCooking":
        window.open("static/pdf/Cleancooking.pdf");
        // setTitle("Clean Cooking");
        break;
      case "SustainableCooling":
        window.open("static/pdf/Sustainablecooling.pdf");
        // setTitle("Sustainable Cooling");
        break;
      case "EnergyEfficency":
        window.open("static/pdf/Energyefficiency.pdf");
        // setTitle("Energy Efficency");
        break;
      default:
        break;
    }
  };

  return (
    <div className="footer xsm:mt-4 medium:mt-20">
      <div className="flex items-center justify-between w-full xsm:flex-wrap laptop:flex-nowrap ">
        <div className="flex items-center laptop:w-2/5 laptop:justify-start xsm:justify-center xsm:w-full">
          <div
            onClick={() =>
              window.open("https://www.facebook.com/sustainableenergyforall")
            }
            className="border border-white extrasmall:w-[48px] extrasmall:h-[48px] xsm:w-[34px] xsm:h-[34px] flex items-center justify-center
            cursor-pointer rounded-full footer-icon mr-4 hover:text-blue 
            hover:border hover:border-blue hover:text-blue ease-linear transition-all duration-500 mediaIconBorderColor"
          >
            <FaFacebookF className="extrasmall:text-medium xsm:text-xsmall mediaIconColor" />
          </div>
          <div
            onClick={() => window.open("https://twitter.com/SEforALLorg")}
            className="border border-white extrasmall:w-[48px] extrasmall:h-[48px] xsm:w-[34px] xsm:h-[34px] flex items-center justify-center
                                cursor-pointer rounded-full footer-icon mr-4 hover:text-blue 
                                hover:border hover:border-blue ease-linear transition-all duration-500 mediaIconBorderColor"
          >
            <BsTwitter className="extrasmall:text-medium xsm:text-xsmall hover:text-blue mediaIconColor" />
          </div>
          <div
            onClick={() =>
              window.open("https://www.linkedin.com/company/seforall/")
            }
            className="border border-white extrasmall:w-[48px] extrasmall:h-[48px] xsm:w-[34px] xsm:h-[34px] flex items-center justify-center
                                cursor-pointer rounded-full footer-icon mr-4 hover:text-blue 
                                 hover:border hover:border-blue ease-linear transition-all duration-500 mediaIconBorderColor"
          >
            <FaLinkedinIn className="extrasmall:text-medium xsm:text-xsmall hover:text-blue mediaIconColor" />
          </div>
          <div
            onClick={() => window.open("https://www.instagram.com/seforall/")}
            className="border border-white extrasmall:w-[48px] extrasmall:h-[48px] xsm:w-[34px] xsm:h-[34px] flex items-center justify-center
                                cursor-pointer rounded-full footer-icon mr-4 hover:text-blue 
                                hover:border hover:border-blue ease-linear transition-all duration-500 mediaIconBorderColor"
          >
            <FaInstagram className="extrasmall:text-medium xsm:text-xsmall hover:text-blue mediaIconColor" />
          </div>
          <div
            onClick={() =>
              window.open("https://www.youtube.com/SEforALL/featured")
            }
            className="border border-white extrasmall:w-[48px] extrasmall:h-[48px] xsm:w-[34px] xsm:h-[34px] flex items-center justify-center
                                cursor-pointer rounded-full footer-icon hover:text-blue hover:bg-white
                                 hover:border-blue ease-linear transition-all duration-500 mediaIconBorderColor"
          >
            <FaYoutube className="extrasmall:text-medium xsm:text-xsmall  hover:text-blue mediaIconColor" />
          </div>
        </div>
        <div
          className="flex items-baseline w-full xsm:justify-center xsm:mt-6 
                                laptop:mt-0 laptop:justify-end laptop:flex-nowrap 
                                xsm:flex-wrap footerText"
        >
          <p
            className="font-medium leading-5 xsm:text-xx text-center text-white mr-6 mb-0
                                  desktoplg:text-small mobile:text-xsmall xsm:w-full mobile:w-max powered-text "
          >
            {t("Poweredby")}{" "}
            <span
              className="text-Secondary hover:underline cursor-pointer"
              onClick={() => window.open("https://www.seforall.org/")}
            >
              {t("SustainableEnergyforAll")}
            </span>
          </p>
          <button
            onClick={() => window.open(`/${i18n.language}/allresources`, "_self")}
            className="font-medium xsm:text-xx text-white mb-0 xsm:px-3 medium:px-4 py-2.5 
                                      border leading-5 border-white rounded-[42px] bg-transparent 
                                      desktoplg:text-small flex items-center justify-center 
                                      screen:text-xsmall xsm:mt-3 laptop:mt-0 xsm:w-full  mobile:text-xsmall
                                      mobile:w-max xsm:mr-0 laptop:mr-2 large:mr-8 hover:text-blue hover:bg-white mobile:mr-2
                                      hover:border hover:border-blue ease-linear transition-all duration-500 footer-button mediaIconBorderColor"
          >
            {t("BrowseResource")}
          </button>
          <UncontrolledDropdown
            setActiveFromChild
            className="
                                      customDropdown font-medium xsm:text-xx  text-white  last:mr-0 mb-0 
                                      py-2.5 xsm:px-3 medium:px-4 
                                       border leading-5 border-white rounded-[42px] bg-transparent 
                                       desktoplg:text-small  mobile:text-xsmall
                                       screen:text-xsmall xsm:mt-3 laptop:mt-0 xsm:w-full mobile:w-max
                                       hover:bg-white hover:border hover:text-white ease-linear transition-all duration-500 footer-button cursor-p mediaIconBorderColor"
          >
            <DropdownToggle
              style={{ color: "white" }}
              className="DropdownToggle"
              tag="a"
              caret
            >
              <p style={{ marginBottom: "0" }}>{t("DownloadDecisionTree")}</p>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-box" style={{ marginLeft: 8, marginTop: 15 }}>
              {resource.map((resources, index) => {
                return (
                  <DropdownItem
                    onClick={() => {
                      onClickHandler(resources);
                    }}
                    key={index}
                  >
                    {t(resources)}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
      <div className="border-b-[1.6px] border-white w-full my-[15px] mediaIconBorderColor"></div>
      <div className="flex w-full items-center justify-between xsm:flex-wrap laptop:flex-nowrap pt-[12px] pb-[12px] footer-center-wrap">
        <div
          className="flex w-full items-center small:flex  xsm:mt-6 xsm:block
                                xsm:justify-center laptop:justify-end large:mt-0 xsm:flex-wrap laptop:flex-nowrap footer-logos"
        >
          <img
            src={`/static/images/logo${
              footerRes === SUSTAINABLECOOLING ? "black" : ""
            }.svg`}
            alt="logo"
            className="small:m-0 mr-[0px] xsm:m-auto xsm:pr-0 small:pr-5 cursor-pointer w-[90px]"
            onClick={() => window.open("https://www.seforall.org/")}
          />
          {footerRes === ELECTRICITYACCESS && (
            <img
              src="static/images/footer_electricity_access.svg"
              alt="founder_logo"
              className="small:m-0 mr-[0px] xsm:mt-4 small:mt-0 xsm:m-auto xsm:pr-0 small:pr-5 cursor-pointer w-[250px]"
              onClick={() =>
                window.open("https://www.rockefellerfoundation.org/")
              }
            />
          )}
          {footerRes === CLEANCOOKING && (
            <img
              src="static/images/footer_electricity_access.svg"
              alt="electricity_logo"
              className="small:m-0 mr-[0px] xsm:mt-4 small:mt-0 xsm:m-auto xsm:pr-0 small:pr-5 cursor-pointer w-[250px]"
              onClick={() =>
                window.open("https://www.rockefellerfoundation.org/")
              }
            />
          )}
          {footerRes === SUSTAINABLECOOLING && (
            <img
              src={"/static/images/footer_sustainable_cooking.svg"}
              alt="sustainable_logo"
              className="small:m-0 mr-[0px] xsm:mt-4 small:mt-0 xsm:m-auto xsm:pr-0 small:pr-5 cursor-pointer w-[250px]"
              onClick={() =>
                window.open("https://www.rockefellerfoundation.org/")
              }
            />
          )}
          {footerRes === ENERGYEFFICIENCY && (
            <img
              src={"static/images/footer_electricity_access.svg"}
              alt="footer_logo"
              className="small:m-0 mr-[0px] xsm:mt-4 small:mt-0 xsm:m-auto xsm:pr-0 small:pr-5 cursor-pointer w-[250px]"
              onClick={() =>
                window.open("https://www.rockefellerfoundation.org/")
              }
            />
          )}
          {!footerRes && (
            <img
              src={"/static/images/logo_rockefeller_foundation_white.svg"}
              alt="rockefeller_logo"
              className="small:m-0 mr-[0px] xsm:mt-4 small:mt-0 xsm:m-auto xsm:pr-0 small:pr-5 cursor-pointer w-[200px]"
              onClick={() =>
                window.open("https://www.rockefellerfoundation.org/")
              }
            />
          )}
          <img
            src={"/static/images/dgcs_rettangolare_eng_neg.png"}
            alt="rettangolare_logo"
            className="small:m-0 mr-[0px] xsm:mt-4 small:mt-0 xsm:m-auto  xsm:pr-0 small:pr-5 cursor-pointer w-[250px]"
            onClick={() => window.open("https://www.esteri.it/en/ministero/")}
          />
        </div>
      </div>
      <div className="border-b-[1.6px] border-white w-full my-[15px] mediaIconBorderColor"></div>
      <div className="flex w-full items-center justify-between xsm:flex-wrap laptop:flex-nowrap pt-[20px] pb-[20px] mt-[10px] footer-bottom-wrap footerText">
        <p className="font-medium xsm:text-xx extrasmall:text-xsmall text-white leading-4 w-full  xsm:text-center laptop:text-left m-[0px]">
          {t("WebDevelopmentby")}{" "}
          <span
            className="text-Secondary hover:underline cursor-pointer"
            onClick={() => window.open("https://www.keymouseit.com/")}
          >
            KeyMouse IT
          </span>
        </p>
        <p className="font-medium xsm:text-xx extrasmall:text-xsmall text-white leading-4 w-full  xsm:text-center laptop:text-right m-[0px]">
          {t("Copyright")}
        </p>
      </div>
    </div>
  );
};

export default Footer;
