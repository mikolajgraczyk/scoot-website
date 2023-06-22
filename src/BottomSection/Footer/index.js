import {
  StyledFooter,
  Wrapper,
  SocialMediaButtons,
  SocialMediaButton,
  StyledFacebookIcon,
  StyledTwitterIcon,
  StyledInstagramIcon,
} from "./styled";
import LogoAndMenu from "../../LogoAndMenu";
import { ReactComponent as FacebookIcon } from "./images/Facebook.svg";
import { ReactComponent as TwitterIcon } from "./images/Twitter.svg";
import { ReactComponent as InstagramIcon } from "./images/Instagram.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <LogoAndMenu />
        <SocialMediaButtons>
          <SocialMediaButton>
            <FacebookIcon />
          </SocialMediaButton>
          <SocialMediaButton>
            <TwitterIcon />
          </SocialMediaButton>
          <SocialMediaButton>
            <InstagramIcon />
          </SocialMediaButton>
        </SocialMediaButtons>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
