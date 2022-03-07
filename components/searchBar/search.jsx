import React from "react";
import { Wrap, Input, Icon } from "./styles";
import { RiSearch2Line } from "react-icons/ri";

const SearchBar = ({ onChange, value }) => {
  return (
    <Wrap>
      <Input>
        <input
          type="text"
          value={value}
          placeholder="Search"
          onChange={onChange}
        />
        <Icon>
          <RiSearch2Line />
        </Icon>
      </Input>
    </Wrap>
  );
};

export default SearchBar;
