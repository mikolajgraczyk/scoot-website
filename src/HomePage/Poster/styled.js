import styled from "styled-components";

import posterImageDesktop from "./images/posterImageDesktop.jpg";
import posterImageTablet from "./images/posterImageTablet.jpg";
import posterImageMobile from "./images/posterImageMobile.jpg";

import { ReactComponent as Line } from "./images/Line.svg";
import { ReactComponent as WhiteCircles } from "./images/WhiteCircles.svg";

const bpTablet = ({ theme }) => theme.breakpoint.tablet;
const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledPoster = styled.div`
  background-image: url(${posterImageDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 650px;
  overflow: hidden;
  position: relative;

  @media (max-width: ${bpTablet}px) {
    background-image: url(${posterImageTablet});
  }

  @media (max-width: ${bpMobile}px) {
    background-image: url(${posterImageMobile});
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.color.white};
  max-width: 500px;
  margin-top: 153px;
  margin-left: calc(11.5%);
  font-family: "Space Mono";
  font-weight: 700;
  font-size: 56px;
  line-height: 56px;
  letter-spacing: -2.5px;

  @media (max-width: ${bpTablet}px) {
    margin: 137px auto;
    text-align: center;
  }

  @media (max-width: ${bpMobile}px) {
    margin: 115px auto;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: -1.78571px;
  }
`;

export const StyledLine = styled(Line)`
  margin-top: 89px;
  overflow: hidden;

  @media (max-width: ${bpTablet}px) {
    display: none;
  }

  @media (max-width: ${bpMobile}px) {
    display: none;
  }
`;

export const StyledWhiteCircles = styled(WhiteCircles)`
  position: absolute;
  top: 423px;
  right: -48px;

  @media (max-width: ${bpTablet}px) {
    right: -31px;
  }

  @media (max-width: ${bpMobile}px) {
    display: none;
  }
`;
