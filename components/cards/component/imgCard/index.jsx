import React from 'react';
import {
    CardWrap,
    CardBox,
    Text
} from "./styles";
const Imgcard = ({ img,title }) => {
    return (
        <CardWrap>
            <CardBox>
                <img src={img} alt="img" />
            </CardBox>
            <Text>{title}</Text>
        </CardWrap>
    );
};

export default Imgcard;