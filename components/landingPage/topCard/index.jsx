import React, { useEffect, useRef, useState } from "react";
import StartButton from "components/buttons/startButton";
// import useOnScreen from "../../../hooks/useVisible";
import { useTranslation } from "react-i18next";
// import hub from "";

const TopCard = ({ HandleOpen }) => {
  const ref = useRef();
  // const isVisible = useOnScreen(ref);

  const cardRef = useRef();
  // const isVisibleCard = useOnScreen(cardRef);

  const [showButton, setShowButton] = useState(false);
  const [showCard, setShowCard] = useState(true);

  // useEffect(() => {
  //   if (isVisible) {
  //     setShowButton(true);
  //   } else {
  //     setShowButton(false);
  //   }
  // }, [isVisible]);

  // useEffect(() => {
  //   if (isVisibleCard) {
  //     setShowCard(false);
  //   } else {
  //     setShowCard(true);
  //   }
  // }, [isVisibleCard]);
  const { t, i18n } = useTranslation();

  // <>
  //   <div className="flex items-center relative h-[100%] flex-col subCardFull">
  //     <h5 className="cardBigHeading font-bold	text-[65px] leading-[70px] text-center	select-none	uppercase text-white	pb-[15px] mt-[2rem] pt-[25rem] sticky top-[-15rem] left-[0px]">
  //       {t("Sustainable")}
  //       <span className="text-Secondary px-[6px]"> {t("Energy")} </span>
  //       {t("forAll")} <br />
  //       <span className="text-Primary pl-[6px]"> {t("Knowledge")}</span>{" "}
  //       {t("Hub")}
  //     </h5>
  //     {showCard && (
  //       <div id="wrapper">
  //         <div id="wrapper-inner">
  //           <div id="scroll-down">
  //             <span className="arrow-down">
  //               {/* <!-- css generated icon --> */}
  //             </span>
  //             <span id="scroll-title">{t("Scrolldown")}</span>
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //     <div className={"mt-[25rem] w-[80%] mobile-card-width"} ref={cardRef}>
  //       <div className="h-[100vh] pt-[10rem] flex items-center card-section-wrap">
  //         <div className="mb-[10px] flex items-center cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap ">
  //           <p className="font-bold text-[42px] leading-[55px] text-white m-0 flex-1 text-justify">
  //             {t("TheSEforALL")}{" "}
  //             <span className="font-bold text-Secondary px-[6px]">
  //               {t("KnowledgeHub")}
  //             </span>{" "}
  //             {t("PlatformThatSupports")}
  //           </p>
  //         </div>
  //       </div>
  //       <div className="h-[100vh] pt-[8rem] flex items-center card-section-wrap">
  //         <div className="mb-[10px] flex items-center cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap ">
  //           <p className="font-bold text-[42px] leading-[55px] text-white m-0 flex-1 text-justify">
  //             {t("TheRightPolicies")}
  //             <span className="font-bold text-Secondary pl-[6px]">
  //               {t("AffordableAndClean")}
  //             </span>
  //             {t("TheKnowledgeHub")}
  //           </p>
  //         </div>
  //       </div>
  //       <div className="h-[100vh] pt-[8rem] flex items-center card-section-wrap">
  //         <div className="mb-[10px] flex items-center cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap ">
  //           <p className="font-bold text-[42px] leading-[55px] text-white m-0 flex-1 text-justify">
  //             {t("CurrentlyOffers")}{" "}
  //             <span className="font-bold text-Secondary">
  //               {t("Electricity")}
  //             </span>
  //             {""} {t("ResourcesOnAccess")}
  //           </p>
  //         </div>
  //       </div>
  //       <div
  //         className="h-[100vh] pt-[8rem] inline-flex flex-wrap items-center card-section-wrap "
  //         ref={ref}
  //       >
  //         <div className="sticky top-[22rem] left-[0px] last-card-fixed">
  //           <div className="mb-[10px] flex items-center cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap ">
  //             <p className="font-bold text-[42px] leading-[55px] text-white m-0 flex-1 text-justify">
  //               {t("Find")}{" "}
  //               <span className="font-bold text-Secondary px-[6px]">
  //                 {t("Guidelines")}
  //               </span>{" "}
  //               {t("OnElectricity")}
  //             </p>
  //           </div>
  //           <div
  //             className="w-[49%] absolute bottom-[-100px] left-[26%] landingButton"
  //             onClick={HandleOpen}
  //             style={{ opacity: showButton ? 1 : 0 }}
  //           >
  //             <StartButton title={t("ClickHereToStart")} className="w-full" />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </>
  return (
    <div className="customize-card p-[1.8rem] py-[2.5rem]  bg-white rounded-2xl w-[80%] relative mt-[3rem] mb-[1rem] mx-[auto] SustainableBox">
      <div className="items-center customize-header">
        <h5 className="text-[#000000b3] font-bold	text-[35px] leading-[50px] text-center	select-none	uppercase">
          {t("Sustainable")}
          <span className="text-Secondary"> {t("Energy")} </span>
          {/* {t("forAll")}  */}
          <span className="text-Primary"> {t("Policy")}</span>{" "}
          {t("Hub")}
        </h5>
      </div>
      {/* <div className="my-3 border-b-[4px] border-primary opacity-20" /> */}
      <div id="container-main" className="flex my-[1.5rem] h-[42vh]">
        <div className="container-box w-[50%]">
          <div className="flex flex-col h-[50%]">
            <div className="bg-white-900 mobile-card-width items-start card-section-wrap cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap p-[20px] flex h-[100%]">
              <img
                className="w-[16%] mr-[8px]"
                src="../../../static/images/hub.svg"
                alt="hub"
              />
              <p className="text-[15px] leading-[50px] text-[#000000a1] m-0 flex-1 text-justify">
                {/* {t("TheSEforALL")}{" "}
                <span className="font-bold text-[#000000b3] px-[6px]">
                  {t("KnowledgeHub")}
                </span>{" "} */}
                {t("PlatformThatSupports")}
              </p>
            </div>
            <div className="mx-[auto] w-[75%] border-b-[2px] border bg-black opacity-[1]" />
          </div>
          <div className="flex flex-col h-[50%]">
            <div className="second-container bg-white-900 mobile-card-width card-section-wrap cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap p-[20px] flex items-start h-[50%] mt-[2rem]">
              <img
                className="w-[16%] mr-[8px]"
                src="../../../static/images/journey.svg"
                alt="hub"
              />
              <p className="text-[12px] leading-[55px] text-[#000000a1] m-0 flex-1 text-justify">
                {/* {t("CurrentlyOffers")}{" "}
                <span className="font-bold text-[#000000b3]">{t("Electricity")}</span>{""}  */}
                {t("ResourcesOnAccess")}
              </p>
            </div>
            <div className="divider-hide mx-[auto] w-[75%] border-b-[2px] border bg-black opacity-[1]" />
          </div>
        </div>
        <div className="divider w-[1px]  border-b-[4px] border opacity-[1]" />
        <div className="container-box w-[50%]">
          <div className="third-container flex flex-col h-[50%]">
            <div className="bg-white-900 mobile-card-width items-start card-section-wrap cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap p-[20px] flex h-[100%]">
              <img
                className="w-[16%] mr-[8px] mt-[-10px]"
                src="../../../static/images/sustainable_hub.png"
                alt="hub"
              />
              <p className="text-[12px] leading-[55px] text-[#000000a1] m-0 flex-1 text-justify">
                {/* {t("TheRightPolicies")}
                <span className="font-bold text-[#000000b3] pl-[6px]">
                  {t("AffordableAndClean")}
                </span> */}
                {t("TheKnowledgeHub")}
              </p>
            </div>
            <div className="mx-[auto] w-[75%] border-b-[2px] border bg-black opacity-[1]" />
          </div>
          <div className="last-card bg-white-900 mobile-card-width items-start card-section-wrap cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap p-[20px] flex h-[50%] mt-[2rem]">
            <img
              className="w-[16%] mr-[8px]"
              src="../../../static/images/guide.svg"
              alt="hub"
            />
            <p className="text-[12px] leading-[55px] text-[#000000a1] m-0 flex-1 text-justify">
              {/* {t("Find")}{" "}
              <span className="font-bold text-[#000000b3] px-[6px]">
                {t("Guidelines")}
              </span>{" "} */}
              {t("OnElectricity")}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col max-w-[40%] m-auto customize-buttons">
        <div
          className="w-[49%] absolute bottom-[-30px] left-[26%]"
          onClick={HandleOpen}
        >
          <StartButton title={t("ClickHereToStart")} className="w-full" />
        </div>
      </div>
    </div>
  );
};
export default TopCard;
