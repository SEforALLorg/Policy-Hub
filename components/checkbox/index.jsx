import React from "react";

const Checkbox = ({ label }) => {
  return (
    <div className="checkWrap">
      <div className="container">
        <p className={"m-0 text-lighttext text-[16px]"}>{label}</p>
        <input type="checkbox" checked="checked" />
        <span className="checkmark"></span>
      </div>
    </div>
  );
};

export default Checkbox;
