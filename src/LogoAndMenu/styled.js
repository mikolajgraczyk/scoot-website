import styled from "styled-components";
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
  flex-basis: 415px;

  @media (max-width: ${bpTablet}px) {
    gap: 10px;
  }
`;

export const MenuButton = styled.button`
  display: none;
  position: absolute;

  @media (max-width: ${bpMobile}px) {
    width: 19.69px;
    height: 16px;
    border: none;
    display: flex;
    justify-content: center;
    background: none;
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

export const StyledLogo = styled(Logo)`
  @media (max-width: ${bpMobile}px) {
    width: 75.5px;
    height: 20px;
    margin: 0 auto;
  }
`;
