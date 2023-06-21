import styled from "styled-components";
import { ReactComponent as SemiCircles } from "./images/SemiCircles.svg";

export const StyledFooter = styled.footer``;

export const FooterBanner = styled.div`
  background-color: ${({ theme }) => theme.color.darkNavy};
  height: 300px;
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
`;

export const FooterBannerText = styled.span`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -2.14286px;
  color: ${({ theme }) => theme.color.white};
  width: 415px;
`;

export const MobileStoreButtons = styled.div`
  display: flex;
  gap: 18px;
`;

export const StyledSemiCircles = styled(SemiCircles)`
  position: absolute;
  bottom: 0;
  right: -163px;
`;
