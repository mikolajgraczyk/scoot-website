import {
  StyledBottomBanner,
  FooterBanner,
  FooterBannerText,
  MobileStoreButtons,
  StoreButton,
  StyledAppStore,
  StyledGooglePlay,
  StyledSemiCircles,
  Wrapper,
} from "./styled";

const BottomBanner = () => {
  return (
    <StyledBottomBanner>
      <FooterBanner>
        <Wrapper>
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
        </Wrapper>
      </FooterBanner>
    </StyledBottomBanner>
  );
};

export default BottomBanner;
