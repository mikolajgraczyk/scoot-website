import styled from "styled-components";
import { ReactComponent as Hamburger } from "./images/Hamburger.svg";
import { ReactComponent as Logo } from "./images/Logo.svg";

const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const LogoAndMenuWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  flex-basis: 415px;

  @media (max-width: ${bpMobile}px) {
    flex-basis: auto;
    justify-content: center;
  }
`;

export const StyledHamburger = styled(Hamburger)``;

export const StyledLogo = styled(Logo)`
  /* @media (max-width: ${bpMobile}px) {
    width: 75.5px;
    height: 20px;
  } */
`;

export const Menu = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: ${bpMobile}px) {
    display: none;
  }
`;

export const MenuItem = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.color.dimGrey};
`;
