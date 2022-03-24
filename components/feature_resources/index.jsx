import React from "react";

import StartButton from "components/buttons/component/startButton/StartButton";
import ReviewCard from "./components/reviewCard";
import VideoCard from "./components/video";

const Feature = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div className="bg-white py-6 drop-shadow-dropShadow">
        <div className="xsm:px-4 mobile:px-[100px] relative">
          <div className="flex pb-[25px] my-6 border-b-[2.4px] border-borderprimary w-full xsm:flex-wrap large:flex-nowrap">
            <div className="w-full">
              <h6
                className="font-bold leading-10 text-large mb-[20px] text-darktext 
                            uppercase xsm:text-tiny small:text-medium large:text-large"
              >
                Resources
              </h6>
              <p className="not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-4">
                All of the Knowledge Hub’s resources are available here for you
                to explore. Simply click on the button below to view all the
                resources and apply filters to narrow your results.
              </p>
              <p className="not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-2 mt-[10px] ">You can also download the filtered resources or you can have
                them sent to you via Email.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <StartButton
              title={"Browse all resources"}
              onClick={() => window.open("/allresources", "_self")}
            />
          </div>
        </div>
      </div>
      <div className="pt-[35px] pb-[60px] bg-white">
        <div className="xsm:px-4 mobile:px-[100px]">
          <div>
            <h6
              className="font-bold leading-10 text-large m-0 text-darktext 
                            uppercase xsm:text-tiny small:text-medium large:text-large"
            >
              VIDEOS
            </h6>
            <div className="flex items-center pt-6 pb-10 xsm:flex-wrap medium:flex-nowrap">
              <div className="xsm:mr-0 medium:mr-5 ">
                <VideoCard />
              </div>
              <div className="xsm:mr-0 medium:mr-5 xsm:mt-5 medium:mt-0">
                <VideoCard />
              </div>
              <div className="xsm:mt-5 medium:mt-0">
                <VideoCard />
              </div>
            </div>
            <h6
              className="font-bold leading-10  m-0 mt-3 text-darktext uppercase xsm:text-tiny small:text-medium 
            large:text-large"
            >
              Other Tools
            </h6>
            <div className="mt-[25px] flex justify-between xsm:flex-wrap medium:flex-nowrap">
              <div className="xsm:mr-0 medium:mr-4 w-full ">
                <ReviewCard
                  date={"12/02/2022"}
                  src={"/static/images/windfan.svg"}
                  heading={"Headline"}
                  subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum ..."
                  showStar={false}
                />
              </div>
              <div className="xsm:mt-5 medium:mt-0 w-full">
                <ReviewCard
                  date={"12/02/2022"}
                  src={"/static/images/windfan.svg"}
                  heading={"Headline"}
                  subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum ..."
                  showStar={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
