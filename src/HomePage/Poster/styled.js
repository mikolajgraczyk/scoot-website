import styled from "styled-components";

import posterImageDesktop from "./images/posterImageDesktop.jpg";
import posterImageTablet from "./images/posterImageTablet.jpg";
import posterImageMobile from "./images/posterImageMobile.jpg";

import { ReactComponent as Line } from "./images/Line.svg";
import { ReactComponent as WhiteCircles } from "./images/WhiteCircles.svg";
import { ReactComponent as RightArrow } from "./images/RightArrow.svg";

const bpTablet = ({ theme }) => theme.breakpoint.tablet;
const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledPoster = styled.div`
  background-image: url(${posterImageDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 650px;
  overflow: hidden;

  @media (max-width: ${bpTablet}px) {
    background-image: url(${posterImageTablet});
  }

  @media (max-width: ${bpMobile}px) {
    background-image: url(${posterImageMobile});
    padding: 0 32px 0 32px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 30px;
  margin-top: 40px;
  grid-template-columns: repeat(4, auto);
  justify-content: space-between;

  @media (max-width: ${bpTablet}px) {
    margin-top: 24px;
    gap: 0;
    grid-template-columns: auto auto;
    grid-template-areas:
      "description description"
      "arrow circles";
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.color.white};
  max-width: 500px;
  margin-top: 153px;
  margin-left: 11.5%;
  font-family: "Space Mono";
  font-weight: 700;
  font-size: 56px;
  line-height: 56px;
  letter-spacing: -2.5px;

  @media (max-width: ${bpTablet}px) {
    margin: 137px auto 0;
    text-align: center;
  }

  @media (max-width: ${bpMobile}px) {
    margin: 115px auto 0;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: -1.78571px;
  }
`;

export const DescriptionWrapper = styled.div`
  max-width: 405px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: ${bpTablet}px) {
    max-width: 573px;
    grid-area: description;
    justify-self: center;
    text-align: center;
    gap: 32px;
  }

  @media (max-width: ${bpMobile}px) {
    gap: 34px;
  }
`;

export const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.white};
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
`;

export const Button = styled.button`
  padding: 14px 39px;
  background: ${({ theme }) => theme.color.yellow};
  border: none;
  font-family: "Space Mono";
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.color.white};
  white-space: nowrap;
  align-self: flex-start;

  @media (max-width: ${bpTablet}px) {
    align-self: center;
  }
`;

export const StyledRightArrow = styled(RightArrow)`
  margin-top: 42px;

  @media (max-width: ${bpTablet}px) {
    grid-area: arrow;
    margin-top: 40px;
    margin-left: -127px;
  }

  @media (max-width: ${bpMobile}px) {
    margin-top: 0;
    margin-left: -312px;
  }
`;

export const StyledLine = styled(Line)`
  margin-top: 42px;

  @media (max-width: ${bpTablet}px) {
    display: none;
  }

  @media (max-width: ${bpMobile}px) {
    display: none;
  }
`;

export const StyledWhiteCircles = styled(WhiteCircles)`
  margin-top: 128px;
  margin-right: -48px;
  justify-self: right;

  @media (max-width: ${bpTablet}px) {
    margin-top: 119px;
    margin-right: -31px;
    grid-area: circles;
  }

  @media (max-width: ${bpMobile}px) {
    display: none;
  }
`;
