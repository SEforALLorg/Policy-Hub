import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { MultilineReveal } from "react-text-reveal";
import StartButton from "components/buttons/component/startButton/StartButton";
import {
  Wrapper,
  Title,
  Span,
  PrimarySpan,
  SubTitle,
  Point,
  Card,
  Step,
  Box,
  BottomBtn,
  InnerTitle,
} from "./styles";

const SubCard = ({ HandleOpen }) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    onAnimation();
  }, []);

  console.log(startAnimation, "startAnimation");

  const onAnimation = () => {
    setTimeout(() => setStartAnimation(true), 500);
    setTimeout(() => setShowButton(true), 3500);
  };


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
        <Card>
          <Title>
            Sustainable
            <Span> Energy </Span>
            for All
            <PrimarySpan> Knowledge</PrimarySpan> Hub
          </Title>
          <MultilineReveal
            animateOpacity={true}
            canPlay={startAnimation}
            copy={[
              <InnerTitle>
                The Sustainable Energy for All Knowledge Hub is an interactive
                platform that supports policy makers in developing conducive
                policy and regulatory frameworks for sustainable energy.
              </InnerTitle>,
              <InnerTitle>
                <span>The knowledge hub</span> provides key resources for
                different steps in decision-making.
              </InnerTitle>,
              <InnerTitle>
                It currently offers resources on electricity access, but other
                pillars of sustainable energy (access to clean cooking,
                sustainable cooling, energy efficiency and renewable energy)
                will be added soon.
              </InnerTitle>,
              <InnerTitle>
                Find <span>guidelines, tools, and templates</span> on
                electricity access relevant to your country and matched to your
                needs by answering the following questions.
              </InnerTitle>,
            ]}
            direction={"bottom"}
            duration={1125} // ms
            ease={"cubic-bezier(0,0.4,0.4,1)"}
            offset={"260px"}
            multilineMasking={true}
            multilineOffsetDelay={725} // ms
          />
        </Card>
        <BottomBtn className={showButton ? 'animationButton' : ''} onClick={HandleOpen}>
          <StartButton title={"Click here to start"} className="w-full" />
        </BottomBtn>
      </Wrapper>
    </>
  );
};
export default SubCard;
