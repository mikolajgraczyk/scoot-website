import styled, { css } from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  gap: 32px;
  color: white;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: none;
  }

  ${({ location }) =>
    location === "tab" &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        display: flex;
        flex-direction: column;
        width: 192px;
      }
    `}
`;

export const MenuItem = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.color.dimGrey};

  &:hover {
    color: ${({ theme }) => theme.color.yellow};
    cursor: pointer;
  }

  ${({ location }) =>
    location === "tab" &&
    css`
      text-align: left;
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      color: ${({ theme }) => theme.color.lightGrey};
    `}
`;
