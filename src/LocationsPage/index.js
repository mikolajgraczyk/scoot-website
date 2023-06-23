import { StyledLocationPage } from "./styled";
import TopBanner from "../common/TopBanner";

const LocationsPage = () => {
    return(
        <StyledLocationPage>
            <TopBanner title={"Locations"} location={"locations"}/>
        </StyledLocationPage>
    );
};

export default LocationsPage;