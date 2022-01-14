import Image from "next/image";
import styled from "styled-components";
import { cssSnippets } from "../../../styles/cssSnippets";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  min-width: 300px;
  width: 100%;
  padding-bottom: 50px;
  position: relative;
  ${cssSnippets.padding}
  background: ${theme.colors.background_secondary};
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

  .videoVisual {
    height: 600px;
    width: 100%;
    position: relative;
    .background {
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 1;
    }
    @media (max-width: ${theme.breakpoints.Md}px) {
      height: 500px;
    }
    @media (max-width: ${theme.breakpoints.SM}px) {
      height: 400px;
    }
    @media (max-width: ${theme.breakpoints.XMSM}px) {
      height: 300px;
    }

    iframe {
      position: absolute;
      z-index: 15;
      height: 100%;
      width: 100%;
    }
  }
  .description {
    margin-top: 50px;

    @media (max-width: 936px) {
      margin-top: 75px;
    }
    @media (max-width: 490px) {
      margin-top: 100px;
    }
    @media (max-width: 350px) {
      margin-top: 135px;
    }
  }
`;

export const ImageContainer = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
