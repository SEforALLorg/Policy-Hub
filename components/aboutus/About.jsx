import React from 'react';
import Imgcard from '../cards/component/imgCard';
import {
    Wrapper,
    Card,
    ImgWrap,
    Detail,
    Heading,
    SubTitle,
    BottomCard,
    SubHeading,
    ImgContainer,
    Box,
    BottomBox,
    FootBody
} from "./styles";
const About = () => {
    return (
        <Wrapper>
            <Card>
                <ImgWrap>
                    <img src={"static/images/substain.svg"} alt="flag" />
                </ImgWrap>
                <Detail>
                    <Heading>About us</Heading>
                    <SubTitle>
                        The Sustainable Energy for All Knowledge Hub is an interactive platform providing
                        sustainable energy policy makers and practitioners with off-the-shelf guidelines, tools,
                        templates and cases on energy policy and regulation published by international organizations
                        and thought leaders. In its first phase, the knowledge hub offers key resources on electricity access.
                    </SubTitle>
                    <SubTitle>
                        Further resources to support electrification efforts can be found at <span>electrifyingeconomies.org.</span>
                    </SubTitle>
                    <SubTitle>
                        Additional pillars of sustainable energy (access to clean cooking, sustainable cooling, energy
                        efficiency and renewable energy) will be added soon.
                    </SubTitle>
                </Detail>
            </Card>
            <BottomCard>
                <SubHeading> The knowledge hub is financed by </SubHeading>
                <ImgContainer>
                    <Box>
                        <Imgcard
                            style={{ height: "236px" }}
                            img={"static/images/rockfound.svg"}
                            title={"Rockefeller Foundation"} />
                    </Box>
                    <Box>
                        <Imgcard
                            style={{ height: "236px" }}
                            img={"static/images/farnesina.svg"}
                            title={"Ministry of Foreign Affairs of Italy"} />
                    </Box>
                </ImgContainer>
                <SubHeading> The knowledge hub partners include but not limited to  </SubHeading>
                <ImgContainer>
                    <BottomBox>
                        <Imgcard
                            style={{ height: "165px" }}
                            img={"static/images/Era.svg"}
                            title={"International RenewableEnergy Agency"} />
                    </BottomBox>
                    <BottomBox>
                        <Imgcard
                            style={{ height: "165px" }}
                            img={"static/images/worldbank.svg"}
                            title={"The World Bank"} />
                    </BottomBox>
                    <BottomBox>
                        <Imgcard
                            style={{ height: "165px" }}
                            img={"static/images/esmap.svg"}
                            title={"Energy Sector Management Assistance Program"} />
                    </BottomBox>
                    <BottomBox>
                        <Imgcard
                            style={{ height: "165px" }}
                            img={"static/images/giz.svg"}
                            title={"Deutsche Gesellschaft für Internationale Zusammenarbeit"} />
                    </BottomBox>
                </ImgContainer>
            </BottomCard>
            <FootBody>
                <SubTitle>
                    Many people contributed in many different ways to the creation of the
                    Sustainable Energy for All Knowledge Hub, and we are most grateful for their efforts.
                </SubTitle>
                <SubTitle>
                    Hadley Taylor, Min Hyejung, Niklas Hayek, Anant Wadhwa, and Stephen Kent led the content creation and review on behalf of Sustainable Energy for All (SEforALL).
                </SubTitle>
                <SubTitle>
                    This website was designed and developed by Keymouse IT. (Details from KMIT)
                </SubTitle>
                <SubTitle>
                    We also wish to thank the following individuals for their consultation and participation: ADD NAMES
                    The organizations showcased in the case studies were all generous with their time, providing detailed information and reviewing draft versions. Any errors remaining are the responsibility of the website authors.
                </SubTitle>
            </FootBody>
        </Wrapper>
    );
};

export default About;