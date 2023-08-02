import React, { useCallback } from "react";
import StartButton from "components/buttons/startButton";
import { useTranslation } from "react-i18next";
import { isMobile } from "../../../utilities";

const TopCard = ({ HandleOpen }) => {
  const { t } = useTranslation();

  const handleButtonClick = useCallback(() => {
    HandleOpen();
  }, [HandleOpen]);
  return (
    <div className="customize-card p-[1.8rem] py-[2.5rem] h-[auto] bg-white rounded-2xl w-[80%] relative mt-[3rem] mb-[1rem] mx-[auto] SustainableBox">
      <div className="items-center customize-header">
        <h1 className="text-[#000000b3] font-bold text-[35px] leading-[50px] text-center uppercase">
          {t("Sustainable")}
          <span className="text-Secondary"> {t("Energy")} </span>
          <span className="text-Primary"> {t("Policy")}</span> {t("Hub")}
        </h1>
      </div>
      <div id="container-main" className={`flex my-[1.5rem] `}>
        <div className="container-box w-[50%]">
          <div className="flex flex-col h-[50%] ">
            <div className="bg-white-900 mobile-card-width items-start card-section-wrap hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap p-[20px] flex h-[100%]">
              <img
                className="w-[16%] mr-[8px] mt-[5px]"
                src="../../../static/images/hub.svg"
                data-src="../../../static/images/hub.svg"
                alt="hub_logo"
                width={isMobile() ? "65px" : "70px"}
                height={isMobile() ? "65px" : "70px"}
              />
              <p className="text-[15px] leading-[50px] text-[#000000a1] m-0 flex-1 text-left">
                {t("PlatformThatSupports")}
              </p>
            </div>
            <div className="mx-[auto] w-[75%] border-b-[2px] border bg-black opacity-[1]" />
          </div>
          <div className="flex flex-col h-[50%]">
            <div className="second-container bg-white-900 mobile-card-width card-section-wrap hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap p-[20px] flex items-start h-[50%] mt-[2rem]">
              <img
                className="w-[14%] mr-[8px] mt-[4px]"
                src="../../../static/images/journey.svg"
                data-src="../../../static/images/journey.svg"
                alt="journey_logo"
                width={isMobile() ? "65px" : "70px"}
                height={isMobile() ? "65px" : "70px"}
              />
              <p className="text-[12px] leading-[55px] text-[#000000a1] m-0 flex-1 text-left">
                {t("ResourcesOnAccess")}
              </p>
            </div>
            <div className="divider-hide mx-[auto] w-[75%] border-b-[2px] border bg-black opacity-[1]" />
          </div>
        </div>
        <div className="divider w-[1px] border-b-[4px] border opacity-[1]" />
        <div className="container-box w-[50%]">
          <div className="third-container flex flex-col h-[50%]">
            <div className="bg-white-900 mobile-card-width items-start card-section-wrap hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap p-[20px] flex h-[100%]">
              <img
                className="w-[14%] mr-[8px] mt-[-8px]"
                src="../../../static/images/sustainable_hub.png"
                data-src="../../../static/images/sustainable_hub.png"
                alt="sustainable_hub_logo"
                width={isMobile() ? "65px" : "70px"}
                height={isMobile() ? "65px" : "70px"}
              />
              <p className="text-[12px] leading-[55px] text-[#000000a1] m-0 flex-1 text-left">
                {t("TheKnowledgeHub")}
              </p>
            </div>
            <div className="mx-[auto] w-[75%] border-b-[2px] border bg-black opacity-[1]" />
          </div>
          <div className="last-card bg-white-900 mobile-card-width items-start card-section-wrap hover:scale-[1.06] transition-all duration-1000 card-inner-small-wrap p-[20px] flex h-[50%] mt-[2rem]">
            <img
              className="w-[16%] mr-[8px] mt-[4px]"
              src="../../../static/images/guide.svg"
              data-src="../../../static/images/guide.svg"
              alt="guide_logo"
              width={isMobile() ? "65px" : "70px"}
              height={isMobile() ? "65px" : "70px"}
            />
            <p className="text-[12px] leading-[55px] text-[#000000a1] m-0 flex-1 text-left">
              {t("OnElectricity")}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col max-w-[40%] m-auto customize-buttons">
        <div
          className="w-[49%] absolute bottom-[-28px] left-[26%] landing-button"
          onClick={handleButtonClick}
        >
          <StartButton
            title={t("ClickHereToStart")}
            className="w-full pt-[16px] pb-[12px] "
          />
        </div>
      </div>
      <p className="absolute invisible">
        Sustainable Energy for All (SEforALL) is an international organization
        that works in partnership with the United Nations and government
        leaders, the private sector, financial institutions, civil society, and
        philanthropies to drive faster action towards the achievement of
        Sustainable Development Goal 7 (SDG7) access to affordable, reliable,
        sustainable, and modern energy for all by 2030 in line with the Paris
        Agreement on climate. To learn more about SEforALL, click here. The
        Sustainable Energy Policy Hub is an interactive platform providing
        sustainable energy policymakers and practitioners with off-the-shelf
        guidelines, tools, templates and cases on energy policy and regulation
        published by international organizations and thought leaders. In its
        current phase, the hub offers essential resources on electricity access,
        access to cleaner cooking, sustainable cooling, and energy efficiency.
        An additional pillar on renewable energy will be added soon.The
        Sustainable Energy Policy Hub is a collaborative work of SEforALL and
        its partners and it managed by SEforALL. For any media requests, please
        contact: Media@SEforALL.org Keep up-to-speed with what's happening at
        the Sustainable Energy Policy Hub and across the sustainable energy
        movement. We'll send you our regular updates, plus special news and
        event invites. If you would like to recommend a publication to be
        included in the SEforALL Policy Hub, please send us an e-mail at
        PolicyHub@seforall.org. All of the Policy Hub’s resources are available
        here for you to explore. Simply click on the button below to view all
        the resources and apply filters to narrow your results. You can also
        download the filtered resources or you can have them sent to you via
        Email. Explore our database for tools and knowledge that will support
        you in developing policy and regulatory frameworks for sustainable
        energy. These resources are recommended by stakeholders across the
        energy sector.Sustainable Energy for All (SEforALL) is an international organization
        that works in partnership with the United Nations and government
        leaders, the private sector, financial institutions, civil society, and
        philanthropies to drive faster action towards the achievement of
        Sustainable Development Goal 7 (SDG7) access to affordable, reliable,
        sustainable, and modern energy for all by 2030 in line with the Paris
        Agreement on climate. To learn more about SEforALL, click here. The
        Sustainable Energy Policy Hub is an interactive platform providing
        sustainable energy policymakers and practitioners with off-the-shelf
        guidelines, tools, templates and cases on energy policy and regulation
        published by international organizations and thought leaders. In its
        current phase, the hub offers essential resources on electricity access,
        access to cleaner cooking, sustainable cooling, and energy efficiency.
        An additional pillar on renewable energy will be added soon.The
        Sustainable Energy Policy Hub is a collaborative work of SEforALL and
        its partners and it managed by SEforALL. For any media requests, please
        contact: Media@SEforALL.org Keep up-to-speed with what's happening at
        the Sustainable Energy Policy Hub and across the sustainable energy
        movement. We'll send you our regular updates, plus special news and
        event invites. If you would like to recommend a publication to be
        included in the SEforALL Policy Hub, please send us an e-mail at
        PolicyHub@seforall.org. All of the Policy Hub’s resources are available
        here for you to explore. Simply click on the button below to view all
        the resources and apply filters to narrow your results. You can also
        download the filtered resources or you can have them sent to you via
        Email. Explore our database for tools and knowledge that will support
        you in developing policy and regulatory frameworks for sustainable
        energy. These resources are recommended by stakeholders across the
        energy sector.Sustainable Energy for All (SEforALL) is an international organization
        that works in partnership with the United Nations and government
        leaders, the private sector, financial institutions, civil society, and
        philanthropies to drive faster action towards the achievement of
        Sustainable Development Goal 7 (SDG7) access to affordable, reliable,
        sustainable, and modern energy for all by 2030 in line with the Paris
        Agreement on climate. To learn more about SEforALL, click here. The
        Sustainable Energy Policy Hub is an interactive platform providing
        sustainable energy policymakers and practitioners with off-the-shelf
        guidelines, tools, templates and cases on energy policy and regulation
        published by international organizations and thought leaders. In its
        current phase, the hub offers essential resources on electricity access,
        access to cleaner cooking, sustainable cooling, and energy efficiency.
        An additional pillar on renewable energy will be added soon.The
        Sustainable Energy Policy Hub is a collaborative work of SEforALL and
        its partners and it managed by SEforALL. For any media requests, please
        contact: Media@SEforALL.org Keep up-to-speed with what's happening at
        the Sustainable Energy Policy Hub and across the sustainable energy
        movement. We'll send you our regular updates, plus special news and
        event invites. If you would like to recommend a publication to be
        included in the SEforALL Policy Hub, please send us an e-mail at
        PolicyHub@seforall.org. All of the Policy Hub’s resources are available
        here for you to explore. Simply click on the button below to view all
        the resources and apply filters to narrow your results. You can also
        download the filtered resources or you can have them sent to you via
        Email. Explore our database for tools and knowledge that will support
        you in developing policy and regulatory frameworks for sustainable
        energy. These resources are recommended by stakeholders across the
        energy sector.
      </p>
    </div>
  );
};
export default TopCard;
