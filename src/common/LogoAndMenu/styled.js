import styled, { css } from "styled-components";
import { ReactComponent as Hamburger } from "./images/Hamburger.svg";
import { ReactComponent as CloseIcon } from "./images/CloseIcon.svg";
import { ReactComponent as Logo } from "./images/Logo.svg";

const bpTablet = ({ theme }) => theme.breakpoint.tablet;
const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const LogoAndMenuWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  flex-basis: 410px;

  @media (max-width: ${bpTablet}px) {
    gap: 10px;
  }

  @media (max-width: ${bpMobile}px) {
    ${({ location }) =>
      location === "footer" &&
      css`
        display: grid;
        gap: 41px;
      `}
  }
`;

export const MenuSwitch = styled.button`
  display: none;
  position: absolute;

  @media (max-width: ${bpMobile}px) {
    width: 90.69px;
    height: 100%;
    border: none;
    padding: 0;
    left: 0; 
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;

    ${({ location }) =>
      location === "footer" &&
      css`
        display: none;
      `}
  }

  &:hover {
    cursor: pointer;
  }
`;

export const StyledHamburger = styled(Hamburger)`
  position: absolute;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
`;

export const LogoButton = styled.button`
  background: none;
  border: none;
  padding: 0;

  @media (max-width: ${bpMobile}px) {
    margin: 0 auto;
  }
`;

export const StyledLogo = styled(Logo)`
  color: ${({ theme }) => theme.color.darkNavy};

  ${({ location }) =>
    location === "footer" &&
    css`
      color: ${({ theme }) => theme.color.white};
    `}

  @media (max-width: ${bpMobile}px) {
    width: 75.5px;
    height: 20px;

    ${({ location }) =>
      location === "footer" &&
      css`
        width: 107px;
        height: 28.5px;
      `}
  }
`;
