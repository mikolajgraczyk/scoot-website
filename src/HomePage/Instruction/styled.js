import styled, { css } from "styled-components";

import { ReactComponent as LocateIcon } from "./images/LocateIcon.svg";
import { ReactComponent as RideIcon } from "./images/RideIcon.svg";
import { ReactComponent as ScooterIcon } from "./images/ScooterIcon.svg";

export const StyledInstruction = styled.div`
  margin-top: 160px;
  transition: cubic-bezier(0.17, 0.55, 0.55, 1) 1s;
  transform: translateX(-80%);

  ${({ isInstructionInView }) =>
    isInstructionInView &&
    css`
      transform: translateX(0px);
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin-top: 0;
    transform: translateY(-150%);

    ${({ isLineInView }) =>
      isLineInView &&
      css`
        transform: translateY(0px);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 0;
  }
`;

export const Line = styled.div`
  height: 15px;
  width: 70%;
  background: ${({ theme }) => theme.color.lightGrey};
  position: absolute;
  left: 0;
  top: 948px;
  transition: cubic-bezier(0.17, 0.55, 0.55, 1) 1s;
  transform: translateX(-80%);

  ${({ isLineInView }) =>
    isLineInView &&
    css`
      transform: translateX(0px);
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    background: none;
    top: 1050px;
  }

  @media (min-width: 1500px) {
    width: 64%;
  }

  @media (min-width: 2160px) {
    width: 60%;
  }

  @media (min-width: 3000px) {
    width: 57%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    margin-top: 122px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 120px;
  }
`;

export const StyledLocateIcon = styled(LocateIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 56px;
    height: 56px;
  }
`;

export const StyledRideIcon = styled(RideIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 56px;
    height: 56px;
  }
`;

export const StyledScooterIcon = styled(ScooterIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 56px;
    height: 56px;
  }
`;
