import Image from "next/image";
import styled from "styled-components";
import { cssSnippets } from "../../styles/cssSnippets";
import { theme } from "../../styles/theme";

export const SermonContainer = styled.div`
  min-width: 300px;
  width: 100vw;
  gap: 20px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  ${cssSnippets.padding}
  .tabs {
    display: flex;
    gap: 30px;
  }
  .divider {
    width: 100%;
    height: 2px;
    background-color: ${theme.colors.third}22;
    border-radius: 50px;
  }
`;

interface TabContainerData {
  active?: boolean;
}

export const TabContainer = styled.div<TabContainerData>`
  p {
    font-size: 20px;
    margin: 0px;
    font-weight: ${(props) => (props.active ? "bolder" : "bolder")};
    color: ${(props) =>
      props.active ? theme.colors.primary : theme.colors.third};
    transition: all 0.2s ease-out;
    :hover {
      /* font-weight: bolder; */
      color: ${theme.colors.primary};
    }
  }
  display: flex;
  align-items: center;
  cursor: pointer;
  ${cssSnippets.select}
`;
