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
  gap: 24px;

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
  gap: 64px;
  display: flex;
  position: relative;
  transform: translateX(500px);
  transition: cubic-bezier(0.17, 0.55, 0.55, 1) 1s;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    align-self: center;
    margin-right: -540px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 0;
  }

  ${({ isInView }) =>
    isInView &&
    css`
      transform: translateX(0px);
    `}

  ${({ leftDirection }) =>
    leftDirection &&
    css`
      flex-direction: row-reverse;
      transform: translateX(-500px);

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        margin-left: -1030px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin: 0;
      }

      ${({ isInView }) =>
        isInView &&
        css`
          transform: translateX(0px);
        `}
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
