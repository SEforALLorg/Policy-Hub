import React, { useState, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import { DropDownList, Span } from "./styles";

const Select = ({
  title,
  isOpen,
  setIsOpen,
  options,
  onChange,
  selected,
  name,
  top,
  selectedOptions,
  setSelectedOptions,
  isClearAll,
  resourceType
}) => {
  const [selectedOption, setSelectedOption] = useState([]);

  useEffect(() => {
    setSelectedOption([]);
  }, [isClearAll]);

  const toggling = () => {
    if (isOpen === title) {
      return setIsOpen("");
    }
    setIsOpen(title);
  };

  const onOptionClicked = (value) => {
    const options = [...selectedOption];
    const target = options?.includes(value);
    if (target) {
      const targetIndex = options?.indexOf(value);

      options.splice(targetIndex, 1);
      return setSelectedOption(options);
    }
    setSelectedOption([...selectedOption, value]);
  };

  const onOptionSelectClicked = (value) => {
    const options = [...selectedOptions];

    const target = options?.includes(value);
    if (target) {
      const targetIndex = options?.indexOf(value);

      options.splice(targetIndex, 1);
      return setSelectedOptions(options);
    }
    setSelectedOptions([...selectedOptions, value]);
  };

  const active = isOpen === title || selectedOption?.length;
  return (
    <div
      className={`${"selectWrap"} ${active ? "borderColor" : "selectWrap"}`}
    >
      <div
        onClick={toggling}
        className="flex items-center justify-between pl-[12px] pr-[12px] pt-[10px] pb-[10px]"
      >
        <p
          className="font-normal text-[15px] text-lighttext m-0"
          style={{
            width: selectedOption?.length ? "93%" : "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {selectedOption?.length
            ? selectedOption?.map((i, index) => `${index > 0 ? ", " : ""}` + i)
            : title}
        </p>
        <div
          style={{
            transform: isOpen === title ? "rotate(-180deg)" : "",
            transition: "all .5s",
          }}
        >
          <BiChevronDown size={26} />
        </div>
      </div>
      {isOpen === title && (
        <div>
          <DropDownList top={top}>
            {options?.map((option, index) => {
              return (
                <div
                  className="selectListItem cursor-pointer"
                  onClick={() => {
                    onOptionClicked(option?.label);
                    onOptionSelectClicked(option?.label);
                  }}
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
                    className="cursor-pointer"
                  />
                </div>
              );
            })}
          </DropDownList>
        </div>
      )}
    </div>
  );
};

export default Select;
