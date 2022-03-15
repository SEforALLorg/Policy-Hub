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
  CardsWrap,
  InnerCard,
  InnerCardText,
  DividerBottom,
  DividerRight
} from "./styles";

const SubCard = ({ HandleOpen }) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    onAnimation();
  }, []);

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
            for All <br />
            <PrimarySpan> Knowledge</PrimarySpan> Hub
          </Title>
          <CardsWrap>
            <InnerCard>
              <img src={"static/images/hub.svg"} alt="card" />
              <InnerCardText>
                The Sustainable Energy for All Knowledge Hub is an interactive
                platform that supports policy makers in developing conducive
                policy and regulatory frameworks for sustainable energy.
              </InnerCardText>
            </InnerCard>
            <DividerBottom />
            <InnerCard>
              <img src={"static/images/hub.svg"} alt="card" />
              <InnerCardText>
                <span>The knowledge hub</span> provides key resources for
                different steps in decision-making.
              </InnerCardText>
            </InnerCard>
            <DividerBottom />
          </CardsWrap>
          {/* <DividerBottom /> */}
          <DividerRight />
          <CardsWrap>
            <InnerCard>
              <img src={"static/images/journey.svg"} alt="card" />
              <InnerCardText>
                It currently offers resources on electricity access, but other
                pillars of sustainable energy (access to clean cooking,
                sustainable cooling, energy efficiency and renewable energy)
                will be added soon.
              </InnerCardText>
            </InnerCard>
            <InnerCard>
              <img src={"static/images/guide.svg"} alt="card" />
              <InnerCardText>
                Find <span>guidelines, tools, and templates</span> on
                electricity access relevant to your country and matched to your
                needs by answering the following questions.
              </InnerCardText>
            </InnerCard>
          </CardsWrap>
          {/* <Slider {...settings}>
            <Box>
              <Step className="topStep">
                <Point>
                  <SubTitle style={{ marginLeft: "20px" }}>
                    The Sustainable Energy for All Knowledge Hub is an
                    interactive platform that supports policy makers in
                    developing conducive policy and regulatory frameworks for
                    sustainable energy.
                  </SubTitle>
                </Point>
              </Step>
            </Box>
            <Box>
              <Step>
                <SubTitle>
                  <span>The knowledge hub</span> provides key resources for
                  different steps in decision-making.
                </SubTitle>
                <img src={"static/images/hub.svg"} alt="card" />
              </Step>
            </Box>
            <Box>
              <Step>
                <img src={"static/images/journey.svg"} alt="card" />
                <SubTitle>
                  It currently offers resources on electricity access, but other
                  pillars of sustainable energy (access to clean cooking,
                  sustainable cooling, energy efficiency and renewable energy)
                  will be added soon.
                </SubTitle>
              </Step>
            </Box>
            <Box>
              <Step>
                <SubTitle>
                  Find <span>guidelines, tools, and templates</span> on
                  electricity access relevant to your country and matched to
                  your needs by answering the following questions.
                </SubTitle>
                <img src={"static/images/guide.svg"} alt="card" />
              </Step>
            </Box>
          </Slider> */}
          {/* <MultilineReveal
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
          /> */}
        </Card>
        <BottomBtn
          className={showButton ? "animationButton" : ""}
          onClick={HandleOpen}
        >
          <StartButton title={"Click here to start"} className="w-full" />
        </BottomBtn>
      </Wrapper>
    </>
  );
};
export default SubCard;
