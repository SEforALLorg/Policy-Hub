import React from "react";
import { CheckBoxWrap } from "./style";

const RadioButton = ({ onChange, checked }) => {
  return (
    <CheckBoxWrap>
      <label className="container-wrap">
        <input
          type="radio"
          checked={checked}
          name="radio"
          onChange={onChange}
        />
        <span className="checkmark"></span>
      </label>
    </CheckBoxWrap>
  );
};

export default RadioButton;
