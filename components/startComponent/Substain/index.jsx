import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Wrapper, Title, Span, PrimarySpan, SubTitle, Icon, Bottom, Card } from "./styles";
import Customize from "../customize/index";
import { useEffect } from "react";
const StartSubstain = () => {
  const [isOpen, setIsOpen] = useState(false)
  const HandleOpen = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if(isOpen) {
      document.getElementById('bottom-view').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
       })
    }
  }, [isOpen])

  return (
    <>
      <Wrapper>
        <Card>
          <Title>
            Sustainable
            <Span>Energy</Span>
            <br></br>
            for All<br></br>
            <PrimarySpan className="knowledge">Knowledge</PrimarySpan> Hub
          </Title>
          <SubTitle>
            The Sustainable Energy for All Knowledge Hub is an interactive platform
            that will help/support policy makers in developing conducive policy and
            regulatory frameworks for sustainable energy. The knowledge hub provides
            key resource material for each step of the decision-making process.
            Currently the platform supports the user journey for electricity access.
          </SubTitle>
          <SubTitle>
            Find relevant guidelines, tools and templates on electricity access
            based on your country’s assessment and matching your needs by answering
            the following questions. Scroll down to get started…
          </SubTitle>
          <Icon>
            <BsChevronDown onClick={HandleOpen} />
          </Icon>
        </Card>
      </Wrapper>
      {isOpen ?
        <Bottom id="bottom-view">
          <Customize />
        </Bottom>
        : null}
    </>
  );
}
export default StartSubstain;
