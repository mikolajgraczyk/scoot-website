import styled, { css } from "styled-components";

export const Tab = styled.div`
  display: none;
  z-index: 3;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    transform: translateX(-100%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 64px 32px 24px 32px;
    position: absolute;
    background: ${({ theme }) => theme.color.brightGrey};
    width: 68%;
    height: calc(100vh - 64px);
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

export const Button = styled.button`
  background: ${({ theme }) => theme.color.yellow};
  color: ${({ theme }) => theme.color.white};
  padding: 14px 0;
  border: none;
  font-family: "Space Mono";
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
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
