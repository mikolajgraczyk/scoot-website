import Menu from "./Menu";
import { useSelector, useDispatch } from "react-redux";
import { selectIsMenuOpen, switchMenuState } from "../menuSlice";
import {
  LogoAndMenuWrapper,
  MenuButton,
  StyledHamburger,
  StyledCloseIcon,
  StyledLogo,
} from "./styled";

export const LogoAndMenu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);

  return (
    <LogoAndMenuWrapper>
      <MenuButton onClick={() => dispatch(switchMenuState())}>
        {isMenuOpen ? <StyledCloseIcon /> : <StyledHamburger />}
      </MenuButton>
      <StyledLogo />
      <Menu />
    </LogoAndMenuWrapper>
  );
};

export default LogoAndMenu;
