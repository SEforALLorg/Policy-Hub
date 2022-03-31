import React from "react";

const OtherToolsCard = ({
  image,
  title,
  description,
  link,
  isTitle,
  setIsTitle,
}) => {
  const isOpen = title === isTitle;
  return (
    <div
      className={`bg-white resourceShadow rounded-2xl  overflow-hidden w-full cursor-pointer other-card ${
        isOpen ? "active" : ""
      }`}
      onClick={() => {
        if (isOpen) {
          setIsTitle("");
        } else {
          setIsTitle(title);
        }
      }}
    >
      <div className="videoPlayer w-full max-w-full ">
        <img
          src={image}
          alt=""
          className="w-[100%] h-[200px] object-cover object-left"
        />
      </div>
      <div className="pt-[15px] pr-4 pb-[17px] pl-[22px]">
        <h6
          className="font-bold leading-6  text-darktext mb-1 text-medium h-[50px] otherTitle"
          style={{
            display: isOpen ? "block" : "",
            height: isOpen ? "unset" : "",
          }}
        >
          {title}
        </h6>
        <p
          className="font-normal leading-[17px] text-darktext mb-2 text-xsmall otherDescription"
          style={{
            display: isOpen ? "block" : "",
            maxHeight: isOpen ? "300px" : "70px",
            transition: isOpen
              ? "max-height .3s ease-in"
              : "max-height .5s ease-out",
          }}
        >
          {description}
        </p>
        <button
          onClick={() => window.open(link)}
          className="bg-lightBlue rounded-[60px] w-full  text-normal text-center
                                      border-2 border-transparent outline-0 text-Primary py-[3px] px-2 xsm:text-xsmall laptop:text-xsmall 
                                      hover:bg-Primary hover:text-white ease-linear transition-all duration-500 w-[100px] mt-[10px]"
        >
          Go to tool
        </button>
      </div>
    </div>
  );
};

export default OtherToolsCard;
