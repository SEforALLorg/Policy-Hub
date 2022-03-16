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

const Accordion = ({
  title,
  isOpen,
  setIsOpen,
  options,
  onChange,
  selected,
  name,
  top
}) => {
  const [selectedOption, setSelectedOption] = useState([]);

  const toggling = () => {
    if (isOpen === title) {
      return setIsOpen("");
    }
    setIsOpen(title);
  };

  const onOptionClicked = (value) => () => {
    const options = [...selectedOption];
    const target = options?.includes(value);
    if (target) {
      const targetIndex = options?.indexOf(value);

      options.splice(targetIndex, 1);
      return setSelectedOption(options);
    }
    setSelectedOption([...selectedOption, value]);
  };
  return (
    <AccordionWrap active={isOpen === title || selectedOption?.length}>
      <Select onClick={toggling}>
        <Text selectedOption={selectedOption?.length}>
          {selectedOption?.length
            ? selectedOption?.map((i, index) => `${index > 0 ? ", " : ""}` + i)
            : title}
        </Text>
        <Icon style={{transform: isOpen === title ? 'rotate(-180deg)' : ''}}>
          <BiChevronDown />
        </Icon>
      </Select>
      {isOpen === title && (
        <DropDownListContainer>
          <DropDownList top={top}>
            {options?.map((option, index) => {
              return (
                <ListItem
                  onClick={onOptionClicked(option?.label)}
                  key={index}
                >
                  <Span
                    selectedOption={selected?.includes(option?.id.toString())}
                  />{" "}
                  {""} <p>{option?.label}</p>
                  <input
                    type="checkbox"
                    onChange={onChange}
                    id={option?.id}
                    name={name}
                  />
                </ListItem>
              );
            })}
          </DropDownList>
        </DropDownListContainer>
      )}
    </AccordionWrap>
  );
};

export default Accordion;
