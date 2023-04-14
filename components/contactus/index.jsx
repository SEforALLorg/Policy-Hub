import React from "react";
import SubscribeComponent from "../subscribeComponent";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="main-container">
      <div className="bg-white rounded-lg	overflow-hidden shadow-md">
        <div className="flex items-center xsm:justify-center small:justify-center laptop:justify-between xsm:px-2 small:px-5 mobile:px-[60] laptop:px-[60px] py-4 xsm:flex-wrap laptop:flex-nowrap">
          <div className="  xsm:w-11/12 large:w-full ">
            <p className="laptop:pt-3 laptop:pb-10 xsm:pt-3 xsm:pb-6 text-lighttext font-normal xsm:text-xsmall small:text-small xsm:leading-5 small:leading-6  m-0 text-justify center-content">
              {t("CollaborativeWork")}
            </p>
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
                onClick={() => window.open("mailto:PolicyHub@seforall.org")}
              >
                PolicyHub@seforall.org
              </span>
              .
            </p>
          </div>
          <div className="contact-subscribe-wrap">
            <SubscribeComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
