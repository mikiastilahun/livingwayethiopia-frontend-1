import styled from "styled-components";
import { cssSnippets } from "../../styles/cssSnippets";
import { theme } from "../../styles/theme";

export const DateContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0px;
  justify-content: start;
  gap: 5px;
  align-items: center;
  svg {
    margin: 0px;
    width: 16px;
    height: 16px;
    fill: ${theme.colors.third};
  }
  p {
    margin: 0px;
    font-style: italic;
    font-weight: lighter;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: ${theme.colors.third};
  }
`;
