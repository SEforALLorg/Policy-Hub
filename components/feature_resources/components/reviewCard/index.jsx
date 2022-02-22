import React from 'react';
import {
    Card,
    Detail,
    Heading,
    SubTitle,
    Icon,
    Bottom
} from "./styles";
import { AiFillStar } from "react-icons/ai";
import BlueButton from 'components/buttons/component/BlueButton';
const ReviewCard = ({src,heading,subheading,date}) => {
    return (
        <Card>
            <img src={src} alt="bulb" />
            <Detail>
                <div className='header'>
                    <Heading>{heading}</Heading>
                    <Icon>
                        <AiFillStar />
                    </Icon>
                </div>
                <SubTitle>{subheading}</SubTitle>
                <Bottom>
                  <SubTitle>12/02/2022</SubTitle>
                  <BlueButton title={"Read More"}/>
                </Bottom>
            </Detail>
        </Card>
    );
};

export default ReviewCard;