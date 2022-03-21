import styled from "styled-components";
import { colors, fontSizes, space, fullWidth } from "../../../../constant";

export const Wrapper = styled.div`
  background: ${colors.white};
  box-shadow: 0px 4.90168px 17.1559px rgba(0, 0, 0, 0.1);
  border-radius: 7.3px;
  width: ${fullWidth};
  margin-bottom: ${space[10]}px;
  border: 3.67626px solid ${colors.white};
  cursor: pointer;
  transition: all .5s;
  &.active{
    border: 3.67626px solid #065A89;
    .title{
      font-weight: bold;
    }
  }
  &:hover{
    border: 3.67626px solid #065A89;
  }
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
    width: 60px;
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
  position: relative;
  p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  img {
    width: 25px;
    height: 25px;
    margin-right: ${space[4]}px;
  }
  .content{
    visibility: hidden;
    opacity: 0;
  }
  &:hover{
      .content{
          visibility: visible;
          opacity: 1;
          transition: all .2s;
      }
  }
`;

export const ImageWrap = styled.div`
  margin-right: ${space[4]}px;
  width: 20px;
  height: 20px;
  background-size: 60px;
  border-radius: 50%;
  overflow: hidden;
  background-position: center;
`;

export const GoReportsButton = styled.button`
  background: rgba(19, 166, 191, 0.2);
  border-radius: 84.554px;
  padding: 5px 10px;
  width: 100px;
  border: none;
  font-size: 10px;
  // margin-left: -48px;
  color: #13A6BF;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  margin: 0px;
  color: #494949;
  &.hideDescription{
    max-height: 0;
    transition: max-height 0.5s ease-out;
    overflow: hidden;
    padding: 0px;
  }
  &.showDescription{
    max-height: 500px;
    transition: max-height 0.7s ease-in;
    padding: 0px 12px;
  }
`;


export const ContentWrap = styled.div`
  width: 290px;
  box-shadow: 0px 0px 8px -4px #000;
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  background: #065A89;
  border-radius: 3.83823px;
  z-index: 999;
  padding: 9px;
  font-size: 14px;
  color: ${colors.white};
  font-weight: 400;
  line-height: 20px;
  filter: drop-shadow(5px 5px 12px rgba(31, 99, 148, 0.25));
  &::after {
      content: "";
      position: absolute;
      top: -16px;
      left: 50%;
      margin-left: -5px;
      border-width: 8px;
      border-style: solid;
      border-color: transparent transparent #065A89 transparent;
  }
`;
