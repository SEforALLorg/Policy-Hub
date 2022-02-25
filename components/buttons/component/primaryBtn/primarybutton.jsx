import React from 'react';
import { Button } from './style';
const PrimaryButton = ({title,style, onClick}) => {
    return (
        <Button style={style} onClick={onClick}>{title}</Button>
    );
};

export default PrimaryButton;