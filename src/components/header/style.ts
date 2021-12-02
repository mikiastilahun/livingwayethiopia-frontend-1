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
  height: 60px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.4s ease;
  display: flex;
  z-index: 10000000;
  justify-content: space-between;
  color: ${theme.colors.primary};
  background-color: ${(props) =>
    props.isSticky ? theme.colors.background_secondary : "transparent"};
  box-shadow: ${(props) =>
    props.isSticky ? "0 1px 2px rgba(0, 0, 0, 0.08)" : "0 0 0"};
  padding-left: 15vw;
  padding-right: 15vw;
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
  @media (max-width: ${theme.breakpoints.XMd - 1}px) {
    display: none;
  }
  display: flex;
  align-items: center;
`;

export const NavLink = styled.span<NavLinkType>`
  margin-left: 12.5px;
  margin-right: 12.5px;
  font-size: 13px;
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
  text-transform: uppercase;
`;

export const ButtonNav = styled.div`
  width: 120px;
  height: 40px;
  display: grid;
  grid-template-columns: auto auto;
  .border {
    height: 40px;
    width: 2.5px;
    margin-left: 5px;
    margin-right: 5px;
    background-color: ${theme.colors.secondary};
    border-radius: 15px;
  }
  .buttonContainer {
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
    font-size: 14px;
    text-decoration: none;
    border: 0px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    font-weight: 450;
    text-transform: capitalize;
    cursor: pointer;
    font-family: ${theme.fonts.body};
  }
`;

export const MobileScreenComponent = styled.div`
  justify-self: flex-end;
  height: 3.5vh;
  @media (max-width: ${theme.breakpoints.SM}px) {
    height: 4.5vh;
  }
  align-self: center;
  @media (min-width: ${theme.breakpoints.XMd}px) {
    display: none;
  }
`;
