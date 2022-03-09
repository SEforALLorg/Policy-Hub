import React from 'react';
import { AiFillStar } from "react-icons/ai";

const ReviewCard = ({src,heading,subheading,date, showStar = false}) => {
    return (
        <div className='bg-white resourceShadow flex rounded-lg overflow-hidden w-full small:flex-nowrap xsm:flex-wrap'>
            <img src={src} alt="bulb" className='small:max-w-max xsm:w-full' />
            <div className='pt-3.5 pr-[9.7px] pb-[7.5px] pl-[12.5px] w-full'>
                <div className='flex justify-between'>
                    <p className='font-bold leading-[17px] text-boldtext mb-[5px] text-xsmall ellipse'>{heading}</p>
                    {showStar ? <div>
                        <AiFillStar className='text-[26px] text-Secondary' />
                    </div> : null}
                </div>
                <p className='font-normal  leading-[17px] text-boldtext mb-[5px] text-xsmall ellipse'>{subheading}</p>
                <div className='flex items-center justify-between extrasmall:flex-wrap large:flex-nowrap small:mt-0 xsm:mt-3 flex-wrap'>
                    <p className='font-normal leading-[17px] text-boldtext mb-[5px] text-xsmall'>{date}</p>
                    <div className=''>
                        <button
                            className='bg-lightBlue rounded-[60px] w-full  text-normal text-center uppercase
                                      border-2 border-transparent outline-0 text-Primary py-[3px] px-2 xsm:text-xsmall laptop:text-xsmall 
                                      hover:bg-Primary hover:text-white ease-linear transition-all duration-500 '>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;