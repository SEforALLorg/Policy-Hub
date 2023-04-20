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
  const [localJourney, setLocalJourney] = useState([]);
  const title =
    item?.attributes?.MainQuestion?.Question?.data?.attributes?.Question;
  const multiAnswer = item?.attributes?.AddAnswer;
  const nextCount = totalSteps?.length || 1;
  const ToolTipText = item?.attributes?.ToolTipText;

  useEffect(() => {
    if (multiAnswer) {
      setOptionData(multiAnswer[0] || []);
      setOptionReport(multiAnswer[0]);
    }
  }, [multiAnswer]);

  const onAnswerClick = (i) => {
    setOptionData(i);
    setOptionReport(i);
  };

  const onSubmitJourney = (i, title) => {
    if (localJourney?.find((item) => item?.title === title)) {
      const findIndex = localJourney?.findIndex(
        (item) => item?.title === title
      );
      if (findIndex > -1) {
        localJourney?.splice(findIndex, 1, { ...i, title });
        setLocalJourney(localJourney);
      }
    } else {
      setLocalJourney([...localJourney, { ...i, title }]);
    }
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
      question: title,
      answer: optionData?.Answer ?? "",
    };
    sendData(data);
  };
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      {item?.attributes?.QuestionTitle && (
        <h5 className="font-bold text-[18px] text-left text-text mb-[5px]">
          {item?.attributes?.QuestionTitle}
        </h5>
      )}
      <p className="text-[15px] text-left text-darkText mb-[0px] pl-18 m-[0px] inner-section-content">
        {title}{" "}
        {ToolTipText && (
          <TooltipComponent id={"stepComponent"} content={ToolTipText} />
        )}
      </p>
      <div className="OptionsWrap">
        {multiAnswer?.map((i, index) => {
          if (!i?.Answer) return null;
          const isFood = item?.attributes?.QuestionTitle?.includes(
            "Food & agricultural cold chains"
          );
          const isFoodAndEquipment =
            isFood && i?.Answer?.includes("Equipment / refrigeration");
          const isFoodAndGrid =
            isFood && ["Grid-based", "Off-grid", "Mobile"]?.includes(i?.Answer);
          return (
            <div
              className="optionItem"
              key={index}
              onClick={() => {
                isFoodAndEquipment ? "" : onAnswerClick(i);
                onSubmitJourney(i, title);
              }}
              style={{ marginLeft: `${isFoodAndGrid ? "1.8rem" : ""}` }}
            >
              {!isFoodAndEquipment && (
                <RadioButton
                  checked={
                    optionData?.id === i?.id ||
                    localJourney?.find((item) => item?.id === i?.id)
                  }
                />
              )}
              <p
                style={{ marginLeft: `${isFoodAndEquipment ? "1.8rem" : ""}` }}
              >
                {i?.Answer}
                {i?.AnswerToolTip && (
                  <TooltipComponent
                    content={i?.AnswerToolTip}
                    answer={i?.Answer}
                    id={index}
                  />
                )}
              </p>
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
          <img src="static/images/leftArrow.svg" alt="left_arrow" />{" "}
          {t("Previous")}
        </button>
        {nextCount > 1 && (
          <p className="text-[14px] text-center mb-[5px] font-medium SlideButtonNo">
            {stepCount}/{nextCount}
          </p>
        )}
        <button onClick={() => onNextClick()} className="SlideButton">
          {t("Next")}{" "}
          <img src="static/images/rightArrow.svg" alt="right_arrow" />
        </button>
      </div>
    </div>
  );
};

export default StepComponent;
