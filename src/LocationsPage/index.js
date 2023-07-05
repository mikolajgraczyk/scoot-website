import { StyledLocationPage, WorldMap } from "./styled";
import TopBanner from "../common/TopBanner";
import { Container } from "../common/Container";
import LocationBubble from "./LocationBubble";
import AdditionalInfo from "./AdditionalInfo";

const LocationsPage = () => {
  return (
    <StyledLocationPage>
      <TopBanner title={"Locations"} location={"locations"} />
      <Container>
        <WorldMap>
          {/* <LocationBubble cityName={"London"} />
          <LocationBubble cityName={"New York"} />
          <LocationBubble cityName={"Yokohama"} />
          <LocationBubble cityName={"Jakarta"} /> */}
        </WorldMap>
        <AdditionalInfo />
      </Container>
    </StyledLocationPage>
  );
};

export default LocationsPage;
