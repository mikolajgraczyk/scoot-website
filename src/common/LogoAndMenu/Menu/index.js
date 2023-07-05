import { StyledMenu, StyledNavLink, MenuButton } from "./styled";
import { closeMenu } from "../../../menuSlice";
import { useDispatch } from "react-redux";

const Menu = ({ location }) => {
  const dispatch = useDispatch();

  const onNavButtonClick = () => {
    dispatch(closeMenu());

    window.scrollTo({
      top: 0,
    });
  };

  return (
    <StyledMenu location={location}>
      <MenuButton onClick={onNavButtonClick} location={location}>
        <StyledNavLink to="/about" location={location}>
          About
        </StyledNavLink>
      </MenuButton>
      <MenuButton onClick={onNavButtonClick} location={location}>
        <StyledNavLink to="/locations" location={location}>
          Location
        </StyledNavLink>
      </MenuButton>
      <MenuButton onClick={onNavButtonClick} location={location}>
        <StyledNavLink to="/careers" location={location}>
          Careers
        </StyledNavLink>
      </MenuButton>
    </StyledMenu>
  );
};

export default Menu;
