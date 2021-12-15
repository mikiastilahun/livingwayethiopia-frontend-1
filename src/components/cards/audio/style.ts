import styled from "styled-components";
import { cssSnippets } from "../../../styles/cssSnippets";
import { theme } from "../../../styles/theme";

export const AudioCardContainer = styled.div`
  width: 100%;
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
  }
  .audioCardBottom {
    margin: 0px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 10px;
    .audioTitle {
      margin: 0px;
      text-align: left;
      font-style: italic;
      font-weight: bolder;
      font-size: 18px;
      color: ${theme.colors.text};
    }
    .audioDescription {
      margin: 0px;
      font-size: 14px;
      color: ${theme.colors.text_third};
    }
  }
  :hover {
    box-shadow: 4px 4px 10px ${theme.colors.third}66;
  }
`;
