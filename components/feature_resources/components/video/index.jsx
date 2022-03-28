import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoCard = ({ link, title, description }) => {
    const opts = {
        playerVars: {
            controls: 0,
            fs: 0,
            showInfo: 0,
            showsearch: 0,
            rel: 1,
            iv_load_policy: 3,
            cc_load_policy: 1

        },

    }
    const [isStart, setIsStart] = useState(true);
    return (
        <div className="bg-white resourceShadow rounded-2xl  overflow-hidden w-full h-[100%]">
            <div className="videoPlayer w-full max-w-full relative">
                <YouTube
                    videoId={link}
                    containerClassName={'vkh-video-player'}
                    opts={opts}
                    onPlay={() => setIsStart(false)}
                    onPause={() => setIsStart(true)}
                />
                {/* {
            isStart ?  <button className="playButton" /> : null
        } */}

            </div>
            <div className="pt-[25px] pr-4 pb-[25px] pl-[22px]">
                <h6 className="font-bold leading-6  text-darktext mb-[10px] text-medium">
                    {title}
                </h6>
                <p className="font-normal leading-[17px] text-darktext mb-2 text-xsmall ">
                    {description}
                </p>
                {/* <p>
                    <span className='font-medium leading-6  text-darktext text-small mr-1'>IRENA</span>{''}
                    <a className='font-medium leading-6  text-Primary text-xsmall'>https://www.irena.org/</a>
                </p> */}
            </div>
        </div>
    );
};

export default VideoCard;
