import LogoAndMenu from "../LogoAndMenu";
import { StyledHeader, Wrapper, Button } from "./styled";

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <LogoAndMenu />
        <Button>Get Scootin</Button>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
