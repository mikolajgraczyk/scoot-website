import {
  LogoAndMenuWrapper,
  StyledHamburger,
  StyledLogo,
  Menu,
  MenuItem,
} from "./styled";

export const LogoAndMenu = () => {
  return (
    <LogoAndMenuWrapper>
      <StyledLogo />
      <Menu>
        <MenuItem>About</MenuItem>
        <MenuItem>Location</MenuItem>
        <MenuItem>Careers</MenuItem>
      </Menu>
    </LogoAndMenuWrapper>
  );
};

export default LogoAndMenu;
