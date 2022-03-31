import React from "react";

const Checkbox = ({ label,onClick, checked = true }) => {
  return (
    <div className="checkWrap">
      <div className="container">
        <p className={"mt-[0px] m-[4px] mb-0 text-lighttext text-[16px] font-medium tracking-[0px]"}>{label}</p>
        <input type="checkbox" checked={checked} />
        <span className="checkmark" onClick={onClick}></span>
      </div>
    </div>
  );
};

export default Checkbox;
