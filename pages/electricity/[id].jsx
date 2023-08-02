import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import { getQuestions } from "pages/api/questions";

import { useQuery } from "react-query";
import { getResourceFirstQuestion, getResources } from "../../utilities";
import { ELECTRICITYACCESS } from "../../constant";
import { useRouter } from "next/router";
import { electricityFirstQuestion } from "../../constant/firstQuestion";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("components/footer"));
const Header = dynamic(() => import("components/header"));
const Dashboard = dynamic(() => import("components/dashboard"));

const pageTitle = "Sustainable Energy | Policy Hub | Electricity";
const pageDescription =
  "The Sustainable Energy Policy Hub guides policymaking by providing best-in-class policy guidelines, reports, tools, & templates from countries across the globe.";

const pageImage = "/static/images/electricity_access.svg";
const Electricity = () => {
  const router = useRouter();
  const isDashboardOpen = false;
  const ref = useRef();
  const res = ELECTRICITYACCESS;
  const [isReload, setIsReload] = useState(false);

  const query = getResources(1);
  const {
    data: questions,
    isFetching: isFetchingQuestions,
    refetch,
  } = useQuery(["getQuestions", query], () => getQuestions(query), {
    enabled: false,
    onError: (err) => {
      // Handle the error (e.g., display an error message, log it, etc.)
      console.error("Error fetching questions:", err);
    },
  });
  const defaultQuestion = getResourceFirstQuestion();
  useEffect(() => {
    if (router?.query?.bigCard === "true" && !isReload) {
      setIsReload(true);
      refetch();
    } else if (router?.query?.id && !isReload && !questions) {
      const questionId = Number(router?.query?.id);
      if (questionId !== Number(defaultQuestion)) {
        setIsReload(true);
        router.push(`/electricity/${defaultQuestion}`);
      }
    }
  }, [router]);
  return (
    <main id="fullWrap" ref={ref} className={"electricity_access"}>
      <Head>
        <title>Sustainable Energy | Policy Hub | Electricity</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={pageImage} />
        {/* Additional meta tags or links can be added here */}
        <link rel="preconnect" href="https://kmit-policyhub.herokuapp.com" />
      </Head>
      <div className="mobile:p-2.5 xsm:p-[5px]">
        <div className="custom-container mx-auto">
          <div
            className={`px-[1rem] py-2 ${
              !isDashboardOpen ? "header-title-wrap" : ""
            }`}
          >
            <Header selectedRes={res} />
          </div>
          <div>
            <Dashboard
              questions={
                questions || {
                  data: {
                    data: [electricityFirstQuestion],
                  },
                }
              }
              isFetchingQuestions={isFetchingQuestions}
              setIsBigCard={() => {
                setIsReload(true);
                refetch();
              }}
              resources={[]}
              selectedRes={() => {}}
              footerRes={res}
              setIsOpen={() => {}}
              isPage={true}
            />
          </div>
          <div className="pt-[40px]">
            <Footer footerRes={res} />
          </div>
        </div>
      </div>
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
        energy sector.
      </p>
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
        energy sector.
      </p>
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
        energy sector.
      </p>
    </main>
  );
};
export default Electricity;
