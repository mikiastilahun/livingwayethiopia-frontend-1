import Image from "next/image";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const OurCurchContainer = styled.div`
  min-width: 300px;
  background: ${theme.colors.background_secondary};
  width: 100vw;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
`;

export const InnerOurCurchContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding-left: 15vw;
  padding-right: 15vw;
  @media (min-width: ${theme.breakpoints.XXXL}px) {
    padding-left: 17.5vw;
    padding-right: 17.5vw;
  }
  @media (max-width: ${theme.breakpoints.XXL}px) {
    padding-left: 7.5vw;
    padding-right: 7.5vw;
  }
  @media (max-width: ${theme.breakpoints.XL}px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
  @media (max-width: ${theme.breakpoints.LG}px) {
    padding-left: 2.5vw;
    padding-right: 2.5vw;
  }
  @media (max-width: ${theme.breakpoints.SM}px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
