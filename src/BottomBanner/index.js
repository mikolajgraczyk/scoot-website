import {
  StyledBottomBanner,
  FooterBanner,
  FooterBannerText,
  MobileStoreButtons,
  StoreButton,
  StyledAppStore,
  StyledGooglePlay,
  StyledSemiCircles,
  Container,
} from "./styled";

const BottomBanner = () => {
  return (
    <StyledBottomBanner>
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
    </StyledBottomBanner>
  );
};

export default BottomBanner;
