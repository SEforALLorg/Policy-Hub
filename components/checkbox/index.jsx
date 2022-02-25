import React from 'react';
import { CheckWrap ,Label } from "./styles"
const Checkbox = ({label}) => {
    return (
        <CheckWrap>
            <div className="container">
            <Label>{label}</Label>
            <input type="checkbox" checked="checked" />
                <span className="checkmark"></span>
            </div>
        </CheckWrap>
    );
};

export default Checkbox;