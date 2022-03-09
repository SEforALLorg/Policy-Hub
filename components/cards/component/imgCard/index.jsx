  
import React from 'react';

const ImgCard = ({ img,title,className }) => {
    return (
        <div>
            <div className={className} >
                <img src={img} alt="img" className='max-w-full'/>
            </div>
            <a className='text-anqrtext no-underline not-italic	font-normal	xsm:text-xsmall small:text-tiny leading-5 text-center block '>{title}</a>
        </div>
    );
};

export default ImgCard;