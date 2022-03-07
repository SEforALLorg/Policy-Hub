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
  ImageWrap,
  GoReportsButton,
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
  url,
  onClick,
  isActive,
}) => {
  return (
    <Wrapper
      key={key}
      className={isActive ? "active" : ""}
      onClick={() => onClick()}
    >
      <Detail>
        <ImgWrapper>
          {mainImg && <img src={mainImg} alt="img" style={style} />}

          <Text className="title">{title}</Text>
        </ImgWrapper>
        {star && (
          <Icon>
            <AiFillStar />
          </Icon>
        )}
      </Detail>
      <Border></Border>
      <BottomWrap>
        {countryName && (
          <>
            <Box>
              <ImageWrap style={{ backgroundImage: `url(${file})` }}>
                {/* <img src={file} alt="flag" /> */}
              </ImageWrap>
              <Text>{countryName}</Text>
            </Box>
            <span />
          </>
        )}
        <Box>
          <Text className="innerText">{area}</Text>
        </Box>
        <span />
        <Box style={{ width: "38px" }}>
          <Text className="innerText">{item}</Text>
        </Box>
        <span />
        <Box style={{ width: "38px" }}>
          <Text className="innerText">{date}</Text>
        </Box>
        {isActive && (
          <GoReportsButton onClick={() => window.open(url)}>
            Go to Report
          </GoReportsButton>
        )}
      </BottomWrap>
    </Wrapper>
  );
};

export default Report;
