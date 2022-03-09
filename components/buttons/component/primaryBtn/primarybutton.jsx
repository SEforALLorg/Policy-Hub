import React from "react";

const PrimaryButton = ({ className, title, style, onClick, disabled }) => {
  return (
    <button
      className={className}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
