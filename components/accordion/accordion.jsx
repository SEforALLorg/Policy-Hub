import React from "react";
import { AccordionWrap, Text, Select, Icon } from "./styles";
import { BiChevronDown } from "react-icons/bi";

const Accordion = ({ title }) => {
  return (
    <AccordionWrap>
      <Select>
        <Text>{title}</Text>
        <Icon>
          <BiChevronDown />
        </Icon>
      </Select>
    </AccordionWrap>
  );
};

export default Accordion;
