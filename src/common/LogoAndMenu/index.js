import Menu from "./Menu";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsMenuOpen, switchMenuState } from "../../menuSlice";
import { NavLink } from "react-router-dom";
import {
  LogoAndMenuWrapper,
  MenuButton,
  StyledHamburger,
  StyledCloseIcon,
  StyledNavLink,
  StyledLogo,
} from "./styled";

export const LogoAndMenu = ({ location }) => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);

  let body = document.querySelector("body");

  useEffect(() => {
    isMenuOpen
      ? (body.style.overflowY = "hidden")
      : (body.style.overflowY = "scroll");
  }, [isMenuOpen]);

  return (
    <LogoAndMenuWrapper location={location}>
      <MenuButton
        onClick={() => dispatch(switchMenuState())}
        location={location}
      >
        {isMenuOpen ? <StyledCloseIcon /> : <StyledHamburger />}
      </MenuButton>
      <NavLink to="/home">
        <StyledLogo location={location} />
      </NavLink>
      <Menu location={location} />
    </LogoAndMenuWrapper>
  );
};

export default LogoAndMenu;
