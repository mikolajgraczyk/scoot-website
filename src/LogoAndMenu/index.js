import Menu from "./Menu";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsMenuOpen, switchMenuState } from "../menuSlice";
import {
  LogoAndMenuWrapper,
  MenuButton,
  StyledHamburger,
  StyledCloseIcon,
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
      <StyledLogo location={location} />
      <Menu location={location} />
    </LogoAndMenuWrapper>
  );
};

export default LogoAndMenu;
