import React from "react";

const BlueButton = ({ title, style, onClick, className, disabled }) => {
  return (
    <div className="ButtonBox w-[100%]">
      <button
        onClick={onClick}
        style={style}
        disabled={disabled}
        className={` ${className} bg-lightBlue rounded-[69px] w-full leading-5 text-center	font-normal
        text-xsmall uppercase border !border-transparent	text-blue outline-0	no-underline BtnColor buttonStyle`}
      >
        {title}
      </button>
    </div>
  );
};

export default BlueButton;
