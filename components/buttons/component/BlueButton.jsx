import React from 'react';
import { Button } from "./styles";
const BlueButton = ({title,style}) => {
    return (
        <>
        <Button style={style}>{title}</Button> 
        </>
    );
};

export default BlueButton;