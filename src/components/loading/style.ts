import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 120px;
  height: 120px;
  div {
    position: absolute;
    top: 33px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    background: ${theme.colors.primary};
    animation: lds-ellipsis1 0.6s infinite;
  }
  div:nth-child(2) {
    left: 30px;
    background: ${theme.colors.primary};
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(3) {
    background: ${theme.colors.primary};
    left: 72px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(4) {
    left: 96px;
    background: ${theme.colors.primary};
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;
