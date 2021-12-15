import Image from "next/image";
import styled from "styled-components";
import { cssSnippets } from "../../../styles/cssSnippets";
import { theme } from "../../../styles/theme";

export const PodcastListContainer = styled.div`
  min-width: 300px;
  width: 100%;
  gap: 20px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  ${cssSnippets.padding}
  .podcastCard {
    margin: 0px;
    width: calc(33% - 11px);
    @media (min-width: ${theme.breakpoints.XXXL}px) {
      width: calc(24.5% - 10px);
    }

    @media (max-width: 1426px) {
      width: calc(33% - 11px);
    }

    @media (max-width: ${theme.breakpoints.Md}px) {
      width: calc(50% - 10px);
    }
    @media (max-width: 505px) {
      width: 100%;
    }
  }
`;
export const SearchContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  margin-bottom: 20px;
  justify-content: flex-end;
  @media (max-width: ${theme.breakpoints.XSM}px) {
    justify-content: flex-start;
  }
  .searchBox {
    display: flex;
    gap: 10px;
  }
`;

export const SearchFormInput = styled.input`
  border: 0px;
  width: 100%;
  min-width: 275px;
  @media (max-width: ${theme.breakpoints.XSM}px) {
    min-width: 260px;
  }
  @media (max-width: 355px) {
    min-width: 240px;
  }
  @media (max-width: 335px) {
    min-width: 225px;
  }
  border-radius: ${theme.boarder.radius}px;
  font-style: normal;
  font-weight: normal;
  color: ${theme.colors.heading};
  padding-left: 20px;
  opacity: 0.8;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${theme.colors.heading}99;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${theme.colors.heading}99;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${theme.colors.heading}99;
  }
  :focus {
    outline-color: ${theme.colors.secondary}44;
  }
  height: 40px;
  background-color: ${theme.colors.secondary}22;
  font-size: 16px;
`;

export const SearchBox = styled.div`
  border-radius: ${theme.boarder.radius}px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.secondary};
  padding: 5px;
  padding-left: 7.5px;
  padding-right: 7.5px;
  @media (max-width: ${theme.breakpoints.SM}px) {
    width: 50px;
  }
  @media (max-width: ${theme.breakpoints.XSM}px) {
    width: 50px;
  }
`;
