import React from "react";

const StartButton = ({ title, onClick, className }) => {
  return (
    <button
      className={`${className} bg-Secondary rounded-[70px] medium:py-4 medium:px-10 text-center small:py-3 small:px-4
                           medium:text-[22px] xsm:text-xsmall xsm:py-2 xsm:p-4 extrasmall:text-tiny font-bold uppercase border-none text-white outline-0 button-animation`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default StartButton;
