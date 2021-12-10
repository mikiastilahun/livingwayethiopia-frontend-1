import Image from "next/image";
import styled from "styled-components";
import { cssSnippets } from "../../styles/padding";
import { theme } from "../../styles/theme";

export const VisionContainer = styled.div`
  position: relative;
  min-width: 300px;
  background: ${theme.colors.background};
  width: 100vw;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
`;

export const TopPart = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    z-index: 10;
    color: #fff;
    padding-left: 15vw;
    padding-right: 15vw;
    @media (max-width: ${theme.breakpoints.XXL}px) {
      padding-left: 7.5vw;
      padding-right: 7.5vw;
    }
    @media (max-width: ${theme.breakpoints.XL}px) {
      padding-left: 5vw;
      padding-right: 5vw;
    }
    @media (max-width: ${theme.breakpoints.LG}px) {
      padding-left: 2.5vw;
      padding-right: 2.5vw;
    }
    @media (max-width: ${theme.breakpoints.SM}px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  .coverColor {
    width: 100%;
    height: 100%;
    background-color: #00000099;
    position: absolute;
    z-index: 2;
  }
`;

export const TopImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

interface bottomPartType {
  left: boolean;
}

export const BottomPart = styled.div<bottomPartType>`
  margin-top: 50px;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.left ? "row-reverse" : "row")};
  align-items: flex-start;
  gap: 30px;
  ${cssSnippets.padding}
  .title {
    color: ${theme.colors.text};
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    text-align: center;
    letter-spacing: -1px;
    margin: 0px;
  }
  .subText {
    margin: 0px;
    font-size: 18px;
    color: ${theme.colors.text_secondary};
    word-break: break-all;
  }
`;

export const IconImage = styled.div`
  width: 20px;
  height: 20px;
  overflow: hidden;
  object-fit: fill;
`;
