import styled from "styled-components";
import { theme } from "../../styles/theme";

export const LogoImage = styled.img`
  max-height: 5vh;
  cursor: pointer;
  vertical-align: middle;
  object-fit: fill;
  @media (max-width: ${theme.breakpoints.SM}px) {
    max-height: 5vh;
  }
`;
