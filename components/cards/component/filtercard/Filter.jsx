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
  Description,
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
  bigCard,
  description,
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
      {description && (
        <Description
          className={`hideDescription ${isActive ? "showDescription" : ""}`}
        >
          {description}
        </Description>
      )}
      <Border></Border>
      <BottomWrap>
        {countryName && (
          <>
            <Box bigCard={bigCard}>
              <ImageWrap style={{ backgroundImage: `url(${file})`, backgroundSize: file === 'static/images/globe.png' ? 'contain' : '' }}>
                {/* <img src={file} alt="flag" /> */}
              </ImageWrap>
              <Text  className={!bigCard && isActive && "innerText"}>{countryName}</Text>
            </Box>
            <span />
          </>
        )}
        <Box>
          <Text className={!bigCard && isActive && "innerText"}>{area}</Text>
        </Box>
        <span />
        <Box style={{ width: "38px" }}>
          <Text className={!bigCard && isActive && "innerText"}>{item}</Text>
        </Box>
        <span />
        <Box style={{ width: "38px" }}>
          <Text className={!bigCard && isActive && "innerText"}>{date}</Text>
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
