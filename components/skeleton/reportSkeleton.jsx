import React from "react";

const ReportSkeleton = () => {
  return (
    <div className="rounded-[7.3px] bg-white h-[110px] w-full p-[2px] mb-[20px]">
      <div className="flex items-start p-[12px] justify-between h-[55px]">
        <h2 className="h-full bg-skeleton animate-pulse w-[90%] m-0" />
        <img
          src="/static/images/skeleton-star.svg"
          alt="star"
          className="w-[25px] max-w-[10%] animate-pulse h-full"
        />
      </div>
      <div style={{ borderBottom: "2.4px solid rgba(134, 164, 176, 0.15)" }} />
      <div className="flex items-center p-[12px] justify-between h-[50px]">
        <div className="flex items-start h-full w-[25%]">
          <div className="w-[25px] min-w-[25px] max-w-[25px] h-full bg-skeleton animate-pulse mr-2 rounded-full"/>
          <h2 className="h-full bg-skeleton animate-pulse w-[120px] m-0" />
        </div>
        <h2 className="h-full bg-skeleton animate-pulse w-[28%] m-0" />
        <h2 className="h-full bg-skeleton animate-pulse w-[28%] m-0" />
        <h2 className="h-full bg-skeleton animate-pulse w-[10%] m-0" />
      </div>
    </div>
  );
};

export default ReportSkeleton;
