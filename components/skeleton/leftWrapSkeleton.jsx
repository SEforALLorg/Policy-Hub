import React from 'react'

const LeftWrapSkeleton = ({userJourney,nextQuestionId}) => {
  return (
    <div className="flex items-center flex-col h-full w-full justify-start">
      {Boolean(userJourney?.length) && nextQuestionId ? null :
      <>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center w-[80%] tabMax:w-[75%] mobileMax:w-[75%]">
          <div className="w-[10px] h-[10px] rounded-full bg-skeleton animate-pulse mr-1" />
          <div className="w-[95%] h-[45px] bg-skeleton animate-pulse" />
        </div>
        <div className="w-[60px] h-[25px] bg-skeleton animate-pulse rounded-[65px]" />
      </div>
      <div className="max-w-[20%] w-[60px] h-[15px] mt-2 bg-skeleton animate-pulse ml-auto" />
      <div
        className={"mt-[16px] mb-[16px] w-full"}
        style={{ borderBottom: "1.6px solid rgba(6, 90, 137, 0.2)" }}
      />
      </>}
      <div className="w-full h-[65px] mt-2 bg-skeleton animate-pulse" />
      <div className="flex items-center flex-col w-[80%] my-[4rem] mx-auto mobileMax:my-[2rem]">
        {Array(2)
          ?.fill(1)
          .map((index) => {
            return (
              <div
                key={index}
                className="w-full h-[55px] mobile:mb-4 mobileMax:mb-[10px] bg-skeleton animate-pulse rounded-[65px] mobileMax:h-[45px]"
              />
            );
          })}
      </div>
  </div>
  )
}

export default LeftWrapSkeleton;