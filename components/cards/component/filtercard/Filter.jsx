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

const Report = ({
  style,
  title,
  countryName,
  mainImg,
  area,
  item,
  date,
  file,
  key,
  star,
  url
}) => {
  return (
    <Wrapper key={key} onClick={() => window.open(url)}>
      <Detail>
        <ImgWrapper>
          {mainImg && <img src={mainImg} alt="img" style={style} />}

          <Text>{title}</Text>
        </ImgWrapper>
        {
          star && <Icon>
            <AiFillStar />
          </Icon>
        }
      </Detail>
      <Border></Border>
      <BottomWrap>
        {
          countryName && <>
            <Box>
              <img src={file} alt="flag" />
              <Text>{countryName}</Text>
            </Box>
            <span />
          </>
        }
        <Box>
          <Text className="innerText">{area}</Text>
        </Box>
        <span />
        <Box>
          <Text className="innerText">{item}</Text>
        </Box>
        <span />
        <Box>
          <Text className="innerText">{date}</Text>
        </Box>
      </BottomWrap>
    </Wrapper>
  );
};

export default Report;
