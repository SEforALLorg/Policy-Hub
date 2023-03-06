import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail,MdLocationOn } from "react-icons/md";

import Address from "components/cards/addressCard";
import SubscribeComponent from "../subscribeComponent";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-white rounded-lg	 overflow-hidden shadow-md">
      {/* <div className="xsm:pl-[25px] xsm:py-6 extrasmall:p-6 mobile:p-6 laptop:p-10 bg-white flex justify-center xsm:justify-start small:justify-center xsm:flex-wrap extrasmall:flex-nowrap contact-full-wrap"> */}
      
        {/* <div className="flex items-center xsm:w-full laptop:w-2/5 xsm:justify-start contact-top-wrap">
          <FaPhoneAlt className="xsm:text-xmd laptop:text-basic text-Primary mr-4" />
          <MdLocationOn className="text-basic text-Primary mr-4" />
          <div>
            <p className="font-normal small:tiny  laptop:text-medium leading-[26px]  text-lighttext m-0 center-content">
            Vienna Office
            </p>
            <p
              className="font-bold  xsm:text-xsmall laptop:text-[25px]  leading-[26px] text-darktext m-0 no-underline"
              // href="tel:+43 676 846 727 200"
            >
             <MdLocationOn className="text-basic text-Primary mr-4" />
                Andromeda Tower 15th floor <br />
                Donau City Strasse 6<br />
                1220, Vienna Austria
            </p>
          </div>
        </div> */}
        {/* <div className="flex items-center xsm:w-full laptop:w-2/5 xsm:justify-start  xsm:mt-5 extrasmall:mt-0 contact-top-wrap">
          <MdEmail className="text-basic text-Primary mr-4" />
          <div>
            <p className="font-normal small:tiny  laptop:text-medium  leading-[26px]  text-lighttext m-0 center-content">
              {t("Email")}
            </p>
            <a
              className="font-bold xsm:text-xsmall laptop:text-[25px]  leading-[26px] text-darktext m-0 no-underline"
              href="mailTo:KnowledgeHub@SEforALL.org"
            >
              PolicyHub@seforall.org
            </a>
          </div>
        </div> */}
      {/* </div> */}
      <div className="bg-lightBg pt-4 pb-4 m-auto contact-inner">
        <div className="flex m-auto justify-between w-4/5 xsm:flex-wrap laptop:flex-nowrap">
        <Address
            className={
              "bg-white p-4 w-full	rounded-lg m-[5px] cursor-pointer addressCard transition-all duration-200 card-animation center-content"
            }
            heading={"Vienna Office"}
            title={
              <div className="flex">
                <MdLocationOn className="text-basic text-Primary mr-4" />
                Andromeda Tower 15th floor, 
                Donau City Strasse 6<br />
                1220, Vienna Austria
              </div>
            }
          />
          <Address
            className={
              "bg-white p-4 w-full	rounded-lg m-[5px] cursor-pointer addressCard transition-all duration-200 card-animation center-content"
            }
            heading={"Email"}
            title={
              <div className="flex items-center">
                <MdEmail className="text-basic text-Primary mr-4" />
                PolicyHub@seforall.org<br />
              </div>
            }
          />
          {/* <Address
            className={
              "bg-white p-4 w-full	rounded-lg m-[5px] cursor-pointer addressCard transition-all duration-200 card-animation center-content"
            }
            heading={"Vienna Office"}
            title={
              <>
                Andromeda Tower 15th floor <br />
                Donau City Strasse 6<br />
                1220, Vienna Austria
              </>
            }
          />
          <Address
            className={
              "bg-white p-4 w-full	rounded-lg m-[5px] cursor-pointer addressCard transition-all duration-200 card-animation center-content"
            }
            heading={"Washington, DC Office"}
            title={
              <>
                1750 Pennsylvania Avenue NW <br />
                Suite 300 <br />
                Washington, DC 20006 USA
              </>
            }
          />
          <Address
            className={
              "bg-white p-4 w-full	rounded-lg m-[5px] cursor-pointer addressCard transition-all duration-200 card-animation center-content"
            }
            heading={"New York Office"}
            title={
              <>
                420 5th Ave
                <br /> New York
                <br /> NY 10018 USA
              </>
            }
          /> */}
        </div>
      </div>
      <div className="flex items-center xsm:justify-center small:justify-center laptop:justify-between xsm:px-2 small:px-5 mobile:px-[60] laptop:px-[60px] py-4 xsm:flex-wrap laptop:flex-nowrap">
        <div className="  xsm:w-11/12 large:w-full ">
          <p className="text-lighttext font-normal xsm:text-xsmall small:text-small xsm:leading-5 small:leading-6  m-0 text-justify center-content">
            {t("pleasecontact")}
            <span
              className="text-darktext font-bold underline cursor-pointer text-Primary"
              onClick={() => window.open("mailto:Media@SEforALL.org")}
            >
              Media@SEforALL.org
            </span>
          </p>
          <p className="laptop:pt-10 laptop:pb-[0.5rem] xsm:pt-3 xsm:pb-6 text-lighttext font-normal xsm:text-xsmall small:text-small xsm:leading-5 small:leading-6 text-justify  m-0 center-content">
            {t("KeepUpToSpeed")}
            <span
              className="text-darktext font-bold underline cursor-pointer text-Primary"
              onClick={() => window.open("mailto:KnowledgeHub@SEforALL.org")}
            >
              KnowledgeHub@SEforALL.org
            </span>
            .
          </p>
        </div>
        <div className="contact-subscribe-wrap">
          <SubscribeComponent />
        </div>
      </div>
    </div>
  );
};

export default Contact;
