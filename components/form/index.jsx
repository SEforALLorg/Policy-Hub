import React from "react";

const Form = ({ field, placeholder, className }) => {
  return (
    <div className="xsm:block extrasmall:flex small:flex mobile:flex items-center mb-2.5 extrasmall:justify-center small:justify-end mobile:justify-end laptop:justify-end">
      <p
        className="text-text font-normal	xsm:text-xsmall large:text-[20px] leader-7 
                       xsm:mr-2.5  large:mr-[25px] xsm:w-[50px] mobile:w-max"
      >
        {field}
      </p>
      <input
        className={className}
        type="text"
        name=""
        placeholder={placeholder}
      />
    </div>
  );
};

export default Form;
