import Image from "next/image";
import styled from "styled-components";
import { cssSnippets } from "../../../styles/cssSnippets";
import { theme } from "../../../styles/theme";

export const VideoListContainer = styled.div`
  min-width: 300px;
  width: 100%;
  padding-bottom: 50px;
  position: relative;
  .topImage {
    width: 100%;
    height: 350px;
    @media (max-width: ${theme.breakpoints.XXXL}px) {
      height: 300px;
    }
    @media (max-width: ${theme.breakpoints.LG}px) {
      height: 250px;
    }
    @media (max-width: ${theme.breakpoints.SM}px) {
      height: 200px;
    }
    position: relative;
    .background {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: ${theme.colors.third}66;
      z-index: 2;
    }
  }
  .videoListBottom {
    min-width: 300px;
    margin-top: 30px;
    width: 100%;
    grid-column-gap: 20px;
    grid-row-gap: 30px;
    flex-wrap: wrap;
    display: flex;
    ${cssSnippets.padding}
    position: relative;
    .videoCard {
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
  }
`;

export const HeaderImage = styled(Image)`
  z-index: 1;
  object-fit: cover;
`;
