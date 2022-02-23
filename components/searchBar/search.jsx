import React from 'react';
import {
    Wrap,
    Input,
    Icon
} from "./styles";
import { RiSearch2Line } from "react-icons/ri";

const SearchBar = () => {
    return (
        <Wrap>
            <Input>
            <input type="text" name="" value="" placeholder="Search"/>
                <Icon>
                    <RiSearch2Line />
                </Icon>
            </Input>
        </Wrap>
    );
};

export default SearchBar;