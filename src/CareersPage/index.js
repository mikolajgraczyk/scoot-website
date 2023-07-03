import { StyledCareersPage } from "./styled";
import TopBanner from "../common/TopBanner";
import Info from "../common/Info";
import { InfoSection } from "../common/InfoSection";
import { Container } from "../common/Container";
import joinus from "./images/join-us.jpg";
import ValuesSection from "../common/ValuesSection";
import CareersTilesSection from "./CareersTilesSection";

const CareersPage = () => {
  const location = "subpage";

  return (
    <StyledCareersPage>
      <TopBanner title="Careers" location={"careers"} />
      <Container>
        <InfoSection location={location}>
          <Info
            image={joinus}
            title={"Care to join our mission?"}
            description={
              "We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
            }
            location={"subpage"}
          />
        </InfoSection>
        <ValuesSection title={"Our values"}/>
        <CareersTilesSection />
      </Container>
    </StyledCareersPage>
  );
};

export default CareersPage;
