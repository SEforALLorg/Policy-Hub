import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import RadioButton from "../radioButton";
import TooltipComponent from "../tooltip";

const StepComponent = ({
  onNext,
  onPrevious,
  item,
  setOptionReport,
  setStepQuestion,
  stepQuestion,
  totalSteps,
  sendData,
}) => { 
  const [optionData, setOptionData] = useState();
  const [stepCount, setStepCount] = useState(1);

  const title =
    item?.attributes?.MainQuestion?.Question?.data?.attributes?.Question;
  const questionId = item?.id
  const multiAnswer = item?.attributes?.AddAnswer;

  const nextCount = totalSteps?.length || 1;

  useEffect(() => {
    if (multiAnswer) {
      setOptionData(multiAnswer[0] || []);
      setOptionReport(multiAnswer[0]);
    }
  }, [multiAnswer]);

  const ToolTipText = item?.attributes?.ToolTipText;

  const onAnswerClick = (i) => {
    setOptionData(i);
    setOptionReport(i);
  };

  const onPreviousClick = () => {
    onPrevious();
    if (stepCount <= 1) {
      setStepCount(1);
    } else {
      setStepCount(stepCount - 1);
    }
  };

  const onNextClick = () => {
    onNext(optionData?.NextQuestion?.data?.id);
    setStepQuestion(item);
    if (!item?.attributes?.MainQuestion?.QuestionKeyType?.data) return null;
    setStepCount(stepCount + 1);
    const data = {
      qid: questionId,
      qtext: title,
      aid: optionData.id ?? "" ,
      atext: optionData.Answer ?? ""
    }
    sendData(data);
  };
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col">
      {item?.attributes?.QuestionTitle && (
        <h5 className="font-bold text-[18px] text-left text-text mb-[5px]">
          {item?.attributes?.QuestionTitle}
          {/* {ToolTipText && (
            <TooltipComponent content={ToolTipText} />
          )} */}
        </h5>
      )}
      <p
        className="text-[15px] text-left text-darkText mb-[0px] pl-18 m-[0px] inner-section-content"
        // style={{ height: "45px" }}
      >
        {/* <span>{stepCount}.</span> */}
        {title} {ToolTipText && <TooltipComponent content={ToolTipText} />}
      </p>
      <div className="OptionsWrap">
        {multiAnswer?.map((i, index) => {
          if (!i?.Answer) return null;
          return (
            <div
              className="optionItem"
              key={index}
              onClick={() => onAnswerClick(i)}
            >
              <RadioButton checked={optionData?.id === i?.id} />
              <p>{i?.Answer}</p>
            </div>
          );
        })}
      </div>
      <div className="optionsButtonWrap">
        <button
          onClick={() => onPreviousClick()}
          className="SlideButton previous"
          style={{ opacity: !stepQuestion?.length ? 0.5 : 1 }}
          disabled={!stepQuestion?.length}
        >
          <img src="static/images/leftArrow.svg" alt="" /> {t("Previous")}
        </button>
        <p className="text-[14px] text-center text-Primary mb-[5px] font-medium">
          {stepCount}/{nextCount}
        </p>
        <button onClick={() => onNextClick()} className="SlideButton">
          {t("Next")} <img src="static/images/rightArrow.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default StepComponent;
