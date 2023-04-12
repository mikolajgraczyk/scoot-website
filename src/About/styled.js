import styled, { css } from "styled-components";
import { ReactComponent as Circle } from "./images/Circle.svg";

export const StyledAbout = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  justify-content: space-between;
  margin-right: -344px;
  width: 113.8%;
  max-width: 1855px;

  ${({ leftDirection }) =>
    leftDirection &&
    css`
      flex-direction: row-reverse;
      justify-content: left;
      margin-right: 0;
      margin-left: -344px;
      align-self: flex-start;
      justify-content: space-between;
    `}
`;

export const Circles = styled.div`
  display: flex;
  gap: 64px;

  ${({ leftDirection }) =>
    leftDirection &&
    css`
      flex-direction: row-reverse;
    `}
`;

export const ImageCircle = styled.img`
  border-radius: 50%;
  height: 445px;
  width: 445px;
`;

export const StyledCircle = styled(Circle)``;
