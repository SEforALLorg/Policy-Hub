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
          {/* <h4 className="font-bold leading-[46px] mobile:text-base medium:text-large m-0 text-Primary uppercase extrasmall:text-xmd xsm:text-[19px]">
            Resources{" "}
          </h4> */}
          <div className="flex pb-[25px] my-6 border-b-[2.4px] border-borderprimary w-full xsm:flex-wrap large:flex-nowrap">
            {/* <div className="sm:mr-0 large:mr-5 xsm:w-full large:w-max large:mb-0 xsm:mb-5 screen:min-w-[359px] w-full screen:h-[271px]">
              <img
                src={"/static/images/mustardflower.svg"}
                alt="mustard"
                className="xsm:w-full large:w-max "
              />
            </div> */}
            <div className="w-full">
              <h5
                className="font-bold medium:leading-10 medium:text-[33px] mb-[20px]
                             xsm:text-sml xsm:leading-6 extrasmall:text-xmd extrasmall:leading-7"
              >
                Regional Certification Guidelines For Off-Grid Solar
                Photovoltaic Technicians
              </h5>
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
              {/* <div className="flex justify-center mt-[29px]">
                <button
                  className="bg-Primary rounded-[60px] text-normal text-center 
                           leading-5 border-2 border-transparent white-text outline-none font-bold
                           hover:text-Primary hover:bg-Primary hover:border-2 hover:border-Primary ease-linear
                           transition-all duration-500 h-[32px] w-[183px] hover:text-Primary hover:bg-white
                           hover:border-Primary"
                  onClick={() => window.open("/resources", "_self")}
                >
                  Go To Report
                </button>
              </div> */}
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
            {/* <ReviewCard
                hideText={true}
                date={"12/02/2022"}
                src={"/static/images/bulb.svg"}
                heading={
                  "Regional Certification Guidelines For Off-Grid Solar Photovoltaic Technicians"
                }
                subheading="Lorem ipsum dolor sit amet, consectetur..."
                showStar={true}
              /> */}
            {/* <div className="w-full xsm:mt-6 medium:mt-0">
              <ReviewCard
                date={"12/02/2022"}
                src={"/static/images/windfan.svg"}
                heading={
                  "Accelerating Mini-Grid Deployment in Sub-Saharan Africa - Lessons from Tanzania "
                }
                subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum ..."
                showStar={true}
              />
            </div> */}
          </div>
          <div className="text-center mt-10">
            <StartButton
              title={"Browse all resources"}
              onClick={() => window.open("/resources", "_self")}
            />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-end relative">
        <div className="bg-lightBg py-[60px] ">
          <div className="xsm:px-4 mobile:px-[100px]">
            <div className="flex justify-between items-center xsm:flex-wrap medium:flex-nowrap">
              <div className="xsm:w-full medium:w-[49%]">
                <h6
                  className="font-bold leading-7 large:text-[28px] mb-[27px]
                 text-center mb-4 text-Primary uppercase extrasmall:text-medium xsm:text-small"
                >
                  Most Popular
                </h6>
                <PopularResorces
                  src={"/static/images/sun.svg"}
                  title="Funding the Sun: New Paradigms for Financing Off-Grid Solar Companies"
                />
                <PopularResorces
                  src={"/static/images/building.svg"}
                  title="Bangladesh: Rural Electrification And
                                 Renewable Energy Development Project: Environmental And Social Management Framework"
                />
                <PopularResorces
                  src={"/static/images/lights.svg"}
                  title="Living In The Light: The Bangladesh Solar Home Systems Story"
                />
                <div className="flex justify-center mt-3">
                  <ViewButton title={"View All"} />
                </div>
              </div>
              <div className="xsm:w-full xsm:mt-6 medium:mt-0 medium:w-[49%]">
                <h6 className="font-bold leading-7 text-center extrasmall:text-medium xsm:text-small large:text-[28px] mb-[27px]  mb-4 text-Primary uppercase">
                  Recently added
                </h6>
                <PopularResorces
                  src={"/static/images/windtower.svg"}
                  title="Measuring Energy Access in India - Insights 
                                from applying a multi-tier framework in cooking energy and household electricity"
                />
                <PopularResorces
                  src={"/static/images/building.svg"}
                  title="Off-Grid Appliance Market Survey 2020"
                />
                <PopularResorces
                  src={"/static/images/lights.svg"}
                  title="Strategies for microgrid operation under real-world conditions"
                />
                <div className="flex justify-center mt-3">
                  <ViewButton title={"View All"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute small:-bottom-[30px] xsm:-bottom-[18px]">
          <StartButton title={"Browse all resources"} onClick={() => window.open("/resources", "_self")} />
        </div>
      </div> */}
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
              Similar tools
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
