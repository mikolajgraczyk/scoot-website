import Menu from "./Menu";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsMenuOpen, switchMenuState, closeMenu } from "../../menuSlice";
import { NavLink } from "react-router-dom";
import {
  LogoAndMenuWrapper,
  MenuSwitch,
  StyledHamburger,
  StyledCloseIcon,
  LogoButton,
  StyledLogo,
} from "./styled";

export const LogoAndMenu = ({ location }) => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);

  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isMenuOpen]);
  
  const onLogoClick = () => {
    dispatch(closeMenu());

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <LogoAndMenuWrapper location={location}>
      <MenuSwitch
        onClick={() => dispatch(switchMenuState())}
        location={location}
      >
        {isMenuOpen ? <StyledCloseIcon /> : <StyledHamburger />}
      </MenuSwitch>
      <LogoButton onClick={onLogoClick}>
        <NavLink to="/home">
          <StyledLogo location={location} />
        </NavLink>
      </LogoButton>
      <Menu location={location}/>
    </LogoAndMenuWrapper>
  );
};

export default LogoAndMenu;
