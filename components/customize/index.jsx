import React from "react";

import BlueButton from "components/buttons/blueButton";
import Loader from "components/loader";
import TooltipComponent from "components/tooltip";
import { useTranslation } from "react-i18next";
import { putJourneyStep } from "../../utilities";
import { changingCardLogo } from "../../constant/changinglogo";

const Customize = ({
  onYes,
  questions,
  isFetchingQuestions,
  onNextQuestion,
  onReportsFind,
  setJourney,
  // setCurrentDate
}) => {
  const { t, i18n } = useTranslation();
  const language = i18n.language === 'en';
  const firstQuestion = questions?.length && questions[0];
  const title = language ? 
    firstQuestion?.attributes?.MainQuestion?.Question?.data?.attributes?.Question : firstQuestion?.attributes?.MainQuestion?.Question?.data?.attributes?.FrenchQuestion;
  const singleAnswer = firstQuestion?.attributes?.AddAnswer;
  const ToolTipText = language ? firstQuestion?.attributes?.ToolTipText : firstQuestion?.attributes?.FrenchToolTipText;
  let count = localStorage.getItem("count");

  const onAnswerClick = (i) => {
    const currentDate = new Date();
    localStorage.setItem("currentDate", currentDate);
    onYes();
    onNextQuestion(i?.NextQuestion?.data?.id);
    onReportsFind(i);
    let payload = {
      question: title,
      answer: language ? i?.Answer : i?.FrenchAnswer,
    };
    setJourney(payload);
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
    } else if (count === 1) {
      let journey = {
        [currentDate]: [payload],
      };
      putJourneyStep(journey);
    }
  };

  return (
    <div className={`customize-card p-10 bg-white rounded-2xl w-full  m-auto ${language ? "h-full" : ""}`}>
      {isFetchingQuestions ? (
        <div className="flex items-center flex-col h-full justify-center">
          <Loader height={80} width={80} />{" "}
        </div>
      ) : (
        <>
          <div className="flex items-center customize-header">
            {changingCardLogo.map((key, index) => {
              if (
                localStorage.getItem("ResourceType") === Object.keys(key)?.[0]
              ) {
                return (
                  <img
                    className="tabMax:w-[200px] laptop:w-[230px] h-[157px] object-contain object-contain-height mr-5"
                    src={Object.values(key)?.[0]}
                    alt="card"
                    key={index}
                  />
                );
              }
            })}

            <div className="customize-heading font-bold text-[51px] leading-[60px] text-text m-0 textColor">
              {t("AssessYourCountry")}
              {/* {t("Customize")} */}
            </div>
          </div>
          <div className="my-3 border-b-[4px] border-primary opacity-20" />
          <div className="customize-title font-bold text-[45px] leading-[54px] text-text px-2.5 mb-[40px] mt-7 pr-20 textColor">
            {title}
            {ToolTipText && (
              <TooltipComponent
                id={"customize"}
                content={ToolTipText}
                customizeStyle={"customizeStyle"}
              />
            )}
          </div>
          <div className="flex items-center flex-col max-w-[40%] m-auto customize-buttons">
            {singleAnswer?.map((i, index) => (
              <BlueButton
                title={language ? i?.Answer : i?.FrenchAnswer}
                onClick={() => onAnswerClick(i)}
                key={index}
                className="mb-[20px] h-[80px] text-[23px] "
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Customize;
