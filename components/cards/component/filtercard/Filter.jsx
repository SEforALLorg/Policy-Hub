import React from "react";
import {
  Wrapper,
  Detail,
  Text,
  Icon,
  Border,
  BottomWrap,
  Box,
  ImgWrapper,
} from "./styles";
import { AiFillStar } from "react-icons/ai";

const Filter = ({
  style,
  title,
  countryname,
  mainImg,
  area,
  item,
  date,
  file,
}) => {
  return (
    <Wrapper>
      <Detail>
        <ImgWrapper>
          {mainImg && <img src={mainImg} alt="img" style={style} />}

          <Text>{title}</Text>
        </ImgWrapper>
        <Icon>
          <AiFillStar />
        </Icon>
      </Detail>
      <Border></Border>
      <BottomWrap>
        <Box>
          <img src={file} alt="flag" />
          <Text>{countryname}</Text>
        </Box>
        <Box>
          <Text>{area}</Text>
        </Box>
        <Box>
          <Text>{item}</Text>
        </Box>
        <Box>
          <Text>{date}</Text>
        </Box>
      </BottomWrap>
    </Wrapper>
  );
};

export default Filter;
