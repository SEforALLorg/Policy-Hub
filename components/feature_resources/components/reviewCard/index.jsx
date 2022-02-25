import React,{useState} from 'react';
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
const ReviewCard = ({src,heading,subheading,date, showStar = false}) => {
    return (
        <Card>
            <img src={src} alt="bulb" />
            <Detail>
                <div className='header'>
                    <Heading>{heading}</Heading>
                   {showStar ?  <Icon>
                        <AiFillStar />
                    </Icon>:null}
                </div>
                <SubTitle>{subheading}</SubTitle>
                <Bottom>
                  <SubTitle>{date}</SubTitle>
                  <BlueButton title={"Read More"}/>
                </Bottom>
            </Detail>
        </Card>
    );
};

export default ReviewCard;