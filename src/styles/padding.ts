import { css, FlattenSimpleInterpolation } from "styled-components";
import { theme } from "./theme";

type CssSnippets = {
  padding: FlattenSimpleInterpolation;
};

const cssSnippets: CssSnippets = {
  padding: css`
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
      padding-left: 20px;
      padding-right: 20px;
    }
  `,
} as const;

export { cssSnippets };
