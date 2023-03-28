import { StyledMenu, MenuItem } from "./styled";

const Menu = ({ location }) => {
  return (
    <StyledMenu location={location}>
      <MenuItem location={location}>About</MenuItem>
      <MenuItem location={location}>Location</MenuItem>
      <MenuItem location={location}>Careers</MenuItem>
    </StyledMenu>
  );
};

export default Menu;
