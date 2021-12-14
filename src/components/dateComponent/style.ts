import styled from "styled-components";
import { cssSnippets } from "../../styles/padding";
import { theme } from "../../styles/theme";

export const DateContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0px;
  justify-content: start;
  gap: 10px;
  align-items: center;
  svg {
    margin: 0px;
    width: 20px;
    height: 20px;
    fill: ${theme.colors.third};
  }
  p {
    margin: 0px;
    font-style: italic;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: ${theme.colors.third};
  }
`;
