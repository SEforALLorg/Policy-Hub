import React from 'react';
import { Button } from './style';
const PrimaryButton = ({title,style}) => {
    return (
        <Button style={style}>{title}</Button>
    );
};

export default PrimaryButton;