import React, { useState } from "react";

import { videosCard } from "constant";
import StartButton from "components/buttons/startButton";

import VideoCard from "./components/video";
import OtherToolsCard from "./components/otherTools";

const Feature = () => {
  const [isVideoCard, setIsVideoCard] = useState("");
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div className="bg-white py-6 drop-shadow-dropShadow feature-wrap">
        <div className="xsm:px-4 mobile:px-[100px] relative">
          <div className="flex pb-[0px] my-6 w-full xsm:flex-wrap large:flex-nowrap resources-card">
            <div className="w-full">
              <h6
                className="font-bold leading-10 text-large mb-[20px] xsm:text-medium text-darktext 
                            uppercase small:text-medium large:text-large center-content resources-heading"
              >
                Resources
              </h6>
              <p className="center-content not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-3 text-justify">
                All of the Knowledge Hub’s resources are available here for you
                to explore. Simply click on the button below to view all the
                resources and apply filters to narrow your results. You can also{" "}
                <b>download the filtered resources</b> or you can have them{" "}
                <b>sent to you via Email</b>.
              </p>
              <p className="center-content not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-2 mt-[10px] text-justify">
                Explore our database for tools and knowledge that will support
                you in developing policy and regulatory frameworks for
                sustainable energy. These resources are recommended by
                stakeholders across the energy sector. Additional resources
                related to clean cooking, sustainable cooling and energy
                efficiency are coming soon.
              </p>
            </div>
          </div>
          <div className="text-center mt-4 resources-button">
            <StartButton
              title={"Browse all resources"}
              onClick={() => window.open("/allresources", "_self")}
            />
          </div>
        </div>
      </div>
      <div className="pt-[35px] pb-[60px] bg-white tools-wrap">
        <div className="xsm:px-4 mobile:px-[100px] resources-cards-wrap">
          <div>
            <h6
              className="font-bold leading-10 text-large text-darktext 
              uppercase xsm:text-medium small:text-medium large:text-large mt-[0px] video-title center-content"
            >
              Other useful platforms
            </h6>
            <OtherToolsCard
              image="/static/images/electrifying-economies-ImResizer.jpg"
              title="Electrifying Economies"
              link="https://www.rockefellerfoundation.org/rf-microsites/electrifying-economies/"
              description={
                <>
                  Electrifying Economies is an information platform
                  demonstrating the role distributed energy will play in ending
                  energy poverty and catalyzing a green and equitable recovery
                  from the Covid-19 crisis. It has been jointly developed by
                  Rockefeller Foundation, Rocky Mountain Institute, and
                  Sustainable Energy for All.
                </>
              }
            />
            <OtherToolsCard
              image="/static/images/sas-ImResizer.png"
              title="SAS Knowledge Hub"
              link="https://www.ace-taf.org/sas-knowledge-hub/"
              description={
                <>
                  SAS Knowledge Hub is a digital repository by ACE TAF gathering
                  resources on stand-alone solar (SAS) systems, ranging from
                  e-waste and recycling, martket date to productive use. ACE TAF
                  is a programme funded by the UK Government Foreign,
                  Commonwealth and Development Office (FCDO) between 2018-2022.
                </>
              }
            />
            <OtherToolsCard
              image="/static/images/policy-ImResizer.png"
              title="Policy Knowledge Hub"
              link="https://www.gogla.org/policy-knowledge-hub"
              description={
                <>
                  GOGLA’s policy knowledge hub includes a digital repository for
                  off-grid solar energy laws, policies, and regulations and an
                  off-Grid VAT and duty tracker for solar companies, as well as
                  Country Briefs that review the status of sub-Saharan African
                  countries’ off-grid solar markets. The hub was developed by
                  GOGLA with input from Power Africa.
                </>
              }
            />
            <OtherToolsCard
              image="/static/images/nigeria-ImResizer.jpg"
              title="Nigeria Integrated Energy Planning Tool"
              link="http://nigeria-iep.sdg7energyplanning.org/"
              description={
                <>
                  The Nigeria Integrated Energy Planning Tool is a GIS-based
                  interactive data visualization platform to support Nigerian
                  policy makers and practitioners in their decision-making
                  process. It was developed by SEforALL, in collaboration with
                  the Federal Government of Nigeria, with support from The
                  Rockefeller Foundation.
                </>
              }
            />
            <OtherToolsCard
              image="/static/images/green-mini.png"
              title="The Green Mini-Grids Help Desk"
              link="https://greenminigrid.afdb.org/"
              description={
                <>
                  The Green Mini-Grids Help Desk provides mini-grid developers
                  and policymakers with practical information on mini-grids,
                  including market reports, links to industry stakeholders,
                  instruction guides, business forms and templates, and
                  financial models. It is implemented by AfDB, Sustainable
                  Energy for All Africa Hub, SEFA, Energy4Impact, and Inensus.
                </>
              }
            />
            <h6
              className="font-bold leading-10 text-large text-darktext 
                            uppercase xsm:text-medium small:text-medium large:text-large mt-[80px] video-title center-content"
            >
              VIDEOS
            </h6>
            <div className="flex items-stretch pt-0 pb-10 xsm:flex-wrap medium:flex-nowrap flex-wrap mr-[-10px] ml-[-10px] tools-card">
              {videosCard?.map((item, index) => (
                <div className="w-[33.3%] mb-[0px] p-[10px]" key={index}>
                  <VideoCard
                    link={item?.link}
                    title={item?.title}
                    setIsVideoCard={setIsVideoCard}
                    isVideoCard={isVideoCard}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
