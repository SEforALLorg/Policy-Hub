import React from "react";
import {
  FullWrapper,
  Wrapper,
  TopWrapper,
  Heading,
  ReportCard,
  ReportImg,
  Detail,
  ReportHeading,
  ReportSubTitle,
  GoButton,
  ReviewWrap,
  InnerWrap,
  ResourcesWrap,
  ResourceHeading,
  ResourceContent,
  BrowserBtn,
  InnerBody,
  BottomHeader,
  BottomWrapper,
  VideoWrap,
  VdWrap,
  VideoText,
} from "./styles";
import PrimaryButton from "components/buttons/component/primaryBtn/primarybutton";
import StartButton from "components/buttons/component/startButton/StartButton";
import ReviewCard from "./components/reviewCard";
import PopularResorces from "./components/popularResorces";
import ViewButton from "../buttons/viewall";
import VideoCard from "./components/video";

const Feature = ({ hideText }) => {
  return (
    <FullWrapper>
      <TopWrapper>
        <Wrapper>
          <Heading>Featured Resource </Heading>
          <ReportCard>
            <ReportImg>
              <img src={"/static/images/mustardflower.svg"} alt="mustard" />
            </ReportImg>
            <Detail>
              <ReportHeading>
                Regional Certification Guidelines For Off-Grid Solar
                Photovoltaic Technicians
              </ReportHeading>
              <ReportSubTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent porta venenatis velit sit amet posuere. Nam interdum
                augue at quam consequat semper. Nam ac tempor ex. In hac
                habitasse platea dictumst. Aenean blandit sollicitudin auctor.
                Nulla aliquet magna at purus lacinia gravida. Pellentesque
                vestibulum sit amet nisl eget tempus. In ut magna blandit,
                vulputate leo in, mattis erat. Proin efficitur lectus vel dolor
                fermentum, ac ultricies neque viverra. Ut sed lectus sed enim
                porta varius sed nec ipsum. Quisque a urna nulla. Aliquam tortor
                ligula, rutrum mollis urna eu, sodales interdum elit. Donec
                interdum leo.
              </ReportSubTitle>
              <GoButton>
                <PrimaryButton
                  onClick={() => window.open("/resources", "_self")}
                  title={"Go to Report"}
                />
              </GoButton>
            </Detail>
          </ReportCard>
          <ReviewWrap>
            <div className="cards">
              <ReviewCard
                hideText={true}
                date={"12/02/2022"}
                src={"/static/images/bulb.svg"}
                heading={
                  "Regional Certification Guidelines For Off-Grid Solar Photovoltaic Technicians"
                }
                subheading="Lorem ipsum dolor sit amet, consectetur..."
                showStar={true}
              />
            </div>
            <div className="cards">
              <ReviewCard
                date={"12/02/2022"}
                src={"/static/images/windfan.svg"}
                heading={
                  "Accelerating Mini-Grid Deployment in Sub-Saharan Africa - Lessons from Tanzania "
                }
                subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum ..."
                showStar={true}
              />
            </div>
          </ReviewWrap>
        </Wrapper>
      </TopWrapper>
      <InnerBody>
        <InnerWrap>
          <Wrapper>
            <ResourcesWrap>
              <ResourceContent>
                <ResourceHeading>Featured Resource </ResourceHeading>
                <PopularResorces
                  src={"/static/images/sun.svg"}
                  title="Funding the Sun: New Paradigms for Financing Off-Grid Solar Companies"
                />
                <PopularResorces
                  src={"/static/images/building.svg"}
                  title="Bangladesh: Rural Electrification And
                                 Renewable Energy Development Project: Environmental And Social Management Framework"
                />
                <PopularResorces
                  src={"/static/images/lights.svg"}
                  title="Living In The Light: The Bangladesh Solar Home Systems Story"
                />
                <ViewButton title={"View All"} />
              </ResourceContent>
              <ResourceContent>
                <ResourceHeading>Recently added</ResourceHeading>
                <PopularResorces
                  src={"/static/images/windtower.svg"}
                  title="Measuring Energy Access in India - Insights 
                                from applying a multi-tier framework in cooking energy and household electricity"
                />
                <PopularResorces
                  src={"/static/images/building.svg"}
                  title="Off-Grid Appliance Market Survey 2020"
                />
                <PopularResorces
                  src={"/static/images/lights.svg"}
                  title="Strategies for microgrid operation under real-world conditions"
                />
                <ViewButton title={"View All"} />
              </ResourceContent>
            </ResourcesWrap>
          </Wrapper>
        </InnerWrap>
        <BrowserBtn>
          <StartButton title={"Browse all resources"} />
        </BrowserBtn>
      </InnerBody>
      <BottomWrapper>
        <Wrapper>
          <BottomHeader>
            <VideoText>VIDEOS</VideoText>
            <VideoWrap>
              <VdWrap>
                <VideoCard />
              </VdWrap>
              <VdWrap>
                <VideoCard />
              </VdWrap>
              <VdWrap>
                <VideoCard />
              </VdWrap>
            </VideoWrap>
            <VideoText>News and stories</VideoText>
            <ResourcesWrap className="headingCard">
              <VdWrap>
                <ReviewCard
                  date={"12/02/2022"}
                  src={"/static/images/windfan.svg"}
                  heading={"Headline"}
                  subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum ..."
                  showStar={false}
                />
              </VdWrap>
              <VdWrap>
                <ReviewCard
                  date={"12/02/2022"}
                  src={"/static/images/windfan.svg"}
                  heading={"Headline"}
                  subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum ..."
                  showStar={false}
                />
              </VdWrap>
            </ResourcesWrap>
          </BottomHeader>
        </Wrapper>
      </BottomWrapper>
    </FullWrapper>
  );
};

export default Feature;
