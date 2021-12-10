import Image from "next/image";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ServiceContainer = styled.div`
  min-width: 300px;
  background: ${theme.colors.background};
  width: 100vw;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
`;

export const InnerServiceContainer = styled.div`
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

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  width: 45%;
  gap: 30px;
  .left {
    background-color: ${theme.colors.background_secondary};
    box-shadow: 0px 8px 24px rgba(53, 95, 158, 0.1);
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 10px;
  }
  .right {
    .top {
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
      display: flex;
      align-items: center;
      color: ${theme.colors.text};
    }

    .bottom {
      font-family: DM Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 30px;
      color: #343d48;
    }
  }
`;
