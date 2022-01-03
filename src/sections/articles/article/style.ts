import Image from "next/image";
import styled from "styled-components";
import { cssSnippets } from "../../../styles/cssSnippets";
import { theme } from "../../../styles/theme";

export const ArticleContainer = styled.div`
  min-width: 300px;
  width: 100vw;
  position: relative;
  background: ${theme.colors.background_secondary};
  ${cssSnippets.padding}
  .bodyText {
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
`;
