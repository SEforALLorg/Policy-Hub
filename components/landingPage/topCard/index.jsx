import React, { useEffect, useRef, useState } from "react";
import StartButton from "components/buttons/startButton";
import useOnScreen from "../../../hooks/useVisible";

const TopCard = ({ HandleOpen }) => {
  const ref = useRef()
  const isVisible = useOnScreen(ref)

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if(isVisible) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }, [isVisible])

  return (
    <>
      <div className="flex items-center relative h-[100%] flex-col subCardFull">
        <div className="h-[100vh] pt-[8rem] flex items-center">
          <div className="mb-[10px] p-[50px] flex items-center cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap bg-white dropShadow rounded-lg">
            <img
              src={"static/images/hub.svg"}
              alt="card"
              width={200}
              height={200}
              className="mr-[20px] landing-card-image"
            />
            <p className="font-bold text-[42px] leading-[55px] text-text m-0 flex-1">
              The SEforALL{" "}
              <span className="font-bold text-Secondary px-[6px]">
                Knowledge Hub
              </span>{" "}
              is an interactive platform that supports policymakers in
              developing policy and regulatory frameworks for sustainable
              energy.
            </p>
          </div>
        </div>
        <div className="h-[100vh] pt-[8rem] flex items-center">
          <div className="mb-[10px] flex items-center cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap bg-white dropShadow rounded-lg p-[50px]">
            <img
              src={"static/images/hub.svg"}
              alt="card"
              width={200}
              height={200}
              className="mr-[20px] landing-card-image"
            />
            <p className="font-bold text-[42px] leading-[55px] text-text m-0 flex-1">
              <span className="font-bold text-Secondary px-[6px]">
                The knowledge hub
              </span>{" "}
              provides key resources for different steps in decision-making.
            </p>
          </div>
        </div>
        <div className="h-[100vh] pt-[8rem] flex items-center">
          <div className="mb-[10px] flex items-center cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap bg-white dropShadow rounded-lg p-[50px]">
            <img
              src={"static/images/journey.svg"}
              alt="card"
              width={200}
              height={200}
              className="mr-[20px] landing-card-image"
            />
            <p className="font-bold text-[42px] leading-[55px] text-text m-0 flex-1">
            It currently offers resources on electricity access. <span className="font-bold text-Secondary px-[6px]">Resources</span>
                  on access to clean cooking, sustainable cooling and energy
                  efficiency will be added soon.
            </p>
          </div>
        </div>
        <div className="h-[100vh] pt-[8rem] inline-flex flex-wrap items-center" ref={ref}>
          <div className="mb-[10px] flex items-center cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap bg-white dropShadow rounded-lg p-[50px]">
            <img
              src={"static/images/guide.svg"}
              alt="card"
              width={200}
              height={200}
              className="mr-[20px] landing-card-image"
            />
            <p className="font-bold text-[42px] leading-[55px] text-text m-0 flex-1">
            Find <span className="font-bold text-Secondary px-[6px]">guidelines, tools and templates</span> on electricity access
                  relevant to your country and matched to your needs.
            </p>
          </div>
          <div
          className="w-[40%] absolute bottom-[6.8%] left-[30%] landingButton"
          onClick={HandleOpen}
          style={{opacity: showButton ? 1 : 0}}
        >
          <StartButton title={"Click here to start"} className="w-full" />
        </div>
        </div>
        {/* <div className="landing-card-inner w-full bg-white dropShadow rounded-lg	py-10 px-[20px] relative h-full">
          <h5 className="cardBigHeading font-normal font-bold	text-[53px] leading-[64.4px] text-center	select-none	uppercase text-text text-center	pb-[15px] mt-2">
            Sustainable
            <span className="text-Secondary px-[6px]"> Energy </span>
            for All <br />
            <span className="text-Primary pl-[6px]"> Knowledge</span> Hub
          </h5>
          <div className="flex flex-wrap justify-evenly relative landing-cards-wrap mb-[0px]">
            <div className="w-[45%] bg-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] landing-small-card">
              <div className="mb-[10px] flex items-start cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap">
                <img
                  src={"static/images/hub.svg"}
                  alt="card"
                  width={80}
                  height={80}
                  className="mr-[20px] landing-card-image"
                />
                <p className="font-normal text-[18px] leading-[34px] text-text m-0 flex-1 landing-card-text">
                  The SEforALL <span className="font-bold">Knowledge Hub</span>{" "}
                  is an interactive platform that supports policymakers in
                  developing policy and regulatory frameworks for
                  sustainable energy.
                </p>
              </div>
            </div>

            <div className="w-[45%] bg-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] landing-small-card">
              <div className="mb-[10px] flex items-start cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap">
                <img
                  src={"static/images/hub.svg"}
                  alt="card"
                  width={80}
                  height={80}
                  className="mr-[20px] landing-card-image"
                />
                <p className="font-normal text-[18px] leading-[34px] text-text m-0 flex-1 landing-card-text">
                  <span className="font-bold">The knowledge hub</span> provides
                  key resources for different steps in decision-making.
                </p>
              </div>
            </div>
          </div>
          <div className="divider-right" />
          <div className="flex flex-wrap justify-evenly relative landing-cards-wrap">
            <div className="w-[45%] bg-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] landing-small-card">
              <div className="divider-bottom mb-[30px]" />
              <div className="mb-[10px] flex items-start cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap">
                <img
                  src={"static/images/journey.svg"}
                  alt="card"
                  width={80}
                  height={80}
                  className="mr-[20px] landing-card-image"
                />
                <p className="font-normal text-[18px] leading-[34px] text-text m-0 flex-1 landing-card-text">
                  It currently offers resources on electricity access. Resources
                  on access to clean cooking, sustainable cooling and energy
                  efficiency will be added soon.
                </p>
              </div>
            </div>

            <div className="last-card w-[45%] bg-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] landing-small-card">
              <div className="divider-bottom mb-[30px]" />
              <div className="mb-[10px] flex items-start cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap">
                <img
                  src={"static/images/guide.svg"}
                  alt="card"
                  width={80}
                  height={80}
                  className="mr-[20px] landing-card-image"
                />
                <p className="font-normal text-[18px] leading-[34px] text-text m-0 flex-1 landing-card-text">
                  Find <span className="font-bold">guidelines, tools and templates</span> on electricity access
                  relevant to your country and matched to your needs.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div
          className="w-[40%] absolute bottom-[-32px] landing-button-wrap"
          onClick={HandleOpen}
        >
          <StartButton title={"Click here to start"} className="w-full" />
        </div> */}
      </div>
    </>
  );
};
export default TopCard;
