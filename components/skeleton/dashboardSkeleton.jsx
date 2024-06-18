import React from "react";
import LeftWrapSkeleton from "./leftWrapSkeleton";
import ReportSkeleton from "./reportSkeleton";

const DashboardSkeleton = () => {
  return (
    <>
      <div className="w-[40%] p-7 shadow-lg z-50 relative dashboard-left-wrap z-[1] rounded-l-[20px] h-full">
        <div className="flex items-center pb-3.5">
          <div className="animate-pulse bg-skeleton h-[70px] w-[70px] rounded-full mr-3" />
          <div className="animate-pulse bg-skeleton h-[50px] w-[80%]" />
        </div>
        <LeftWrapSkeleton />
      </div>
      <div className="right-wrap reportRightWrap box-border h-full">
        <div className="flex items-center pb-[10px]">
          <div className="animate-pulse bg-white h-[70px] w-[70px] rounded-full mr-3" />
          <div className="animate-pulse bg-white h-[50px] w-[80%]" />
        </div>
        <div className="flex mt-[30px] reports-inner-section">
          {/* filterWrap */}
          <div className="transform-filter-animation-hide report-left-wrap relative w-[30%] mr-[16px] pl-[7px] pr-[7px] ">
            <div className="animate-pulse bg-white h-[30px] w-[80px]" />
            <div className="innerFilter mt-2">
              {Array(4)
                .fill(1)
                .map((_, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full h-[50px] bg-white animate-pulse selectWrap selectWrap"
                    />
                  );
                })}
            </div>
          </div>
          {/* reports */}
          <div className="report-right-wrap w-[70%]">
            <div className="flex items-center justify-between w-full">
              <div className="animate-pulse bg-white h-[30px] w-[25%]" />
              <div className="flex items-center w-1/2 justify-end">
                <div className="animate-pulse bg-white h-[30px] w-[65%] mr-2 rounded-[65px]" />
                <div className="animate-pulse bg-white h-[30px] w-[45%] rounded-[65px]" />
              </div>
            </div>
            {Array(4)
              .fill(1)
              .map((_, index) => {
                return (
                  <div key={index} className="mt-2">
                    <ReportSkeleton />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSkeleton;
