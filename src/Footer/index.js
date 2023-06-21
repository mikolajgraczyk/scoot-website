import {
  StyledFooter,
  FooterBanner,
  FooterBannerText,
  MobileStoreButtons,
  StyledSemiCircles,
  Container,
} from "./styled";
import { ReactComponent as AppStore } from "./images/AppStore.svg";
import { ReactComponent as GooglePlay } from "./images/GooglePlay.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterBanner>
        <Container>
          <FooterBannerText>Sign up and Scoot off today</FooterBannerText>
          <MobileStoreButtons>
            <AppStore />
            <GooglePlay />
          </MobileStoreButtons>
          <StyledSemiCircles />
        </Container>
      </FooterBanner>
    </StyledFooter>
  );
};

export default Footer;
