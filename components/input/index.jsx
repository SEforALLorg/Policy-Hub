import React from "react";

const Input = ({
  field,
  placeholder,
  className,
  onChange,
  value,
  textWidth,
  errorText=false,
  errorMessage
}) => {
  return (
    <div className="mobileMax!:block mobile:flex items-center mb-3 justify-center mobileMax:justify-start">
      <p
        className="text-text font-medium textWidth xsm:text-small large:text-[20px] leader-7 mobile:text-right
                     mobile:w-[100px] mb-[0px] mobileMax:w-full mobileMax:text-left"
      >
        {field}
      </p>
      <div className="mobileMax:w-full">
        <input
          className={className}
          type="text"
          name=""
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {errorText && <p className="text-red-500 font-normal text-xsmall mt-1.5 mobileMax:w-full">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Input;
