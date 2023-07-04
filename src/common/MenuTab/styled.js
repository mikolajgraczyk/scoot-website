import styled, { css } from "styled-components";

export const Tab = styled.div`
  display: none;
  z-index: 3;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    transform: translateX(-100%);
    display: flex;
    justify-content: center;
    padding: 64px 0 24px 0;
    position: absolute;
    background: ${({ theme }) => theme.color.brightGrey};
    width: 68%;
    height: 100vh;
    top: 64px;
    left: 0;
    transition: cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s;

    ${({ menuState }) =>
      menuState &&
      css`
        transform: translateX(0px);
      `}
  }
`;

export const Background = styled.div`
  display: none;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: block;
    background: none;
    transition: 0.3s;

    ${({ menuState }) =>
      menuState &&
      css`
        position: absolute;
        top: 64px;
        right: 0;
        width: 100%;
        background: black;
        opacity: 0.75;
        height: 100vh;
      `}
  }
`;
