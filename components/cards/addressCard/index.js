import React from "react";

const Address = ({ heading, title, className }) => {
  return (
    <div className={className}>
      <p className="text-darktext font-bold xsm:text-xsmall small:text-[21px] xsm:leader-5 small:leading-7	mb-2.5 ">
        {heading}
      </p>
      <p className="text-lighttext font-normal xsm:text-xx small:text-small xsm:leading-5 small:leading-6  m-0">
        {title}
      </p>
    </div>
  );
};

export default Address;
