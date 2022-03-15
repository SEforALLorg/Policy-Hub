import React from "react";
import Slider from "react-slick";
import StartButton from "components/buttons/component/startButton/StartButton";
import { Wrapper } from "./styles";

const SubCard = ({ HandleOpen }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <Wrapper>
        <div className="w-full bg-white dropShadow rounded-lg	py-10 px-[80px] relative h-full">
          <h5 className="font-normal font-bold	text-[53px] leading-[64.4px] text-center	select-none	uppercase text-text text-center	pb-2.5 mt-10">
            Sustainable
            <span className="text-Secondary px-[6px]"> Energy </span>
            for All
            <span className="text-Primary pl-[6px]"> Knowledge</span> Hub
          </h5>
          <Slider {...settings}>
            <div>
              <div className="flex items-center gap-5	justify-between	py-[60px] w-full">
                <div className="border-l-[17px] border-Primary pl-5">
                  <div className="ont-normal text-[33.6px] leading-[50px] select-none	text-text m-0 w-full">
                    The Sustainable Energy for All Knowledge Hub is an
                    interactive platform that supports policy makers in
                    developing conducive policy and regulatory frameworks for
                    sustainable energy.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-5	justify-between	py-[60px] w-full">
                <div className="ont-normal text-[33.6px] leading-[50px] select-none	text-text m-0 w-full">
                  <span className="font-bold">The knowledge hub</span> provides
                  key resources for different steps in decision-making.
                </div>
                <img
                  className="w-[175px] h-[160px]"
                  src={"static/images/hub.svg"}
                  alt="card"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-5	justify-between	py-[60px] w-full">
                <img
                  className="w-[175px] h-[160px]"
                  src={"static/images/journey.svg"}
                  alt="card"
                />
                <div className="ont-normal text-[33.6px] leading-[50px] select-none	text-text m-0 w-full">
                  It currently offers resources on electricity access, but other
                  pillars of sustainable energy (access to clean cooking,
                  sustainable cooling, energy efficiency and renewable energy)
                  will be added soon.
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-5	justify-between	py-[60px] w-full">
                <div className="font-normal text-[33.6px] leading-[50px] select-none	text-text m-0 w-full">
                  Find{" "}
                  <span className="font-bold">
                    guidelines, tools, and templates
                  </span>{" "}
                  on electricity access relevant to your country and matched to
                  your needs by answering the following questions.
                </div>
                <img
                  className="w-[175px] h-[160px]"
                  src={"static/images/guide.svg"}
                  alt="card"
                />
              </div>
            </div>
          </Slider>
        </div>
        <div className="w-[40%] absolute bottom-[-32px]" onClick={HandleOpen}>
          <StartButton title={"Click here to start"} className="w-full" />
        </div>
      </Wrapper>
    </>
  );
};
export default SubCard;
