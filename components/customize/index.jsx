import React from "react";

import BlueButton from "components/buttons/blueButton";
import Loader from "components/loader";
import TooltipComponent from "components/tooltip";
import { useTranslation } from "react-i18next";
import { getRoute, putJourneyStep } from "../../utilities";
import { changingCardLogo } from "../../constant/changinglogo";
import { useRouter } from "next/router";

const Customize = ({
  onYes,
  questions,
  isFetchingQuestions,
  onNextQuestion,
  onReportsFind,
  setJourney,
  loader
}) => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const firstQuestion = questions?.length && questions[0];
  const title = isEnglish ? 
    firstQuestion?.attributes?.MainQuestion?.Question?.data?.attributes?.Question : firstQuestion?.attributes?.MainQuestion?.Question?.data?.attributes?.FrenchQuestion;
  const singleAnswer = firstQuestion?.attributes?.AddAnswer;
  const ToolTipText = isEnglish ? firstQuestion?.attributes?.ToolTipText : firstQuestion?.attributes?.FrenchToolTipText;
  let count = localStorage.getItem("count");

  const onAnswerClick = (i) => {
    const currentDate = new Date();
    localStorage.setItem("currentDate", currentDate);
    onYes();
    onNextQuestion(i?.NextQuestion?.data?.id);
    onReportsFind(i);
    let payload = {
      question: title,
      answer: isEnglish ? i?.Answer : i?.FrenchAnswer,
    };
    setJourney({
      ...firstQuestion,
      answer: i?.Answer, 
      frenchAnswer: i?.FrenchAnswer
    });
    let existing = JSON.parse(localStorage.getItem("userInfo"));
    let existingJourney = existing?.Journey;
    if (
      (existingJourney && Object.values(existingJourney)?.length) ||
      (count && count > 1)
    ) {
      let journey = {
        ...existingJourney,
        [currentDate]: [payload],
      };
      putJourneyStep(journey);
    } else if (count == 1) {
      let journey = {
        [currentDate]: [payload],
      };
      putJourneyStep(journey);
    }
    router.push(
      {
        pathname: `/${i18n.language}/${getRoute()}/${i?.NextQuestion?.data?.id}`,
        query: {
          bigCard: true,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div
      className={`customize-card p-10 bg-white rounded-2xl w-full  m-auto ${
        i18n.language !== "fr" ? "h-full" : ""
      }`}
    >
      {isFetchingQuestions || loader ? (
        <div className="flex items-center flex-col h-full justify-center">
          <Loader height={80} width={80} />{" "}
        </div>
      ) : (
        <>
          <div className="flex items-center customize-header">
            {changingCardLogo?.map((key) => {
              if (
                localStorage.getItem("ResourceType") === Object.keys(key)?.[0]
              ) {
                return (
                  <img
                    className="tabMax:w-[200px] laptop:w-[230px] h-[157px] object-contain object-contain-height mr-5"
                    src={Object.values(key)?.[0]}
                    alt="card"
                    key={"card-image"}
                    width={"65px"}
                    height={"45px"}
                  />
                );
              }
            })}

            <h1 className="customize-heading font-bold text-3xl leading-4xl text-text m-0 textColor">
              {t("AssessYourCountry")}
            </h1>
          </div>
          <div className="my-3 border-b-[4px] border-primary opacity-20" />
          <p className="customize-title font-bold text-[45px] leading-[54px] text-text px-2.5 mb-[40px] mt-7 pr-20 textColor">
            {title}
            {ToolTipText && (
              <TooltipComponent
                id={"customize"}
                content={ToolTipText}
                customizeStyle={"customizeStyle"}
              />
            )}
          </p>
          <div className="flex items-center flex-col max-w-[40%] m-auto customize-buttons">
            {singleAnswer?.map((i) => (
              <BlueButton
                title={isEnglish ? i?.Answer : i?.FrenchAnswer}
                onClick={() => onAnswerClick(i)}
                key={isEnglish ? i?.Answer : i?.FrenchAnswer}
                className="mb-[20px] h-[80px] !text-[23px]"
              />
            ))}
          </div>
        </>
      )}
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

export default Customize;
