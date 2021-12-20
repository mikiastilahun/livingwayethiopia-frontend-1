import Image from "next/image";
import styled from "styled-components";
import { cssSnippets } from "../../styles/cssSnippets";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  min-width: 300px;
  width: 100vw;
  gap: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 60px;
  ${cssSnippets.padding}
`;
