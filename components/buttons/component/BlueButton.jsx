import React from "react";
import { Button } from "./styles";
const BlueButton = ({ title, style, onClick }) => {
  return (
    <>
      <Button onClick={onClick} style={style}>
        {title}
      </Button>
    </>
  );
};

export default BlueButton;
