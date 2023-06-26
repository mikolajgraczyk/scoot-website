import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledMenu = styled.nav`
  display: flex;
  gap: 32px;
  color: white;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: none;

    ${({ location }) =>
      location === "footer" &&
      css`
        display: grid;
        gap: 16px;
        text-align: center;
      `}
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

export const StyledNavLink = styled(NavLink)`
  background: none;
  border: none;
  font-family: "Space Mono";
  padding: 0;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.color.dimGrey};

  &.active {
    color: ${({ theme }) => theme.color.yellow};
  }

  &:link {
    text-decoration: none;
  }

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

export const MenuButton = styled.button`
  background: none;
  padding: 0;
  border: none;
  text-align: left;
`;
