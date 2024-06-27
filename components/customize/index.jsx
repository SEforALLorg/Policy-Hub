import React from "react";

import BlueButton from "components/buttons/blueButton";
import Loader from "components/loader";
import TooltipComponent from "components/tooltip";
import { useTranslation } from "react-i18next";
import { getRoute, putJourneyStep } from "../../utilities";
import { changingCardLogo } from "../../constant/changinglogo";
import { useRouter } from "next/router";
import { IoChevronBack } from "react-icons/io5";
import CustomizeScreenSkeleton from "../skeleton/customizeScreenSkeleton";

const Customize = ({
  onYes,
  questions,
  isFetchingQuestions,
  onNextQuestion,
  onReportsFind,
  setJourney,
  loader,
}) => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const firstQuestion = questions?.length && questions[0];
  const title = isEnglish
    ? firstQuestion?.attributes?.MainQuestion?.Question?.data?.attributes
        ?.Question
    : firstQuestion?.attributes?.MainQuestion?.Question?.data?.attributes
        ?.FrenchQuestion;
  const singleAnswer = firstQuestion?.attributes?.AddAnswer;
  const ToolTipText = isEnglish
    ? firstQuestion?.attributes?.ToolTipText
    : firstQuestion?.attributes?.FrenchToolTipText;
  let count = localStorage.getItem("count");

  const onAnswerClick = (i) => {
    const slug = i?.NextQuestion?.data?.attributes?.slug;
    const currentDate = new Date();
    localStorage.setItem("currentDate", currentDate);
    onYes();
    onNextQuestion(slug);
    onReportsFind(i);
    let payload = {
      question: title,
      answer: isEnglish ? i?.Answer : i?.FrenchAnswer,
    };
    setJourney({
      ...firstQuestion,
      answer: i?.Answer,
      frenchAnswer: i?.FrenchAnswer,
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
        pathname: `/${i18n.language}/${getRoute()}/${slug}`,
        query: {
          bigCard: true,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const resourceType = localStorage.getItem("ResourceType");

  return (
    <div
      className={`customize-card customize-modal-card p-10 bg-white rounded-2xl w-full m-auto tab:h-[770px] mobileMax:!h-[525px] ${
        i18n.language !== "fr" ? "h-full" : ""
      }`}
    >
      <div className="h-full flex flex-col">
      {isFetchingQuestions || loader ? (
        <div className="flex items-start flex-col h-full justify-center">
          <CustomizeScreenSkeleton />
        </div>
      ) : (
        <>
          <button
            className={`flex items-center mb-6 mobileMax:mb-2 p-0 mobileMax:max-h-[25px] resource-backBtn ${
              (resourceType === "sustainablecooling" ||
                resourceType === "electricity") &&
              "!text-[#60a8c7]"
            }`}
            onClick={() => router.push("/getresourcetypes")}
          >
            <IoChevronBack className="mr-0.5 mt-[-4px]" />
            {t("back")}
          </button>
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

            <h1 className={`customize-heading font-bold text-3xl leading-4xl text-text m-0 textColor ${ i18n.language == "fr" && resourceType === "cleancooking" ? "!text-[35px] !leading-[48px] tabMax:!text-[28px] tabMax:!leading-[38px]": null}`}>
              {t("AssessYourCountry")}
            </h1>
          </div>
          <div className="my-3 border-b-[4px] border-primary opacity-20" />
          <p className={`customize-title font-bold text-[45px] leading-[54px] text-text px-2.5 mb-[40px] tab:mt-4 pr-20 textColor ${ i18n.language == "fr" && resourceType === "cleancooking" ? "!text-[35px] !leading-[48px] tabMax:!text-[28px] tabMax:!leading-[38px]": null}`}>
            {title}
            {ToolTipText && (
              <TooltipComponent
                id={"customize"}
                content={ToolTipText}
                customizeStyle={"customizeStyle"}
              />
            )}
          </p>
          <div className="flex items-center flex-col max-w-[40%] w-full m-auto customize-buttons mobileMax:!max-w-full">
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
      </div>
    </div>
  );
};

export default Customize;
