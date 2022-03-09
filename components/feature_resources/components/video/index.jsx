import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import "node_modules/video-react/dist/video-react.css";

const VideoCard = () => {
    return (
        <div className='bg-white resourceShadow rounded-2xl  overflow-hidden w-full'>
            <div className="videoPlayer w-full max-w-full " >
                <Player
                    fluid={true}
                    playsInline={true}
                    poster="/static/images/windfan.svg" >
                    <source src="../static/video/sample.mp4" className='max-w-full' />
                    <BigPlayButton position="center" />
                </Player>
            </div>
            <div className='pt-[15px] pr-4 pb-[17px] pl-[22px]'>
                <h6 className='font-bold leading-6  text-darktext mb-1 text-medium'>
                    VIDEO TITLE
                </h6>
                <p className='font-normal leading-[17px] text-darktext mb-2 text-xsmall '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus bibendum lacus mauris. Curabitur lectus tortor,
                    sollicitudin in lorem sit amet, porttitor finibu.
                </p>
                <p>
                    <span className='font-medium leading-6  text-darktext text-small mr-1'>IRENA</span>{''}
                    <a className='font-medium leading-6  text-Primary text-xsmall'>https://www.irena.org/</a>
                </p>
            </div>
        </div>
    );
};

export default VideoCard;