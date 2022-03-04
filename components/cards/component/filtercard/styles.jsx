import styled from "styled-components";
import { colors, fontSizes, space, fullWidth } from "../../../../constant";

export const Wrapper = styled.div`
  background: ${colors.white};
  box-shadow: 0px 4.90168px 17.1559px rgba(0, 0, 0, 0.1);
  border-radius: 7.3px;
  width: ${fullWidth};
  margin-bottom: ${space[10]}px;
  cursor: pointer;
`;
export const Detail = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${space[6]}px;
  width: ${fullWidth};
`;
export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${space[9]}px;
  img {
    width: ${fullWidth};
    margin-right: ${space[9]}px;
  }
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: ${fontSizes[0] + 2}px;
  line-height: 21px;
  margin: ${space[0]}px;
  color: ${colors.text};
  &.innerText {
    font-size: ${fontSizes[0]}px;
    width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
export const Icon = styled.div`
  svg {
    font-size: ${fontSizes[3] + 2}px;
    color: ${colors.secondary};
  }
`;
export const Border = styled.div`
  border-bottom: 2.4px solid rgba(134, 164, 176, 0.15);
`;
export const BottomWrap = styled.div`
  display: flex;
  padding: ${space[6]}px;
  align-items: center;
  span {
    border-left: 3px solid rgba(134, 164, 176, 0.15);
    width: 3px;
    height: 20px;
    margin: 0px ${space[4]}px;
    &:last-child:after {
      border-left: none;
    }
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  p{
    width: 61px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
  }
`;

export const ImageWrap = styled.div`
  margin-right: ${space[4]}px;
  width: 25px;
  height: 25px;
  background-size: 60px;
  border-radius: 50%;
  overflow: hidden;
  background-position: center;
`;
