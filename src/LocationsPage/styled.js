import styled from "styled-components";
import worldMapDesktop from "./images/world-map-desktop.png";
import worldMapTablet from "./images/world-map-tablet.png";
import worldMapMobile from "./images/world-map-mobile.png";

export const StyledLocationPage = styled.main`
  overflow: hidden;
`;

export const WorldMap = styled.div`
  width: 1110px;
  height: 543px;
  background: url(${worldMapDesktop});
  margin: 120px auto;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: calc(100% - 20px);
    height: calc(50vh - 10px);
    background: url(${worldMapTablet});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center top;
    margin: 144px auto 64px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: calc(100% - 20px);
    height: calc(50vh - 10px);
    background: url(${worldMapMobile});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center top;
    margin: 72px auto 40px;
  }
`;
