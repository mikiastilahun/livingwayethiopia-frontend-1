import Image from "next/image";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const SvgContainer = styled.div`
  .left {
    color: ${theme.colors.secondary};
    cursor: pointer;
    svg {
      fill: ${theme.colors.secondary};
    }
    :hover {
      color: ${theme.colors.primary};
      svg {
        fill: ${theme.colors.primary};
      }
    }
  }
  .right {
    svg {
      fill: ${theme.colors.secondary};
      :hover {
        fill: ${theme.colors.primary};
        cursor: pointer;
      }
      :active {
        border: 1px solid ${theme.colors.primary};
        border-radius: 10px;
        fill: ${theme.colors.primary};
        padding: 2.5px;
      }
    }
  }
`;
