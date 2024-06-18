import React from "react";
import { IoChevronBack } from "react-icons/io5";

const CustomizeScreenSkeleton = () => {
  return (
    <>
      <div className="flex items-center mb-8 mobileMax:mb-3 p-0 mobileMax:max-h-[25px]">
        <IoChevronBack className="mr-0.5 text-[#ccc] animate-pulse text-[35px] mobileMax:!text-[20px]" />
        <div className="w-[80px] animate-pulse bg-skeleton h-[30px] mobileMax:w-[50px] mobileMax:!h-[20px]" />
      </div>
      <div className="flex items-center w-full pt-3 mobile:pb-[30px] pb-[10px]">
        <img
          className="tabMax:w-[200px] laptop:w-[230px] h-[157px] object-contain object-contain-height mr-5 animate-pulse"
          src={"/static/images/skeleton_group_card.svg"}
          alt="card"
          key={"card-image"}
          width={"65px"}
          height={"45px"}
        />
        <div className="animate-pulse bg-skeleton h-[150px] w-full mobileMax:!h-[60px]" />
      </div>
      <div className="border-b-[4px] border-primary opacity-20 w-full my-2" />
      <div className="w-full bg-skeleton animate-pulse h-[120px] mobileMax:!h-[50px] mobileMax:mb-8 mt-[30px] mobileMax:mt-2" />
      <div className="flex items-center flex-col max-w-[40%] w-full m-auto customize-buttons">
        {Array(2)
          ?.fill(1)
          .map((index) => {
            return (
              <div
                key={index}
                className="w-full h-[80px] mobile:mb-4 mobileMax:mb-[10px] bg-skeleton animate-pulse rounded-[65px] mobileMax:!h-[42px]"
              />
            );
          })}
      </div>
    </>
  );
};

export default CustomizeScreenSkeleton;
