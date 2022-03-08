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
    <AccordionWrap>
      <Select onClick={toggling}>
        <Text>
          {selectedOption?.length
            ? selectedOption?.map((i, index) => `${index > 0 ? ", " : ""}` + i)
            : title}
        </Text>
        <Icon>
          <BiChevronDown />
        </Icon>
      </Select>
      {isOpen === title && (
        <DropDownListContainer>
          <DropDownList>
            {options?.map((option, index) => {
              return (
                <ListItem
                  onClick={onOptionClicked(option?.attributes?.label)}
                  key={index}
                >
                  <Span
                    selectedOption={selected?.includes(option?.id.toString())}
                  />{" "}
                  {""} {option?.attributes?.label}
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
