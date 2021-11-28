import styled from "styled-components";
import { theme } from "../../styles/theme";
import Image from "next/image";
import Link from "next/link";

type DrawerViewType = {
  view: boolean;
};

type FullComponentType = {
  center: boolean;
};

export const MainContainer = styled.div<DrawerViewType>`
  width: 100vw;
  overflow: hidden;
  margin-left: ${(props) => (!props.view ? "100vw" : "0vw")};
  height: 100vh;
  position: fixed;
  z-index: 1000;
  display: grid;
  grid-column-start: 1;
  grid-column-end: 10;
  /* justify-items: flex-end; */
  transition: all 0.4s ease;
  @media (min-width: ${theme.breakpoints.LG}px) {
    display: none;
  }
`;

export const DrawerContainerLeft = styled.div`
  font-weight: normal;
  grid-column-start: 1;
  grid-column-end: 8;
  width: Calc(100vw - ${theme.breakpoints.XXS}px);
  height: 100vh;
  color: transparent;
  /* make this background darker to make feel like it is press able*/
  background-color: transparent;
  position: relative;
`;

export const DrawerContainer = styled.div`
  font-weight: normal;
  grid-column-start: 8;
  grid-column-end: 10;
  width: ${theme.breakpoints.XXS}px;
  display: grid;
  height: 100vh;
  transition: all 0.4s ease;
  display: grid;
  color: ${theme.colors.primary};
  background-color: ${theme.colors.background_secondary};
  position: relative;
`;

export const TopDrawerContainer = styled.div`
  width: 100%;
  grid-row: 1/2;
  display: flex;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${theme.breakpoints.SM}px) {
    justify-content: end;
    img:first-of-type {
      display: none;
    }
  }
  img:last-of-type {
    width: 22.5px;
    height: 22.5px;
  }
`;

export const MidDrawerContainer = styled.div`
  width: 100%;
  grid-row: 2/100;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const BottomDrawerContainer = styled.div`
  width: 100%;
  grid-row: 100/106;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  justify-content: space-between;
`;
