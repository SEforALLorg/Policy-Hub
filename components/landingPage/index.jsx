import React, { useState, useEffect, useCallback } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router.js";

import { ErrorNotify } from "components/notification";
import TopCard from "./topCard/index.jsx";
import Dashboard from "../dashboard";
import { landingPage } from "../../utilities/index.jsx";
import { getResource } from "../../pages/api/resources.js";

const LandingPage = ({ setIsDashboardOpen, selectedRes, footerRes }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isBigCard, setIsBigCard] = useState(false);
  const [resources, setResources] = useState();

  useEffect(() => {
    if (localStorage.getItem("UserId")) {
      landingPage();
    }
  }, []);

  useEffect(() => {
    if (router?.query?.restart === "true") {
      setIsOpen(true);
    }
  }, [router]);

  useEffect(() => {
    if (isOpen) {
      setIsDashboardOpen(true);
    }
  }, [isOpen]);

  const {
    data: resource,
    isFetching: isFetchingResources,
    refetch,
  } = useQuery(["resource"], getResource, {
    enabled: false,
    onError: (error) => {
      ErrorNotify(error?.response?.data?.error?.message);
    },
  });

  const handleOpen = useCallback(() => {
    refetch();
    setIsOpen(true);
  }, []);

  const allResource = resource?.data?.data;

  useEffect(() => {
    setResources(allResource);
  }, [allResource]);

  return (
    <>
      <div>
        {!isOpen && <TopCard HandleOpen={handleOpen} />}
        {isOpen && (
          <div
            className={`${
              !isBigCard ? "h-[80vh]" : ""
            }  flex relative items-center	justify-center bottom-view`}
            id="bottom-view"
          >
            <Dashboard
              questions={[]}
              isFetchingQuestions={isFetchingResources}
              setIsBigCard={setIsBigCard}
              resources={resources}
              selectedRes={selectedRes}
              footerRes={footerRes}
              setIsOpen={setIsOpen}
            />
          </div>
        )}
        <p className="fixed invisible z-0">
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
    </>
  );
};

export default LandingPage;
