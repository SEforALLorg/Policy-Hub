import React from "react";

const PopularResorces = ({ src, title, subtitle }) => {
  return (
    <div className="bg-white shadow-xl flex resourceShadow rounded-lg mb-2.5 overflow-hidden w-full small:flex-nowrap xsm:flex-wrap cursor-pointer duration-200">
      <img
        src={src}
        alt="bulb"
        className="max-w-full small:max-w-max xsm:w-full"
      />
      <div className="pt-3 pr-[15px] pb-[9.5px] pl-[12.5px] w-full">
        <p className="font-bold leading-[19px] text-boldtext mb-2 mobile:text-small xsm:text-xsmall ellipse">
          {title}
        </p>
      </div>
    </div>
  );
};

export default PopularResorces;
