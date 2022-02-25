import React from 'react';
import {
    AddressWrap,
    Title,
    Text
} from "./styles";
const Address = ({heading,title ,style}) => {
    return (
        <AddressWrap style={style}>
            <Title>{heading}</Title>
            <Text>{title}</Text>
        </AddressWrap>
    );
};

export default Address;