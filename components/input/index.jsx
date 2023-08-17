import React from "react";

const Input = ({ field, placeholder, className, onChange, value, textWidth }) => {
  return (
    <div className="xsm:block extrasmall:flex small:flex mobile:flex items-center mb-2.5 extrasmall:justify-center small:justify-end mobile:justify-end laptop:justify-end">
      <p
        className="text-text font-normal textWidth xsm:text-xsmall large:text-[20px] leader-7 
                       xsm:mr-2.5  large:mr-[25px] xsm:w-[50px] mobile:w-max mb-[0px]"
      >
        {field}
      </p>
      <input
        className={className}
        type="text"
        name=""
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
