import React from "react";
import StartButton from "components/buttons/startButton";

const TopCard = ({ HandleOpen }) => {
  return (
    <>
      <div className="flex items-center justify-end relative h-[100%] flex-col subCardFull">
        <div className="landing-card-inner w-full bg-white dropShadow rounded-lg	py-10 px-[20px] relative h-full">
          <h5 className="cardBigHeading font-normal font-bold	text-[53px] leading-[64.4px] text-center	select-none	uppercase text-text text-center	pb-[15px] mt-2">
            Sustainable
            <span className="text-Secondary px-[6px]"> Energy </span>
            for All <br />
            <span className="text-Primary pl-[6px]"> Knowledge</span> Hub
          </h5>
          <div className="flex flex-wrap justify-evenly relative landing-cards-wrap mb-[0px]">
            <div className="w-[46%] bg-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] landing-small-card">
              <div className="mb-[10px] flex items-start cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap">
                <img
                  src={"static/images/hub.svg"}
                  alt="card"
                  width={80}
                  height={80}
                  className="mr-[20px] landing-card-image"
                />
                <p className="font-normal text-[18px] leading-[30px] text-text m-0 flex-1 landing-card-text">
                  The SEforALL <span className="font-bold">Knowledge Hub</span>{" "}
                  is an interactive platform that supports policymakers in
                  developing policy and regulatory frameworks for sustainable
                  energy.
                </p>
              </div>
            </div>

            <div className="w-[46%] bg-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] landing-small-card">
              <div className="mb-[10px] flex items-start cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap">
                <img
                  src={"static/images/hub.svg"}
                  alt="card"
                  width={80}
                  height={80}
                  className="mr-[20px] landing-card-image"
                />
                <p className="font-normal text-[18px] leading-[30px] text-text m-0 flex-1 landing-card-text">
                  With the right policies and regulations, <span className="font-bold">affordable and clean
                  energy for all is possible</span>. The Knowledge Hub contains leading
                  resources, which have been identified by stakeholders from
                  across the energy sector.
                </p>
              </div>
            </div>
          </div>
          <div className="divider-right" />
          <div className="flex flex-wrap justify-evenly relative landing-cards-wrap">
            <div className="w-[46%] bg-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] landing-small-card">
              <div className="divider-bottom mb-[30px]" />
              <div className="mb-[10px] flex items-start cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap">
                <img
                  src={"static/images/journey.svg"}
                  alt="card"
                  width={80}
                  height={80}
                  className="mr-[20px] landing-card-image"
                />
                <p className="font-normal text-[18px] leading-[30px] text-text m-0 flex-1 landing-card-text">
                  <span className="font-bold">
                    It currently offers resources on electricity access
                  </span>
                  . Resources on access to clean cooking, sustainable cooling
                  and energy efficiency will be added soon.
                </p>
              </div>
            </div>

            <div className="last-card w-[46%] bg-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] landing-small-card">
              <div className="divider-bottom mb-[30px]" />
              <div className="mb-[10px] flex items-start cursor-pointer hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap">
                <img
                  src={"static/images/guide.svg"}
                  alt="card"
                  width={80}
                  height={80}
                  className="mr-[20px] landing-card-image"
                />
                <p className="font-normal text-[18px] leading-[30px] text-text m-0 flex-1 landing-card-text">
                  Find{" "}
                  <span className="font-bold">
                    guidelines, tools and templates
                  </span>{" "}
                  on electricity access relevant to your country and matched to
                  your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-[40%] absolute bottom-[-32px] landing-button-wrap"
          onClick={HandleOpen}
        >
          <StartButton title={"Click here to start"} className="w-full" />
        </div>
      </div>
    </>
  );
};
export default TopCard;
