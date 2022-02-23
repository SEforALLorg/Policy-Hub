import React from 'react';
import { FormWrap, FieldTitle } from "./styles";
const Form = ({ field, placeholder,style }) => {
    return (
        <FormWrap>
                <FieldTitle>{field} </FieldTitle>
                <input type="text" name="" placeholder={placeholder} style={style}/>
        </FormWrap>
        
    );
};

export default Form;