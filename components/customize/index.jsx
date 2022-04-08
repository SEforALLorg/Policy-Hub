import React from "react";

import BlueButton from "components/buttons/blueButton";
import Loader from "components/loader";
import TooltipComponent from "components/tooltip";

const Customize = ({
  onYes,
  questions,
  isFetchingQuestions,
  onNextQuestion,
  onReportsFind,
}) => {
  const firstQuestion = questions?.length && questions[0];

  const title =
    firstQuestion?.attributes?.MainQuestion?.Question?.data?.attributes
      ?.Question;
  const singleAnswer = firstQuestion?.attributes?.AddAnswer;
  const ToolTipText = firstQuestion?.attributes?.ToolTipText;

  const onAnswerClick = (i) => {
    onYes();
    onNextQuestion(i?.NextQuestion?.data?.id);
    onReportsFind(i);
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
            <div className="flex items-center relative select-none mr-5">
              <img
                className="w-[230px] mx-full"
                src="static/images/cards.svg"
                alt="card"
              />
            </div>
            <div className="customize-heading font-bold text-[51px] leading-[60px] select-none text-text m-0">
              Assess your country’s situation and
              <br /> customize the decision-making process.
            </div>
          </div>
          <div className="my-3 border-b-[4px] border-primary opacity-20" />
          <div className="customize-title font-bold text-[45px] leading-[54px] select-none text-text px-2.5 mb-[40px] mt-7 pr-20">
            {title}
            {ToolTipText && <TooltipComponent content={ToolTipText} />}
          </div>
          <div className="flex items-center flex-col max-w-[40%] m-auto">
            {singleAnswer?.map((i, index) => (
              <BlueButton
                title={i?.Answer}
                onClick={() => onAnswerClick(i)}
                key={index}
                className="mb-[20px] h-[95px] text-[23px]"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Customize;
