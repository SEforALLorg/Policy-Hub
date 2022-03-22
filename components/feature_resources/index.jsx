import React from "react";

import StartButton from "components/buttons/component/startButton/StartButton";
import ReviewCard from "./components/reviewCard";
import PopularResorces from "./components/popularResorces";
import ViewButton from "../buttons/viewall";
import VideoCard from "./components/video";
import Loader from "../loader";

const Feature = ({ reports, isFetchingReports }) => {
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
              <p className="mb-0 font-normal leading-[18px] text-boldtext m-0 text-[15px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent porta venenatis velit sit amet posuere. Nam interdum
                augue at quam consequat semper. Nam ac tempor ex. In hac
                habitasse platea dictumst. Aenean blandit sollicitudin auctor.
                Nulla aliquet magna at purus lacinia gravida. Pellentesque
                vestibulum sit amet nisl eget tempus. In ut magna blandit,
                vulputate leo in, mattis erat. Proin efficitur lectus vel dolor
                fermentum, ac ultricies neque viverra. Ut sed lectus sed enim
                porta varius sed nec ipsum. Quisque a urna nulla. Aliquam tortor
                ligula, rutrum mollis urna eu, sodales interdum elit. Donec
                interdum leo.
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-6 ml-[-18px] xsm:flex-wrap medium:flex-nowrap">
            {isFetchingReports ? (
              <div className="text-center w-full">
                <Loader />
              </div>
            ) : (
              reports?.slice(0, 2).map((item, index) => {
                console.log(item, "item");

                return (
                  <div className="w-full xsm:mt-6 medium:mt-0 pl-5" key={index}>
                    <ReviewCard
                      hideText={true}
                      date={"12/02/2022"}
                      src={
                        index === 0
                          ? "/static/images/bulb.svg"
                          : "/static/images/windfan.svg"
                      }
                      heading={item?.attributes?.ReportName}
                      subheading={item?.attributes?.Description}
                      showStar={true}
                      hideDate={true}
                    />
                  </div>
                );
              })
            )}
          </div>
          <div className="text-center mt-10">
            <StartButton
              title={"Browse all resources"}
              onClick={() => window.open("/resources", "_self")}
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
