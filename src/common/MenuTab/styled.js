import styled, { css } from "styled-components";

export const StyledMenuTab = styled.div`
  display: none;

  ${({ menuState }) =>
    menuState &&
    css`
      display: block;
    `}
`;

export const Tab = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: flex;
    justify-content: center;
    padding: 64px 0 24px 0;
    position: absolute;
    background: ${({ theme }) => theme.color.brightGrey};
    width: 68%;
    height: 100vh;
    top: 64px;
    left: 0;
    z-index: 1;
  }
`;

export const Background = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: block;
    position: absolute;
    top: 64px;
    right: 0;
    width: 32%;
    background-color: black;
    opacity: 0.75;
    height: 100vh;
  }
`;
