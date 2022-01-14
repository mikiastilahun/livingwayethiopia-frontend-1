import styled from "styled-components";
import { cssSnippets } from "../../../styles/cssSnippets";
import { theme } from "../../../styles/theme";

export const VideoCardContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 9px;
  background-color: ${theme.colors.background};
  display: flex;
  gap: 10px;
  flex-direction: column;
  box-shadow: 3px 3px 10px ${theme.colors.third}44;
  .imageContainer {
    height: 200px;
    width: 100%;
    margin: 0px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    border-radius: 9px 9px 0px 0px;
    .videoSide {
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.third}99;
      padding: 10px;
      right: 10px;
      top: 10px;
      border-radius: ${theme.boarder.radius}px;
      font-weight: lighter;
      padding: 10px;
      text-align: right;
      font-size: 12px;
      position: absolute;
      color: #fff;
      z-index: 3;
    }
  }
  .videoCardBottom {
    margin: 0px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 10px;
    .videoDescription {
      color: ${theme.colors.text_third};
    }
  }
  :hover {
    box-shadow: 4px 4px 10px ${theme.colors.third}66;
  }
`;
