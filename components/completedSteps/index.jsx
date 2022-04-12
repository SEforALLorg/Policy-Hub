import React from "react";
import SubscribeComponent from "../subscribeComponent";

const CompletedSteps = ({ onRestart,onStandaloneClick, onMiniClick }) => {
  return (
    <div className="completeWrap">
      <h5 className="font-bold text-[30px] text-center capitalize text-text process-text">
        Process completed!
      </h5>
      <div className="flex items-center justify-center complete-buttons-wrap">
        <div className="restartWrap" onClick={onRestart}>
          <img src="static/images/restart.svg" alt="" />
          <p>Restart</p>
        </div>
        <div
          className="restartWrap"
          onClick={() => onMiniClick()}
        >
          <img src="static/images/mini-grid.png" alt="" style={{width: 80,height: 60}} />
          <p>Mini-Grid</p>
        </div>
        <div
          className="restartWrap"
          onClick={() => onStandaloneClick()}
        >
          <img src="static/images/solaroutline.png" alt="" style={{width: 60}} />
          <p>Standalone Systems</p>
        </div>
        <div
          className="restartWrap"
          onClick={() => window.open("/allresources", "_self")}
        >
          <img src="static/images/file.svg" alt="" />
          <p>View all resources</p>
        </div>
      </div>
      <p className="font-normal text-[14px] text-center text-text mt-[30px] share-your-text">
        Share your contact information for future updates.
      </p>
      <div className="flex items-center justify-center inputFullWrap mt-[30px]">
      <SubscribeComponent />
      </div>
    </div>
  );
};

export default CompletedSteps;
