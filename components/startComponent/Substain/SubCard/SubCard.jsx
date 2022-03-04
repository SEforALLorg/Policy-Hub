import React, { useEffect, useState } from "react";
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

  return (
    <>
      <Wrapper>
        <Card>
          <Title>
            Sustainable
            <Span>{' '} Energy {' '}</Span>
            for All 
            {/* <span style={{verticalAlign: 'text-bottom'}}>|</span> */}
            <PrimarySpan> Knowledge</PrimarySpan> Hub
          </Title>
          <Box>
            <Step className="topStep">
              <Point>
                <SubTitle style={{ marginLeft: "20px" }}>
                  The Sustainable Energy for All knowledge hub is an interactive
                  platform that will help/support policy makers in developing
                  conducive policy and regulatory frameworks for sustainable
                  energy. 
                </SubTitle>
              </Point>
            </Step>
          </Box>
          <Box>
            <Step>
              <SubTitle>
                <span>The knowledge hub</span> provides key resource material
                for each step of the decision-making process.
              </SubTitle>
              <img src={"static/images/hub.svg"} alt="card" />
            </Step>
          </Box>
          <Box>
            <Step>
              <img src={"static/images/journey.svg"} alt="card" />
              <SubTitle>
                Currently the platform supports the <span>user journey </span>
                for electricity access.
              </SubTitle>
            </Step>
          </Box>
          <Box>
            <Step>
              <SubTitle>
                Find relevant <span>guidelines, tools and templates</span> on
                electricity access based on your country’s assessment and
                matching your needs by answering the following questions.
              </SubTitle>
              <img src={"static/images/guide.svg"} alt="card" />
            </Step>
          </Box>
        </Card>
        <BottomBtn onClick={HandleOpen}>
          <StartButton title={"Click here to start"} />
        </BottomBtn>
      </Wrapper>
    </>
  );
};
export default SubCard;
