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
  ContentWrap,
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
  const countTooltip = bigCard ? 30 : 10;
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
              <img src={file} alt='flag' />
              {/* <ImageWrap
                style={{
                  backgroundImage: `url(${file})`,
                  backgroundSize:
                    file === "static/images/globe.png" ? "contain" : "",
                }}
              /> */}
              <Text className={!bigCard && isActive && "innerText"}>
                {countryName}
              </Text>
            </Box>
            <span />
          </>
        )}
        {area && (
          <>
            <Box>
              <Text className={!bigCard && isActive && "innerText"}>
                {area}
              </Text>
              {area?.length > countTooltip ? (
                <ContentWrap className={"content"}>{area}</ContentWrap>
              ) : null}
            </Box>
            <span />
          </>
        )}
        <Box style={{ width: "50px"}}>
          <Text className={!bigCard && isActive && "innerText"}>{item}</Text>
          {item?.length > countTooltip ? (
            <ContentWrap className={"content"}>{item}</ContentWrap>
          ) : null}
        </Box>
        <span />
        <Box style={{ width: "38px", justifyContent: 'flex-end', flex: 'unset'  }}>
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
