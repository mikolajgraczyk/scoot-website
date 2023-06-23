import styled, { css } from "styled-components";

import { ReactComponent as WhiteCircles } from "./images/WhiteCircles.svg";

import aboutBackgroundDesktop from "./images/about-hero-desktop.jpg";
import aboutBackgroundTablet from "./images/about-hero-tablet.jpg";
import aboutBackgroundMobile from "./images/about-hero-mobile.jpg";

export const StyledTopBanner = styled.div`
  height: 200px;
  padding: 72px 165px;
  color: ${({ theme }) => theme.color.white};
  font-size: 56px;
  font-family: Space Mono;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -2.5px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  ${({ location }) =>
    location === "about" &&
    css`
      background-image: url(${aboutBackgroundDesktop});

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        background-image: url(${aboutBackgroundTablet});
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        background-image: url(${aboutBackgroundMobile});
      }
    `}

  @media(max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding: 72px 97px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 60px 32px;
    text-align: center;
  }
`;

export const StyledWhiteCircles = styled(WhiteCircles)`
  position: absolute;
  right: -31px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: none;
  }
`;
