import styled from "styled-components";
import { cssSnippets } from "../../../styles/cssSnippets";
import { theme } from "../../../styles/theme";

export const BigCardContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 30px;
  margin-bottom: 30px;
  ${cssSnippets.padding}
`;

export const BigCard = styled.div`
  height: 100%;
  width: 100%;
  gap: 30px;
  border-radius: 40px;
  background-color: ${theme.colors.background_secondary};
  box-shadow: 3px 3px 10px #015b8f22;
  display: flex;
  flex-wrap: wrap-reverse;
  padding: 20px;
`;

export const LeftBigCard = styled.div`
  height: 100%;
  width: 50%;
  min-width: 500px;
  background-color: #123;
  display: flex;
  flex-direction: column;
`;

export const RightBigCard = styled.div`
  height: 100%;
  flex-grow: 100;
  border-radius: 40px;
  background-color: #321;
`;
