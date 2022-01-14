import styled from "styled-components";
import { cssSnippets } from "../../styles/cssSnippets";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  min-width: 300px;
  width: 100%;
  padding-bottom: 50px;
  position: relative;
  ${cssSnippets.padding}
`;
