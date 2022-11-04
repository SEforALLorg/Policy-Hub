import React from "react";

import BlueButton from "components/buttons/blueButton";

const Resources = ({ onYes, resources, onNextQuestionId }) => {
  const onAnswerClick = (i) => {
    console.log(i, "i");
    onYes();
    onNextQuestionId(i?.attributes?.QuestionId);
  };

  return (
    <div className="customize-card p-10 bg-white rounded-2xl w-full h-full m-auto">
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
        <div className="customize-heading font-bold text-[51px] leading-[60px] select-none text-text mb-3">
          Which area you want to investigate?
        </div>
      <div className="flex items-center flex-col max-w-[40%] m-auto customize-buttons">
        {resources?.map((resource, index) => (
          <BlueButton
            title={resource?.attributes.Name}
            onClick={() => onAnswerClick(resource)}
            key={index}
            className="mb-[20px] h-[95px] text-[23px]"
          />
        ))}
      </div>
    </div>
  );
};

export default Resources;
