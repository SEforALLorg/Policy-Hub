import React from "react";

const ResourcesCardSkeleton = () => {
  return (
    <div className="resourceCard pt-[15px] px-4 pb-[17px] bg-white rounded-2xl flex flex-col justify-between resourceShadow min-h-[328px]">
      <div className="h-full">
        <div className="animate-pulse bg-skeleton h-[70px] w-full mobileMax:h-[60px] mb-2" />
        <div className="animate-pulse bg-skeleton h-[100px] w-full mobileMax:h-[90px] mb-3" />
      </div>
      <div className="h-full flex flex-col justify-end">
        <div className="flex">
          {Array(2)
            ?.fill(1)
            .map((index) => {
              return (
                <div
                  key={index}
                  className="h-[30px] bg-skeleton animate-pulse rounded-[65px] mr-2 mb-2 w-[110px]"
                />
              );
            })}
        </div>
        <div className="h-[32px] bg-skeleton animate-pulse rounded-[65px] mr-1 mb-2 w-full" />
      </div>
    </div>
  );
};

export default ResourcesCardSkeleton;
