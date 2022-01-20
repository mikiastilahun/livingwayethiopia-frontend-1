import styled from "styled-components";
import { cssSnippets } from "../../../styles/cssSnippets";
import { theme } from "../../../styles/theme";

export const PodcastCardContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 9px;
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  .imageContainer {
    height: 250px;
    width: 100%;
    margin: 0px;
    border-radius: 4px;
    overflow: hidden;
  }
  .imageData {
    max-height: 250px;
    border-radius: 9px 9px 0px 0px;
    object-fit: fill;
    width: 100%;
  }
  .bottom {
    margin: 0px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 0px;
    .podcastTitle {
      margin: 0px;
      font-style: italic;
      font-weight: bolder;
      font-size: 20px;
      display: flex;
      align-items: center;
      color: ${theme.colors.text};
    }
    .podcastDescription {
      margin: 0px;
      font-size: 14px;
      color: ${theme.colors.text_third};
    }
  }
  :hover {
    box-shadow: 3px 3px 10px ${theme.colors.third}66;
  }
`;
