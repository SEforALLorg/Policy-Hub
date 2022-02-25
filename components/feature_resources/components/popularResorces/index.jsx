import React from 'react';
import {
    Card,
    Detail,
    Heading,
} from "./styles";
const PopularResorces = ({src,title,subtitle}) => {
    return (
        <Card>
            <img src={src} alt="bulb" />
            <Detail>
                    <Heading>{title}</Heading>
            </Detail>
        </Card>
    );
};

export default PopularResorces;