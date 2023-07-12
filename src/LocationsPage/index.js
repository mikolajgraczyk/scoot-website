import { useState, useEffect } from "react";
import {
  StyledLocationPage,
  WorldMap,
  MapImage,
  CitiesList,
  CityTile,
} from "./styled";
import TopBanner from "../common/TopBanner";
import { Container } from "../common/Container";
import AdditionalInfo from "./AdditionalInfo";
import worldMapDesktop from "./images/world-map-desktop.png";
import worldMapTablet from "./images/world-map-tablet.png";
import worldMapMobile from "./images/world-map-mobile.png";

const LocationsPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  let screenType;

  switch (true) {
    case screenWidth > 1200:
      screenType = worldMapDesktop;
      break;
    case screenWidth > 590:
      screenType = worldMapTablet;
      break;
    default:
      screenType = worldMapMobile;
      break;
  }

  return (
    <StyledLocationPage>
      <TopBanner title={"Locations"} location={"locations"} />
      <Container>
        <WorldMap>
          <MapImage src={screenType} alt="" />
        </WorldMap>
        <CitiesList>
          <CityTile>New York</CityTile>
          <CityTile>London</CityTile>
          <CityTile>Jakarta</CityTile>
          <CityTile>Yokohama</CityTile>
        </CitiesList>
        <AdditionalInfo />
      </Container>
    </StyledLocationPage>
  );
};

export default LocationsPage;
