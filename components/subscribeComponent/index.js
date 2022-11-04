import React, { useEffect, useState } from "react";
import Script from "next/script";
import { FaEnvelopeOpenText } from "react-icons/fa";
import PrimaryButton from "components/buttons/primarybutton";
import { useTranslation } from "react-i18next";

const SubscribeComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalClick, setModalClick] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (showModal) {
      <Script id="mcjs">
        {
          (!(function (c, h, i, m, p) {
            (m = c.createElement(h)),
              (p = c.getElementsByTagName(h)[0]),
              (m.async = 1),
              (m.src = i),
              p.parentNode.insertBefore(m, p);
          })(
            document,
            "script",
            "https://chimpstatic.com/mcjs-connected/js/users/7538fc5f6603b063a8158282f/b144b3c02621d86ac3892b72c.js"
          ),
          (document.cookie =
            "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),
          (document.cookie =
            "MCPopupSubscribed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"))
        }
      </Script>;
    }
  }, [showModal, modalClick]);

  const onSubscribe = () => {
    setShowModal(true);
    setModalClick(!modalClick);
  };
  return (
    <div className="w-full">
      <div className="flex items-center justify-center mt-[10px]">
        <FaEnvelopeOpenText size={50} className={"text-Primary"} />
      </div>
      <div className="flex items-center justify-center mt-[10px]">
        <p className="mt-[0px] m-[4px] mb-0 text-lighttext text-[16px] font-medium tracking-[0px]">
          {t("SubscribeNewsletter")}
        </p>
      </div>
      <div className="text-white flex items-center justify-center">
        <PrimaryButton
          title={t("Subscribe")}
          className={`bg-Primary xsm:w-full extrasmall:w-52 small:w-70 laptop:w-70 rounded-full h-[45px] text-center font-bold  text-small leading-5 uppercase  outline-none no-underline no-underline
                    border-2 border-transparent duration-500  ease-linear transition-all mt-[20px] button-animation pt-[4px]`}
          onClick={() => onSubscribe()}
        />
      </div>
    </div>
  );
};

export default SubscribeComponent;
