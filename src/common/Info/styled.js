import styled, { css } from "styled-components";

import { ReactComponent as LeftInfoArrow } from "./images/LeftInfoArrow.svg";
import { ReactComponent as RightInfoArrow } from "./images/RightInfoArrow.svg";
import { ReactComponent as Circle } from "./images/Circle.svg";

export const StyledInfo = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  justify-content: space-between;
  margin-right: -360px;
  width: 116.5%;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    flex-direction: column-reverse;
    margin: 0;
    align-items: flex-end;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    gap: 56px;
    width: 100%;
  }

  ${({ leftDirection }) =>
    leftDirection &&
    css`
      flex-direction: row-reverse;
      justify-content: left;
      margin-right: 0;
      margin-left: -344px;
      align-self: flex-start;
      justify-content: space-between;

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        align-self: center;
      }
    `}
`;

export const Circles = styled.div`
  display: flex;
  gap: 64px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    align-self: center;
    margin-right: -540px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 0;
  }

  ${({ leftDirection }) =>
    leftDirection &&
    css`
      flex-direction: row-reverse;

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        margin-left: -1030px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin: 0;
      }
    `}
`;

export const ImageCircle = styled.img`
  border-radius: 50%;
  height: 445px;
  width: 445px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 311px;
    width: 311px;
  }
`;

export const StyledCircle = styled(Circle)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: none;
  }
`;

export const StyledLeftInfoArrow = styled(LeftInfoArrow)`
  position: absolute;
  top: 307px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    top: 173px;
    left: 0px;
  }

  ${({ leftDirection }) =>
    leftDirection &&
    css`
      display: none;
    `}
`;

export const StyledRightInfoArrow = styled(RightInfoArrow)`
  position: absolute;
  display: none;
  left: 312px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    left: -220px;
  }

  ${({ leftDirection }) =>
    leftDirection &&
    css`
      display: block;
    `}
`;
