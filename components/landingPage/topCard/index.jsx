import React, { useEffect, useRef, useState } from "react";
import StartButton from "components/buttons/startButton";
import useOnScreen from "../../../hooks/useVisible";
import { useTranslation } from "react-i18next";

const TopCard = ({ HandleOpen }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const cardRef = useRef();
  const isVisibleCard = useOnScreen(cardRef);

  const [showButton, setShowButton] = useState(false);
  const [showCard, setShowCard] = useState(true);

  useEffect(() => {
    if (isVisible) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [isVisible]);

  useEffect(() => {
    if (isVisibleCard) {
      setShowCard(false);
    } else {
      setShowCard(true);
    }
  }, [isVisibleCard]);
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="flex items-center relative h-[100%] flex-col subCardFull">
        <h5 className="cardBigHeading font-bold	text-[65px] leading-[70px] text-center	select-none	uppercase text-white	pb-[15px] mt-[2rem] pt-[25rem] sticky top-[-15rem] left-[0px]">
          {t("Sustainable")}
          <span className="text-Secondary px-[6px]"> {t("Energy")} </span>
          {t("forAll")} <br />
          <span className="text-Primary pl-[6px]"> {t("Knowledge")}</span>{" "}
          {t("Hub")}
        </h5>
        {showCard && (
          <div id="wrapper">
            <div id="wrapper-inner">
              <div id="scroll-down">
                <span className="arrow-down">
                  {/* <!-- css generated icon --> */}
                </span>
                <span id="scroll-title">{t("Scrolldown")}</span>
              </div>
            </div>
          </div>
        )}
        <div className={"mt-[25rem] w-[80%] mobile-card-width"} ref={cardRef}>
          <div className="h-[100vh] pt-[10rem] flex items-center card-section-wrap">
            <div className="mb-[10px] flex items-center cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap ">
              <p className="font-bold text-[42px] leading-[55px] text-white m-0 flex-1 text-justify">
                {t("TheSEforALL")}{" "}
                <span className="font-bold text-Secondary px-[6px]">
                  {t("KnowledgeHub")}
                </span>{" "}
                {t("PlatformThatSupports")}
              </p>
            </div>
          </div>
          <div className="h-[100vh] pt-[8rem] flex items-center card-section-wrap">
            <div className="mb-[10px] flex items-center cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap ">
              <p className="font-bold text-[42px] leading-[55px] text-white m-0 flex-1 text-justify">
                {t("TheRightPolicies")}
                <span className="font-bold text-Secondary pl-[6px]">
                  {t("AffordableAndClean")}
                </span>
                {t("TheKnowledgeHub")}
              </p>
            </div>
          </div>
          <div className="h-[100vh] pt-[8rem] flex items-center card-section-wrap">
            <div className="mb-[10px] flex items-center cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap ">
              <p className="font-bold text-[42px] leading-[55px] text-white m-0 flex-1 text-justify">
                {t("CurrentlyOffers")}{" "}
                <span className="font-bold text-Secondary">
                  {t("Electricity")}
                </span>
                {""} {t("ResourcesOnAccess")}
              </p>
            </div>
          </div>
          <div
            className="h-[100vh] pt-[8rem] inline-flex flex-wrap items-center card-section-wrap "
            ref={ref}
          >
            <div className="sticky top-[22rem] left-[0px] last-card-fixed">
              <div className="mb-[10px] flex items-center cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap ">
                <p className="font-bold text-[42px] leading-[55px] text-white m-0 flex-1 text-justify">
                  {t("Find")}{" "}
                  <span className="font-bold text-Secondary px-[6px]">
                    {t("Guidelines")}
                  </span>{" "}
                  {t("OnElectricity")}
                </p>
              </div>
              <div
                className="w-[49%] absolute bottom-[-100px] left-[26%] landingButton"
                onClick={HandleOpen}
                style={{ opacity: showButton ? 1 : 0 }}
              >
                <StartButton title={t("ClickHereToStart")} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopCard;
