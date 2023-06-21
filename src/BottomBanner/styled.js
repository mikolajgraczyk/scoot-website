import styled, { css } from "styled-components";
import { ReactComponent as SemiCircles } from "./images/SemiCircles.svg";
import { ReactComponent as AppStore } from "./images/AppStore.svg";
import { ReactComponent as GooglePlay } from "./images/GooglePlay.svg";

export const StyledBottomBanner = styled.div``;

export const FooterBanner = styled.div`
  background-color: ${({ theme }) => theme.color.darkNavy};
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 102px 165px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: grid;
    justify-content: center;
    padding: 62px 156px;
    gap: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 88px 32px;
  }
`;

export const FooterBannerText = styled.span`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -2.14286px;
  color: ${({ theme }) => theme.color.white};
  max-width: 415px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    text-align: center;
    max-width: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -1.42857px;
    justify-self: center;
  }
`;

export const MobileStoreButtons = styled.div`
  display: flex;
  gap: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    justify-content: center;
    gap: 12.8px;
  }
`;

export const StoreButton = styled.button`
  padding: 0;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  border: none;
`;

export const StyledAppStore = styled(AppStore)`
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 113.57px;
    height: 40px;
  }
`;

export const StyledGooglePlay = styled(GooglePlay)`
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 130px;
    height: 40px;
  }
`;

export const StyledSemiCircles = styled(SemiCircles)`
  position: absolute;
  bottom: 0;
  right: -163px;
`;
