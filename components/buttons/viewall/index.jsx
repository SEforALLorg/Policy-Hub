import React from "react";

const ViewButton = ({ title, onClick }) => {
  return (
    <button
      className="bg-transparent text-center font-normal text-small 
                        leading-4 border-none text-darktext outline-none"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ViewButton;
