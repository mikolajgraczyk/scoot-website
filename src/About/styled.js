import styled from "styled-components";
import { ReactComponent as Circle } from "./images/Circle.svg";

export const StyledAbout = styled.div`
  display: flex;
  float: right;
`;

export const Circles = styled.div`
  display: flex;
`;

export const ImageCircle = styled.img`
  border-radius: 50%;
  height: 445px;
  width: 445px;
`;

export const StyledCircle = styled(Circle)``;
