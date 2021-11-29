import Image from "next/image";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const LogoImage = styled(Image)`
  height: 40px;
  width: 185px;
  cursor: pointer;
  vertical-align: middle;
  object-fit: fill;
`;
