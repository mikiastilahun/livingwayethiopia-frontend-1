import styled from "styled-components";
import { theme } from "../../styles/theme";
import Image from "next/image";
import Link from "next/link";

type HeaderType = {
  isSticky: boolean;
};

type NavLinkType = {
  active: boolean;
};

type FullComponentType = {
  center: boolean;
};

export const HeaderContainer = styled.header<HeaderType>`
  font-weight: normal;
  padding: 10px;
  padding-left: 10vw;
  padding-right: 10vw;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.4s ease;
  display: grid;
  color: ${theme.colors.primary};
  background-color: ${(props) =>
    props.isSticky ? theme.colors.background_secondary : "transparent"};
  box-shadow: ${(props) =>
    props.isSticky ? "0 1px 2px rgba(0, 0, 0, 0.08)" : "0 0 0"};
  @media (max-width: ${theme.breakpoints.XXL}px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
  @media (max-width: ${theme.breakpoints.XL}px) {
    padding-left: 2.5vw;
    padding-right: 2.5vw;
  }
  @media (max-width: ${theme.breakpoints.SM}px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const LogoImage = styled.img`
  max-height: 3.5vh;
  cursor: pointer;
  vertical-align: middle;
  object-fit: fill;
  @media (max-width: ${theme.breakpoints.SM}px) {
    max-height: 4.5vh;
  }
`;

export const Logo = styled.div`
  grid-column: 1/2;
  @media (max-width: ${theme.breakpoints.SM}px) {
    grid-column: 1/3;
  }
`;

export const Detail = styled.div`
  grid-column: 2/10;
  display: grid;
  @media (max-width: ${theme.breakpoints.SM - 1}px) {
    grid-column: 8/10;
  }
`;

export const FullScreenComponent = styled.div<FullComponentType>`
  @media (max-width: ${theme.breakpoints.LG - 1}px) {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-self: flex-end;

  .borderContainer {
    height: 40px;
    width: 2.5px;
    margin-left: 5px;
    margin-right: 5px;
    background-color: ${theme.colors.secondary};
    border-radius: 15px;
  }
`;

export const NavLink = styled.span<NavLinkType>`
  margin-left: 15px;
  margin-right: 15px;
  font-size: 14px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  font-weight: 450;
  text-transform: capitalize;
  color: ${(props) =>
    props.active ? theme.colors.primary : theme.colors.text};
  cursor: pointer;
  font-family: ${theme.fonts.body} -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
`;

export const ButtonNav = styled.button`
  margin-left: 15px;
  margin-right: 15px;
  padding: 7.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: ${theme.boarder.radius}px;
  font-size: 16px;
  text-decoration: none;
  border: 0px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.secondary};
  font-weight: 450;
  text-transform: capitalize;
  cursor: pointer;
  font-family: ${theme.fonts.body};
`;

export const MobileScreenComponent = styled.div`
  justify-self: flex-end;
  height: 3.5vh;
  @media (max-width: ${theme.breakpoints.SM}px) {
    height: 4.5vh;
  }
  align-self: center;
  @media (min-width: ${theme.breakpoints.LG}px) {
    display: none;
  }
  img {
    height: 3.5vh;
    align-self: center;
    @media (max-width: ${theme.breakpoints.SM}px) {
      height: 4.5vh;
    }
  }
`;
