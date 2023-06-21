import {
  StyledFooter,
  FooterBanner,
  FooterBannerText,
  MobileStoreButtons,
  StoreButton,
  StyledAppStore,
  StyledGooglePlay,
  StyledSemiCircles,
  Container,
} from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterBanner>
        <Container>
          <FooterBannerText>Sign up and Scoot off today</FooterBannerText>
          <MobileStoreButtons>
            <StoreButton>
              <StyledAppStore />
            </StoreButton>
            <StoreButton>
              <StyledGooglePlay />
            </StoreButton>
          </MobileStoreButtons>
          <StyledSemiCircles />
        </Container>
      </FooterBanner>
    </StyledFooter>
  );
};

export default Footer;
