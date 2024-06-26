import React from "react";

const ResourcesTypeSkeleton = () => {
  return (
    <>
      <div className="flex items-center w-full py-[16px] mobileMax:!py-0">
        <img
          className="tabMax:w-[200px] laptop:w-[230px] h-[157px] object-contain object-contain-height mr-5 animate-pulse"
          src="/static/images/skeleton_group_card.svg"
          alt="card"
        />
        <div className="animate-pulse bg-skeleton h-[130px] w-full mobileMax:!h-[50px]" />
      </div>
      <div className="my-3 border-b-[4px] border-primary opacity-20 w-full" />
      <div className="w-full bg-skeleton animate-pulse h-[70px] mb-4 mobileMax:!h-[30px]" />
        <div className="flex items-center justify-between flex-wrap m-auto customize-buttons customize-row-button mt-5">
          {Array(5)
            ?.fill(1)
            .map((index) => {
              return (
                <div
                  key={index}
                  className="block ButtonBox w-full h-[90px] mb-[20px] mobileMax:!mb-[10px] bg-skeleton animate-pulse rounded-[65px] mobileMax:!h-[42px]"
                />
              );
            })}
        </div>
    </>
  );
};

export default ResourcesTypeSkeleton;
