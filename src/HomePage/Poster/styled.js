import styled from "styled-components";
import posterImageDesktop from "./images/posterImageDesktop.jpg";
import posterImageTablet from "./images/posterImageTablet.jpg";
import posterImageMobile from "./images/posterImageMobile.jpg";

const bpTablet = ({ theme }) => theme.breakpoint.tablet;
const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledPoster = styled.div`
  background-image: url(${posterImageDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 650px;

  @media (max-width: ${bpTablet}px) {
    background-image: url(${posterImageTablet});
  }

  @media (max-width: ${bpMobile}px) {
    background-image: url(${posterImageMobile});
  }
`;
