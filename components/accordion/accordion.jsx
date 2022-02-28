import React, { useState } from "react";
import {
  AccordionWrap,
  Text,
  Select,
  Icon,
  DropDownListContainer,
  ListItem,
  DropDownList,
  Span,
} from "./styles";
import { BiChevronDown } from "react-icons/bi";

const Accordion = ({ title, isOpen, setIsOpen, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => {
    if (isOpen === title) {
      return setIsOpen("");
    }
    setIsOpen(title);
  };

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
  };
  return (
    <AccordionWrap>
      <Select onClick={toggling}>
        <Text>{title}</Text>
        <Icon>
          <BiChevronDown />
        </Icon>
      </Select>
      {isOpen === title && (
        <DropDownListContainer>
          <DropDownList>
            {options?.map((option, index) => (
              <>
                <ListItem onClick={onOptionClicked(option)} key={index}>
                  <Span selectedOption={option === selectedOption}> </Span> {""}{" "}
                  {option}
                </ListItem>
              </>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </AccordionWrap>
  );
};

export default Accordion;
