import React, { useState } from "react";
import YouTube from "react-youtube";
import ModalVideo from "react-modal-video";

const VideoCard = ({
  link,
  title,
  description,
  setIsVideoCard,
  isVideoCard,
}) => {
  const opts = {
    playerVars: {
      controls: 0,
      fs: 0,
      showInfo: 0,
      showsearch: 0,
      rel: 1,
      iv_load_policy: 3,
      cc_load_policy: 1,
      mute: 1,
    },
  };
  const isOpen = title === isVideoCard;

  return (
    <>
     <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={link}
        onClose={() => setIsVideoCard('')}
        youtube={{
          autoplay: 1,
          mute: 1,
        }}
      />
    <div
      className={`bg-white resourceShadow rounded-2xl  overflow-hidden w-full h-[100%] videoCard card-animation`}
      onClick={() => {
        if (isOpen) {
          setIsVideoCard("");
        }
      }}
    >
      <div className="videoPlayer w-full max-w-full relative">
        <YouTube
          videoId={link}
          containerClassName={"vkh-video-player"}
          opts={opts}
          onPlay={(e) => {
            setIsVideoCard(title);
            e.target.pauseVideo();
            e.target.stopVideo();
          }}
        />
      </div>
      <div className="pt-[25px] pr-[10px] pb-[25px] pl-[10px]">
        <h6
          className="font-bold leading-5  text-darktext mb-[10px] text-[15px] otherTitle text-center"
          style={{
            display: isOpen ? "block" : "",
            height: isOpen ? "unset" : "",
          }}
        >
          {title}
        </h6>
        {/* <p
          className="font-normal leading-[17px] text-darktext mb-2 text-xsmall otherDescription"
          style={{
            display: isOpen ? "block" : "",
            maxHeight: isOpen ? "400px" : "70px",
            transition: isOpen
              ? "max-height .3s ease-in"
              : "max-height .5s ease-out",
          }}
        >
          {description}
        </p> */}
      </div>
    </div>
    </>
  );
};

export default VideoCard;
