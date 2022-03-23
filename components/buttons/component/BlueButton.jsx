import React from "react";

const BlueButton = ({ title, style, onClick, className }) => {
  return (
    <>
       <button onClick={onClick} style={style} className={`${className} bg-lightBlue rounded-[69px] w-full leading-5 text-center	font-normal
        text-xsmall h-[50px] uppercase border-0	text-blue outline-0	no-underline`}>
        {title}
      </button>
    </>
  );
};

export default BlueButton;
