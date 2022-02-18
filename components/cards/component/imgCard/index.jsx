import React from 'react';
import {
    CardWrap,
    CardBox,
    Text
} from "./styles";
const Imgcard = ({ img,title,style }) => {
    return (
        <CardWrap>
            <CardBox style={style}>
                <img src={img} alt="img" />
            </CardBox>
            <Text>{title}</Text>
        </CardWrap>
    );
};

export default Imgcard;