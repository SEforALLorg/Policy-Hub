import React from "react";

import BlueButton from "components/buttons/blueButton";
import Loader from "components/loader";
import TooltipComponent from "components/tooltip";
import { useTranslation } from "react-i18next";
import { putJourneyStep } from "../../utilities";
import { changingCardLogo } from '../../constant/changinglogo';

const Customize = ({
  onYes,
  questions,
  isFetchingQuestions,
  onNextQuestion,
  onReportsFind,
  setJourney,
  // setCurrentDate
}) => {
  const { t } = useTranslation();
  const firstQuestion = questions?.length && questions[0];
  const title =firstQuestion?.attributes?.MainQuestion?.Question?.data?.attributes?.Question;
  const singleAnswer = firstQuestion?.attributes?.AddAnswer;
  const ToolTipText = firstQuestion?.attributes?.ToolTipText;
  let count = localStorage.getItem("count");
  
  const onAnswerClick = (i) => {
    const currentDate = new Date();
    localStorage.setItem("currentDate",currentDate)
    onYes();
    onNextQuestion(i?.NextQuestion?.data?.id);
    onReportsFind(i);
    let payload = {
      question: title,
      answer: i?.Answer
    }
    setJourney(payload);
    let existing = JSON.parse(localStorage.getItem("userInfo"));
    let existingJourney = existing?.Journey;
    if ((existingJourney && Object.values(existingJourney)?.length) || (count && count > 1)) {
      let journey = {
        ...existingJourney,
        [currentDate]: [payload],
      }
      putJourneyStep(journey);
    } else if (count === 1) {
      let journey = {
        [currentDate]: [payload],
      }
      putJourneyStep(journey);
    }
  };

  return (
    <div className="customize-card p-10 bg-white rounded-2xl w-full h-full m-auto">
      {isFetchingQuestions ? (
        <div className="flex items-center flex-col h-full justify-center">
          <Loader height={80} width={80} />{" "}
        </div>
      ) : (
        <>
          <div className="flex items-center customize-header">
           {changingCardLogo.map((key)=>{
            if (localStorage.getItem("ResourceType") === Object.keys(key)?.[0]) {
               return (
                <img
                className="w-[230px] h-[157px] object-contain  mr-5"
                src = {Object.values(key)?.[0]}
                alt="card"
              />
               )
         }
          })}

            <div className="customize-heading font-bold text-[51px] leading-[60px] select-none text-text m-0 textColor">
              {t("AssessYourCountry")} 
              {/* {t("Customize")} */}
            </div>
          </div>
          <div className="my-3 border-b-[4px] border-primary opacity-20" />
          <div className="customize-title font-bold text-[45px] leading-[54px] select-none text-text px-2.5 mb-[40px] mt-7 pr-20 textColor">
            {title}
            {ToolTipText && <TooltipComponent id={"customize"} content={ToolTipText} customizeStyle = {'customizeStyle'}/>}
          </div>
          <div className="flex items-center flex-col max-w-[40%] m-auto customize-buttons">
            {singleAnswer?.map((i, index) => (
              <BlueButton
                title={i?.Answer}
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
