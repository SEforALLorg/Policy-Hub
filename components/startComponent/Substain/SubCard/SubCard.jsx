import React from "react";
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
  DividerRight,
  CardSection,
} from "./styles";

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
        <Card>
          <Title>
            Sustainable
            <Span> Energy </Span>
            for All <br />
            <PrimarySpan> Knowledge</PrimarySpan> Hub
          </Title>
          <CardsWrap>
            <CardSection>
              <InnerCard>
                <img src={"static/images/hub.svg"} alt="card" />
                <InnerCardText>
                  The <span>Sustainable Energy</span> for All Knowledge Hub is an interactive
                  platform that supports policy makers in developing conducive
                  policy and regulatory frameworks for sustainable energy.
                </InnerCardText>
              </InnerCard>
            </CardSection>

            <CardSection>
              <InnerCard>
                <img src={"static/images/hub.svg"} alt="card" />
                <InnerCardText>
                  <span>The knowledge hub</span> provides key resources for
                  different steps in decision-making.
                </InnerCardText>
              </InnerCard>
            </CardSection>
          </CardsWrap>
          <DividerRight />
          <CardsWrap>
            <CardSection>
              <DividerBottom />
              <InnerCard>
                <img src={"static/images/journey.svg"} alt="card" />
                <InnerCardText>
                  It currently offers resources on electricity access, but other
                  pillars of sustainable energy (access to clean cooking,
                  sustainable cooling, energy efficiency and renewable energy)
                  will be added soon.
                </InnerCardText>
              </InnerCard>
            </CardSection>

            <CardSection className="last-card">
              <DividerBottom />
              <InnerCard>
                <img src={"static/images/guide.svg"} alt="card" />
                <InnerCardText>
                  Find <span>guidelines, tools, and templates</span> on
                  electricity access relevant to your country and matched to
                  your needs by answering the following questions.
                </InnerCardText>
              </InnerCard>
            </CardSection>
          </CardsWrap>
        </Card>
        <BottomBtn onClick={HandleOpen}>
          <StartButton title={"Click here to start"} className="w-full" />
        </BottomBtn>
      </Wrapper>
    </>
  );
};
export default SubCard;
