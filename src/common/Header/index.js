import LogoAndMenu from "../LogoAndMenu";
import MenuTab from "../MenuTab";
import { StyledHeader, Wrapper, Button } from "./styled";

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <LogoAndMenu />
        <Button>Get Scootin</Button>
      </Wrapper>
      <MenuTab />
    </StyledHeader>
  );
};

export default Header;
