import React, { useEffect, useRef, useState } from "react";
import StartButton from "components/buttons/startButton";
import useOnScreen from "../../../hooks/useVisible";

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

  return (
    <>
      <div className="flex items-center relative h-[100%] flex-col subCardFull">
        <h5 className="cardBigHeading font-normal font-bold	text-[65px] leading-[70px] text-center	select-none	uppercase text-white	pb-[15px] mt-[2rem] pt-[25rem] sticky top-[-15rem] left-[0px]">
          Sustainable
          <span className="text-Secondary px-[6px]"> Energy </span>
          for All <br />
          <span className="text-Primary pl-[6px]"> Knowledge</span> Hub
        </h5>
        {showCard && (
          <div id="wrapper">
            <div id="wrapper-inner">
              <div id="scroll-down">
                <span className="arrow-down">
                  {/* <!-- css generated icon --> */}
                </span>
                <span id="scroll-title">Scroll down</span>
              </div>
            </div>
          </div>
        )}
        <div className={"mt-[24rem] w-[80%] mobile-card-width"} ref={cardRef}>
          <div className="h-[100vh] pt-[10rem] flex items-center card-section-wrap">
            <div className="mb-[10px] flex items-center cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap ">
              <p className="font-bold text-[42px] leading-[55px] text-white m-0 flex-1 text-justify">
                The SEforALL{""}
                <span className="font-bold text-Secondary px-[6px]">
                  Knowledge Hub
                </span>{""}
                is an interactive platform that supports policymakers in
                developing policy and regulatory frameworks for sustainable
                energy.
              </p>
            </div>
          </div>
          <div className="h-[100vh] pt-[8rem] flex items-center card-section-wrap">
            <div className="mb-[10px] flex items-center cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap ">
              <p className="font-bold text-[42px] leading-[55px] text-white m-0 flex-1 text-justify">
                With the right policies and regulations,<span className="font-bold text-Secondary pl-[6px]">affordable and clean
                energy for all is possible</span>. The Knowledge Hub contains leading
                resources, which have been identified by stakeholders from
                across the energy sector.
              </p>
            </div>
          </div>
          <div className="h-[100vh] pt-[8rem] flex items-center card-section-wrap">
            <div className="mb-[10px] flex items-center cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap ">
              <p className="font-bold text-[42px] leading-[55px] text-white m-0 flex-1 text-justify">
                It currently offers resources on electricity access.{" "}
                <span className="font-bold text-Secondary">
                  Resources 
                </span>{' '}on access to clean cooking, sustainable cooling and energy
                efficiency will be added soon.
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
                  Find
                  <span className="font-bold text-Secondary px-[6px]">
                    guidelines, tools and templates
                  </span>
                  on electricity access relevant to your country and matched to
                  your needs.
                </p>
              </div>
              <div
                className="w-[38%] absolute bottom-[-100px] left-[30%] landingButton"
                onClick={HandleOpen}
                style={{ opacity: showButton ? 1 : 0 }}
              >
                <StartButton title={"Click here to start"} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopCard;
