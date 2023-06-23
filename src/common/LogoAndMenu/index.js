import Menu from "./Menu";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsMenuOpen, switchMenuState } from "../../menuSlice";
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

  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [isMenuOpen]);

  return (
    <LogoAndMenuWrapper location={location}>
      <MenuButton
        onClick={() => dispatch(switchMenuState())}
        location={location}
      >
        {isMenuOpen ? <StyledCloseIcon /> : <StyledHamburger />}
      </MenuButton>
      <StyledNavLink to="/home">
        <StyledLogo location={location} />
      </StyledNavLink>
      <Menu location={location} />
    </LogoAndMenuWrapper>
  );
};

export default LogoAndMenu;
