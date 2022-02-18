import React from 'react';
import {
    Wrapper,
    Detail,
    Text,
    Icon,
    Border,
    BottomWrap,
    Box
} from "./styles";
import { AiFillStar } from "react-icons/ai";

const Filter = () => {
    return (
        <Wrapper>
            <Detail>
                <Text>
                    A review of microgrid development in the United States – A
                    decade of progress on policies, demonstrations, controls, and software tools
                </Text>
                <Icon>
                    <AiFillStar />
                </Icon>
            </Detail>
            <Border></Border>
            <BottomWrap>
                <Box>
                    <img src="static/images/USAflag.svg" alt="flag" />
                    <Text>
                        USA
                    </Text>
                </Box>
                <Box>
                    <Text>
                        North America
                    </Text>
                </Box>
                <Box>
                    <Text>
                        IRENA
                    </Text>
                </Box>
                <Box>
                    <Text>
                        2017
                    </Text>
                </Box>
            </BottomWrap>
        </Wrapper>
    );
};

export default Filter;