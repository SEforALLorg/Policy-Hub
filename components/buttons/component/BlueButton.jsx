import React from "react";
import { Button } from "./styles";
const BlueButton = ({ title, onClick }) => {
  return (
    <>
      <Button onClick={onClick}>{title}</Button>
    </>
  );
};

export default BlueButton;
