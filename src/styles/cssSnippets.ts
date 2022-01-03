import { css, FlattenSimpleInterpolation } from "styled-components";
import { theme } from "./theme";

type CssSnippets = {
  padding: FlattenSimpleInterpolation;
  select: FlattenSimpleInterpolation;
  input: FlattenSimpleInterpolation;
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
      padding-left: 15px;
      padding-right: 15px;
    }
    @media (max-width: 340px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  `,
  select: css`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  `,
  input: css`
    min-width: 300px;
    width: 35%;
    height: 55px;
    border: 0px;
    background-color: #eff3f7;
    padding-left: 20px;
    border-radius: ${theme.boarder.radius}px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #02073e;
    opacity: 0.8;
    @media (max-width: 595px) {
      width: 100%;
    }
    :focus {
      /* border: 1px solid ${theme.colors.primary}; */
      outline-color: ${theme.colors.secondary};
    }
  `,
} as const;

export { cssSnippets };
