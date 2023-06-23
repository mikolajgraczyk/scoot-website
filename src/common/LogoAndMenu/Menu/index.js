import { StyledMenu, StyledNavLink } from "./styled";

const Menu = ({ location }) => {
  return (
    <StyledMenu location={location}>
      <StyledNavLink to="/about" location={location}>About</StyledNavLink>
      <StyledNavLink to="/locations" location={location}>Location</StyledNavLink>
      <StyledNavLink to="/careers" location={location}>Careers</StyledNavLink>
    </StyledMenu>
  );
};

export default Menu;
