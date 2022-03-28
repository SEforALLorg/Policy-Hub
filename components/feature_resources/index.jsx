import React, { useState } from "react";

import StartButton from "components/buttons/component/startButton/StartButton";
import ReviewCard from "./components/reviewCard";
import VideoCard from "./components/video";
import OtherToolsCard from "./components/otherTools";
import { videosCard } from "../../constant";

const Feature = () => {
  const [isTitle, setIsTitle] = useState('')
  const [isVideoCard, setIsVideoCard] = useState('')
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
              <p className="not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-2 mt-[10px] ">
                You can also download the filtered resources or you can have
                them sent to you via Email.
              </p>
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
            <div className="flex items-stretch pt-6 pb-10 xsm:flex-wrap medium:flex-nowrap flex-wrap mr-[-10px] ml-[-10px]">
              {videosCard?.map((item, index) => (
                <div className="w-[33.3%] mb-[0px] p-[10px] cursor-pointer" key={index}>
                  <VideoCard
                    link={item?.link}
                    title={item?.title}
                    description={item?.description}
                    setIsVideoCard={setIsVideoCard}
                    isVideoCard={isVideoCard}
                  />
                </div>
              ))}
            </div>
            <h6
              className="font-bold leading-10  m-0 mt-3 text-darktext uppercase xsm:text-tiny small:text-medium 
            large:text-large"
            >
              Other Tools
            </h6>
            <div className="flex items-start pt-6 pb-[0px] xsm:flex-wrap medium:flex-nowrap">
              <div className="xsm:mr-0 medium:mr-5 w-[33%]">
                <OtherToolsCard
                  image="/static/images/electrifying-economies.png"
                  title="Electrifying Economies"
                  link="https://www.rockefellerfoundation.org/rf-microsites/electrifying-economies/"
                  description={
                    <>
                      Electrifying economies is a scroll-based narrative,
                      developed by Rockefeller Foundation, Rocky Mountain
                      Institute, and Sustainable Energy for All, to illustrate
                      the role of distributed energy in providing affordable,
                      reliable power for all.
                      <br />
                      The Electrifying Economies project demonstrates the role
                      distributed energy will play in ending energy poverty and
                      catalyzing a green and equitable recovery from the
                      Covid-19 crisis. It draws on the latest data and research
                      from around the world to show how distributed renewables
                      can provide sustainable, affordable, and reliable power
                      for all. The project provides information to support
                      policy makers and investors in taking action today, to
                      realize this potential.
                    </>
                  }
                  isTitle={isTitle}
                  setIsTitle={setIsTitle}
                />
              </div>
              <div className="xsm:mr-0 medium:mr-5 w-[33%]">
                <OtherToolsCard
                  image="/static/images/sas.png"
                  title="SAS Knowledge Hub"
                  link="https://www.ace-taf.org/sas-knowledge-hub/"
                  description={
                    <>
                      This is a repository of resource materials on stand-alone
                      solar (SAS) systems. The Africa Clean Energy Technical
                      Assistance Facility (ACE TAF) has worked with off-grid
                      sector stakeholders to ensure the resources are not
                      duplicative.
                      <br />
                      ACE TAF is a programme funded by the UK Government
                      Foreign, Commonwealth and Development Office (FCDO)
                      between 2018-2022. It aims to catalyse a market- based
                      approach for private sector delivery of renewable energy
                      electrification technologies, with a focus on high quality
                      stand-alone solar systems.
                    </>
                  }
                  isTitle={isTitle}
                  setIsTitle={setIsTitle}
                />
              </div>
              <div className="xsm:mr-0 medium:mr-5 w-[33%]">
                <OtherToolsCard
                  image="/static/images/policy.png"
                  title="Policy Knowledge Hub"
                  link="https://www.gogla.org/policy-knowledge-hub"
                  description={
                    <>
                      The Off-Grid solar sector has significant potential to
                      contribute towards achieving energy access targets,
                      promoting socio-economic development and enhancing climate
                      mitigation/adaptation efforts globally. Despite this, many
                      low energy access countries are yet to create an enabling
                      environment for the sector with supportive legal, policy
                      and regulatory frameworks. Moreover, the available policy
                      frameworks regulating the sector are not easily accessible
                      as they are scattered across an expansive list of laws and
                      policies regulating areas such as taxation, quality
                      assurance, data protection, consumer protection, e-waste
                      etc. It is against this background that GOGLA has
                      developed a policy knowledge hub.
                    </>
                  }
                  isTitle={isTitle}
                  setIsTitle={setIsTitle}
                />
              </div>
            </div>
            <div className="flex items-start pt-6 pb-10 xsm:flex-wrap medium:flex-nowrap">
              <div className="xsm:mr-0 medium:mr-5 w-[33%]">
                <OtherToolsCard
                  image="/static/images/nigeria.png"
                  title="Nigeria Integrated Energy Planning Tool"
                  link="http://nigeria-iep.sdg7energyplanning.org/"
                  description={
                    <>
                      The Nigeria Integrated Energy Planning Tool is an online,
                      interactive data visualization platform that brings
                      together several layers of data to help Nigerian policy
                      makers and practitioners make more informed decisions
                      about their strategies and operations to advance energy
                      access in the country.
                      <br />
                      The tool is powered by extensive geospatial modelling and
                      optimization and provides actionable intelligence for
                      private sector and government stakeholders to plan the
                      expansion of least-cost access to electricity and clean
                      cooking. The tool presents interactive and downloadable
                      data from Nigeria based on integrated energy planning
                      analyses to achieve universal energy access in the country
                      by 2030.
                    </>
                  }
                  isTitle={isTitle}
                  setIsTitle={setIsTitle}
                />
              </div>
              <div className="xsm:mr-0 medium:mr-5 w-[33%]">
                <OtherToolsCard
                  image="/static/images/toolbar.png"
                  title="A Toolbox of African Model Mini-Grid Regulations"
                  link="https://www.get-transform.eu/a-toolbox-of-african-model-mini-grid-regulations/"
                  description={
                    <>
                      The African Forum of Utility Regulators (AFUR) and
                      GET.transform have entered a partnership to develop a
                      toolbox of model mini-grid regulations. The joint activity
                      forms part of the African Union Mini-Grid Development Plan
                      and the Action on Rural Electrification and
                      Industrialisation and aims to provide resources, peer
                      exchange and regulatory best practices that enable scaled
                      up mini-grid investment.
                    </>
                  }
                  isTitle={isTitle}
                  setIsTitle={setIsTitle}
                />
              </div>
              <div className="xsm:mr-0 medium:mr-5 w-[33%]">
                <OtherToolsCard
                  image="/static/images/energy.png"
                  title="Energy Access Explorer Beta"
                  link="https://www.energyaccessexplorer.org/"
                  description={
                    <>
                      Energy Access Explorer provides the data and tools
                      necessary to create a future where all people have access
                      to affordable, reliable and modern energy.
                      <br />
                      Energy Access Explorer is an online, open-source,
                      interactive platform that uses mapping to visualize the
                      state of energy access in unserved and underserved areas.
                      It analyzes credible and public data to make the
                      connection between the demand and supply of energy.
                      Individuals can create custom analyses on Energy Access
                      Explorer to identify and prioritize areas where energy
                      markets can be expanded.
                    </>
                  }
                  isTitle={isTitle}
                  setIsTitle={setIsTitle}
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
