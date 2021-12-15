import styled from "styled-components";
import { cssSnippets } from "../../../styles/cssSnippets";
import { theme } from "../../../styles/theme";

export const PodcastCardContainer = styled.div`
  width: 100%;
  cursor: pointer;
  border-radius: 9px;
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
  .imageContainer {
    height: 200px;
    width: 100%;
    margin: 0px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    border-radius: 9px 9px 0px 0px;
  }
  .bottom {
    margin: 0px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    .articleTitle {
      margin: 0px;
      font-style: italic;
      font-weight: bolder;
      font-size: 24px;
      display: flex;
      align-items: center;
      color: ${theme.colors.text};
    }
    .articleDescription {
      margin: 0px;
      font-size: 14px;
      color: ${theme.colors.text_third};
    }
  }
  :hover {
    box-shadow: 3px 3px 10px #015b8f22;
  }
`;
