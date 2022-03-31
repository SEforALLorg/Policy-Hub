import React from "react";

const RadioButton = ({ onChange, checked }) => {
  return (
    <div className="radio-button-wrap">
      <label className="container-wrap">
        <input
          type="radio"
          checked={checked}
          name="radio"
          onChange={onChange}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default RadioButton;
