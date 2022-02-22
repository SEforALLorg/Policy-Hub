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
    BottomBox
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
                        Sustainable Energy for All (SEforALL) is an international organization
                        that works in partnership with the United Nations and leaders in government, the
                        private sector, financial institutions, civil society, and philanthropies to drive
                        faster action towards the achievement of Sustainable Development Goal 7 (SDG7) – access to
                        affordable, reliable, sustainable, and modern energy for all by 2030 – in line with the Paris
                        Agreement on climate. To learn more about SEforALL,
                        <span>click here.</span>
                    </SubTitle>
                    <SubTitle>
                        The Sustainable Energy for All Knowledge Hub is an interactive platform providing sustainable
                        energy policy makers and practitioners with off-the-shelf guidelines, tools, templates and case
                        on energy policy and regulation published by international organizations and thought leaders. In
                        the first phase, the knowledge hub gathers key resource material on electricity access. Other
                        pillars of Sustainable Development Goal 7 (Access to clean cooking, sustainable cooling, energy
                        efficiency, and renewable energy) to follow soon. Stay tuned for updates.
                    </SubTitle>
                </Detail>
            </Card>
            <BottomCard>
                <SubHeading> The knowledge hub is financed by </SubHeading>
                <ImgContainer>
                    <Box>
                        <Imgcard
                            style={{height:"236px"}}
                            img={"static/images/rockfound.svg"}
                            title={"Rockefeller Foundation"} />
                    </Box>
                    <Box>
                        <Imgcard
                            style={{height:"236px"}}
                            img={"static/images/farnesina.svg"}
                            title={"Ministry of Foreign Affairs of Italy"} />
                    </Box>
                </ImgContainer>
                <SubHeading> The knowledge hub partners include but not limited to  </SubHeading>
                <ImgContainer>
                    <BottomBox>
                        <Imgcard
                            style={{height:"165px"}}
                            img={"static/images/Era.svg"}
                            title={"International RenewableEnergy Agency"} />
                    </BottomBox>
                    <BottomBox>
                        <Imgcard
                            style={{height:"165px"}}
                            img={"static/images/worldbank.svg"}
                            title={"The World Bank"} />
                    </BottomBox>
                    <BottomBox>
                        <Imgcard
                            style={{height:"165px"}}
                            img={"static/images/esmap.svg"}
                            title={"Energy Sector Management Assistance Program"} />
                    </BottomBox>
                    <BottomBox>
                        <Imgcard
                            style={{height:"165px"}}
                            img={"static/images/giz.svg"}
                            title={"Deutsche Gesellschaft für Internationale Zusammenarbeit"} />
                    </BottomBox>
                </ImgContainer>
            </BottomCard>
        </Wrapper>
    );
};

export default About;