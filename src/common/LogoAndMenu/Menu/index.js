import { StyledMenu, StyledNavLink, MenuButton } from "./styled";
import { closeMenu } from "../../../menuSlice";
import { useDispatch } from "react-redux";

const Menu = ({ location }) => {
  const dispatch = useDispatch();

  const switchMenu = () => {
    dispatch(closeMenu());
  };

  return (
    <StyledMenu location={location}>
      <MenuButton onClick={switchMenu}>
        <StyledNavLink to="/about" location={location}>
          About
        </StyledNavLink>
      </MenuButton>
      <MenuButton onClick={switchMenu}>
        <StyledNavLink to="/locations" location={location}>
          Location
        </StyledNavLink>
      </MenuButton>
      <MenuButton onClick={switchMenu}>
        <StyledNavLink to="/careers" location={location}>
          Careers
        </StyledNavLink>
      </MenuButton>
    </StyledMenu>
  );
};

export default Menu;
