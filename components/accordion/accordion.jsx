import React from 'react';
import {
    AccordionWrap,
    Text,
    Select,
    Icon
} from "./styles";
import { BiChevronDown } from "react-icons/bi";

const Accordion = () => {
    return (
        <AccordionWrap>
            <Select>
                <Text>Select Country</Text>
                <Icon>
                    <BiChevronDown />
                </Icon>
            </Select>
        </AccordionWrap>
    );
};

export default Accordion;