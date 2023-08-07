import React from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";
import pageImage from "../../static/images/sustainable_cooling.svg";

const Footer = dynamic(() => import('components/footer'));
const Header = dynamic(() => import('components/header'));
const ALLReports = dynamic(() => import('components/resources'));
const pageDescription = "The Sustainable Energy Policy Hub guides policy making by providing best-in-class policy guidelines, reports, tools, & templates from countries across the globe." 
const Resources = () => {
  const { t } = useTranslation();
  return (
    <main>
      <Head>
        <title>{t("AllResourcesTitle")}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={t("AllResourcesTitle")} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={t("AllResourcesTitle")} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={pageImage} />
        {/* Additional meta tags or links can be added here */}
        <link rel="preconnect" href="https://kmit-policyhub.herokuapp.com" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>
      <div className="p-[10px]">
        <div className="custom-container mx-auto">
          <Header />
          <div className="card-box">
            <ALLReports />
          </div>
          <div className="pt-[40px]">
            <Footer />
          </div>
        </div>
      </div>
      <h3 className="fixed invisible z-0">
        BROWSE ALL RESOURCES the private sector, financial institutions, civil society, and
        philanthropies to drive faster action towards the achievement of</h3>
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
        In the past two weeks, global average temperatures have reached new
        highs, and over the past year, there have been record-breaking heatwaves
        in Iran, China, Mexico, North Africa, and many other regions. These
        extreme temperatures are putting lives at risk, especially for those
        living without access to cooling solutions. In the absence of reliable
        electricity to power cooling devices, or incomes sufficient to afford
        them, human health and safety is in danger due to heat stress. Economic
        activities and critical public services are also jeopardized by a lack
        of cooling, particularly in rural areas where cold chains are needed for
        food and medicines. Hence why sustainable cooling is a pressing
        development and climate change adaptation challenge. However, failure to
        adapt with sustainable solutions also poses long-term challenges to
        climate change mitigation efforts. Accounting for more than 7 precent of
        global emissions already, serving the unmet cooling needs of billions of
        people with inefficient solutions could cause up to a five-time increase
        in energy use for cooling and slow progress on global decarbonization
        efforts. SEforALL’s Chilling Prospects research series uses data to
        shine a light on the state of cooling access gaps for vulnerable
        populations. The 2023 analysis assesses cooling access risks across 77
        countries where vulnerable populations live and provides analysis based
        on factors of vulnerability, tracking progress year over year with the
        best available data as they become available.
      </p>
      <p className="fixed invisible z-0">
        The Chilling Prospects 2023 analysis finds that 1.12 billion people
        among the rural and urban poor are considered to be at high risk due to
        a lack of access to cooling, a decrease of approximately 20.4 million
        people compared to 2022. Driving the change is decreases in the rural
        poor population in Asia and the Middle East, including significant
        reductions in Bangladesh, India and Pakistan coupled with slow but
        steady declines in the urban poor population at risk in this region. In
        the assessed African countries, there is continued growth of the rural
        poor population due in part to slower than needed progress on
        electricity access and economic constraints in an inflationary
        environment. The data show that the most acute cooling access gaps are
        in poor rural areas of Sub-Saharan Africa and in the growing cities in
        high-temperature regions of the Global South. In the run-up to COP 28,
        this highlights the needs for new commitments towards pro-poor cooling
        innovation, integrating cooling with rural electrification planning, and
        harnessing the power of passive and nature-based cooling solutions for
        vulnerable urban dwellers.The 1.12 billion people at high risk is
        composed of an estimated 596 million women and 525 million men, with
        women making up approximately 52 percent of the population at high risk
        in rural areas and 54 percent in urban areas respectively.A lack of
        granular gender-disaggregated data poses serious difficulties to
        quantifying the cooling needs of women and men. Governments,
        philanthropies, private sector solution providers and development
        financiers can begin with systematic collection of gender-disaggregated
        data and use it to guide gender-responsive policy and investment.
      </p>
    </main>
  );
};

export default Resources;
