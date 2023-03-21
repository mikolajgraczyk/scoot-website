import {
  LogoAndMenuWrapper,
  MenuButton,
  StyledHamburger,
  StyledLogo,
  Menu,
  MenuItem,
} from "./styled";

export const LogoAndMenu = () => {
  return (
    <LogoAndMenuWrapper>
      <MenuButton>
        <StyledHamburger />
      </MenuButton>
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
