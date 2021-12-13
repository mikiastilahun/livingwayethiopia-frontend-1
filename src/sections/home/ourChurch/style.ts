import Image from "next/image";
import styled from "styled-components";
import { cssSnippets } from "../../../styles/padding";
import { theme } from "../../../styles/theme";

export const OurCurchContainer = styled.div`
  min-width: 300px;
  background: ${theme.colors.background_secondary};
  width: 100vw;
  gap: 10px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
  ${cssSnippets.padding}
`;

export const TopContainer = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 10px;
  position: relative;
  overflow: hidden;
  .firstContainer {
    display: grid;
    height: 300px;
    position: relative;
    @media (min-width: 1900px) {
      height: 400px;
    }
    grid-column: 1/3;
    @media (max-width: ${theme.breakpoints.LG}px) {
      grid-column: 1/5;
      height: 400px;
    }
    @media (max-width: ${theme.breakpoints.SM}px) {
      grid-column: 1/10;
      height: 500px;
    }
    grid-gap: 10px;
    overflow: hidden;
    div {
      position: relative;
      height: 100%;
      border-radius: 9px;
    }
  }
  .secondContainer {
    height: 300px;
    @media (min-width: 1900px) {
      height: 400px;
    }
    grid-column: 3/5;
    @media (max-width: ${theme.breakpoints.LG}px) {
      grid-column: 5/10;
      height: 400px;
    }
    @media (max-width: ${theme.breakpoints.SM}px) {
      grid-column: 1/10;
    }
    position: relative;
    overflow: hidden;
    border-radius: 9px;
  }
  .thirdContainer {
    height: 300px;
    display: flex;
    grid-column: 5/10;
    @media (max-width: ${theme.breakpoints.LG}px) {
      height: 400px;
      grid-column: 1/10;
    }
    @media (min-width: 1900px) {
      height: 400px;
    }
    overflow: hidden;
    position: relative;
    border-radius: 9px;
  }
`;

export const BottomContainer = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 10px;
  position: relative;
  overflow: hidden;
  .firstContainer {
    height: 300px;
    grid-column: 1/6;
    @media (max-width: ${theme.breakpoints.LG}px) {
      grid-column: 1/10;
      height: 400px;
    }
    @media (min-width: 1900px) {
      height: 400px;
    }
    overflow: hidden;
    position: relative;
    border-radius: 9px;
  }
  .secondContainer {
    height: 300px;
    @media (min-width: 1900px) {
      height: 400px;
    }

    grid-column: 6/8;
    @media (max-width: ${theme.breakpoints.LG}px) {
      grid-column: 1/5;
      height: 400px;
    }
    @media (max-width: ${theme.breakpoints.SM}px) {
      grid-column: 1/10;
      height: 250px;
    }
    position: relative;
    overflow: hidden;
    border-radius: 9px;
  }

  .thirdContainer {
    height: 300px;
    @media (min-width: 1900px) {
      height: 400px;
    }
    grid-column: 8/10;
    @media (max-width: ${theme.breakpoints.LG}px) {
      grid-column: 5/10;
      height: 400px;
    }
    @media (max-width: ${theme.breakpoints.SM}px) {
      grid-column: 1/10;
      height: 250px;
    }
    position: relative;
    overflow: hidden;
    border-radius: 9px;
  }
`;

export const SmallImage = styled(Image)`
  object-fit: cover;
  position: relative;
  border-radius: 9px;
`;
