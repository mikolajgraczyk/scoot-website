import styled, { css } from "styled-components";

export const StyledContent = styled.div`
  max-width: 445px;
  display: flex;
  flex-direction: column;
  transition: cubic-bezier(0.17, 0.55, 0.55, 1) 1s;
  transform: translateX(-500px);

  ${({ isInView }) =>
    isInView &&
    css`
      transform: translateX(0px);
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    align-self: center;
  }

  ${({ leftDirection }) =>
    leftDirection &&
    css`
      transform: translateX(500px);

      ${({ isInView }) =>
        isInView &&
        css`
          transform: translateX(0px);
        `}
    `}
`;

export const Title = styled.span`
  font-family: "Space Mono";
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -2.14286px;
  color: ${({ theme }) => theme.color.darkNavy};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-family: "Space Mono";
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -1.42857px;
  }
`;

export const Description = styled.p`
  margin: 0;
  padding: 0;
  font-family: "Lexend Deca";
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.color.dimGrey};
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    text-align: center;
    margin-top: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 32px;
  }
`;

export const Button = styled.button`
  padding: 14px 44px;
  background: ${({ theme }) => theme.color.yellow};
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.color.white};
  border: none;
  margin-top: 40px;
  align-self: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    align-self: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 32px;
  }

  &:hover {
    padding: 11px 41px;
    color: ${({ theme }) => theme.color.yellow};
    background: none;
    cursor: pointer;
    border: 3px solid ${({ theme }) => theme.color.yellow};
  }
`;
