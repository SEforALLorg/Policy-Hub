import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 100%;
  .slick-slide {
    height: 300px;
  }
  .slick-dots li button:before {
    transition: all 0.5s;
    font-size: 8px;
  }
  .slick-dots li.slick-active button:before {
    color: #fcb600;
    font-size: 20px;
  }
  .slick-dots {
    position: absolute;
    right: -33px;
    top: 50%;
    width: 10px;
    transform: translateY(-50%);
  }
  @media only screen and (min-width: 1680px) {
    height: 90%;
  }
`;