import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { CharacterReveal } from "react-text-reveal";
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
} from "./styles";

const SubCard = ({ HandleOpen }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    onAnimation();
  }, []);

  console.log(startAnimation, "startAnimation");

  const onAnimation = () => {
    setTimeout(() => setStartAnimation(true), 500);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            {/* <span style={{verticalAlign: 'text-bottom'}}>|</span> */}
            <PrimarySpan> Knowledge</PrimarySpan> Hub
          </Title>
          <CharacterReveal
            // animateOpacity={false}
            canPlay={startAnimation}
            characterOffsetDelay={25} // ms
            characterWordSpacing={"10px"}
            copy={["Make.", "Something.", "Move."]}
            direction={"bottom"}
            duration={1275} // ms
            ease={"cubic-bezier(0,0.4,0.4,1)"}
            offset={"45px"}
            // multilineMasking={true}
            multilineOffsetDelay={200} // ms
          />

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
        </Card>
        <BottomBtn onClick={HandleOpen}>
          <StartButton title={"Click here to start"} className="w-full" />
        </BottomBtn>
      </Wrapper>
    </>
  );
};
export default SubCard;
