import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getRoute } from "../../utilities";
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
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const router = useRouter();
  const [optionData, setOptionData] = useState();
  const [stepCount, setStepCount] = useState(1);
  const [localJourney, setLocalJourney] = useState([]);
  const title = isEnglish ? item?.attributes?.MainQuestion?.Question?.data?.attributes?.Question : item?.attributes?.MainQuestion?.Question?.data?.attributes?.FrenchQuestion;
  const multiAnswer = item?.attributes?.AddAnswer;
  const nextCount = totalSteps?.length || 1;
  const ToolTipText = isEnglish ? item?.attributes?.ToolTipText : item?.attributes?.FrenchToolTipText;

  useEffect(() => {
    if (multiAnswer) {
      setOptionData(multiAnswer[0] || []);
      setLocalJourney([multiAnswer[0]])
      setOptionReport(multiAnswer[0]);
    }
  }, [multiAnswer]);

  useEffect(() => {
    if (router?.query?.step) {
      setStepCount(Number(router?.query?.step));
    }
  }, [router])

  const onAnswerClick = (i) => {
    setOptionData(i);
    setOptionReport(i);
  };

  const onSubmitJourney = (i, parentTitle) => {
    const title = i?.Answer || parentTitle
    if (localJourney?.find((item) => item?.title === title)) {
      const findIndex = localJourney?.findIndex(
        (item) => item?.title === title
      );
      if (findIndex > -1) {
        const updatedJourney = localJourney?.splice(findIndex, 1, { ...i, title });
        setLocalJourney(updatedJourney);
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

  const onNextClick = (stepCount) => {
    const questionId = optionData?.NextQuestion?.data?.id;
    onNext(questionId);
    setStepQuestion(item);
    if (!item?.attributes?.MainQuestion?.QuestionKeyType?.data) return null;
    setStepCount(stepCount + 1);
    const data = {
      question: title,
      answer: optionData?.Answer ?? "",
    };
    sendData(data);
    router.push(
      {
        pathname: `/${i18n.language}/${getRoute()}/${questionId}`,
        query: {
          bigCard: true,
          step: stepCount + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div className="flex flex-col">
      {item?.attributes?.QuestionTitle && (
        <h5 className="font-bold text-[18px] text-left text-text mb-[5px]">
          {isEnglish ? item?.attributes?.QuestionTitle : item?.attributes?.frenchQuestionTitle}
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
              key={isEnglish ? i?.Answer : i?.FrenchAnswer}
              onClick={() => {
                !isFoodAndEquipment && onAnswerClick(i);
                onSubmitJourney(i, title);
              }}
              style={{ marginLeft: `${isFoodAndGrid ? "1.8rem" : ""}` }}
            >
              {!isFoodAndEquipment && (
                <RadioButton
                  checked={
                    optionData?.id === i?.id 
                    // ||
                    // localJourney?.find((item) => item?.id === i?.id)
                  }
                />
              )}
              <p
                style={{ marginLeft: `${isFoodAndEquipment ? "1.8rem" : ""}` }}
              >
                {isEnglish ? i?.Answer : i?.FrenchAnswer}
                {i?.AnswerToolTip && (
                  <TooltipComponent
                    content={isEnglish ? i?.AnswerToolTip : i?.FrenchAnswerToolTip}
                    answer={isEnglish ? i?.Answer : i?.FrenchAnswer}
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
          style={{ opacity: !stepQuestion?.length || stepCount === 1 ? 0.5 : 1 }}
          disabled={!stepQuestion?.length || stepCount === 1}
        >
          <img src="/static/images/leftArrow.svg" alt="left_arrow" />{" "}
          {t("Previous")}
        </button>
        {nextCount > 1 && (
          <p className="text-[14px] text-center font-medium SlideButtonNo">
            {stepCount}/{nextCount}
          </p>
        )}
        <button onClick={() => onNextClick(stepCount)} className="SlideButton">
          {t("Next")}{" "}
          <img src={"/static/images/rightArrow.svg"} alt="right_arrow" />
        </button>
      </div>
    </div>
  );
};

export default StepComponent;
