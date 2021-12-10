import Image from "next/image";
import styled from "styled-components";
import { cssSnippets } from "../../styles/padding";
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
  ${cssSnippets.padding}
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 70px auto;
  gap: 30px;
  width: calc(50% - 25px);

  @media (max-width: 944px) {
    gap: 15px;
  }
  @media (max-width: 915px) {
    width: calc(100% - 25px);
  }
  .left {
    background-color: ${theme.colors.background_secondary};
    box-shadow: 0px 8px 24px rgba(53, 95, 158, 0.1);
    height: 70px;
    width: 70px;
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
      line-height: 25px;
      display: flex;
      align-items: center;
      color: ${theme.colors.text};
      @media (max-width: ${theme.breakpoints.SM}px) {
        line-height: 30px;
      }
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
