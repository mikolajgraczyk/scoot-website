import { StyledCareersTilesSection } from "./styled";
import CareerTile from "./CareerTile";

const CareersTilesSection = () => {
  return (
    <StyledCareersTilesSection>
      <CareerTile title={"General Manager"} subtitle={"Jakarta, Indonesia"} />
      <CareerTile title={"UI/UX Designer"} subtitle={"Yokohama, Japan"} />
      <CareerTile
        title={"Blog Content Copywriter"}
        subtitle={"New York, United States"}
      />
      <CareerTile
        title={"Graphic Designer"}
        subtitle={"New York, United States"}
      />
      <CareerTile title={"Fleet Supervisor"} subtitle={"Jakarta, Indonesia"} />
      <CareerTile title={"UX Analyst"} subtitle={"London, United Kingdom"} />
    </StyledCareersTilesSection>
  );
};

export default CareersTilesSection;
