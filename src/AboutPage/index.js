import { StyledAboutPage } from "./styled";
import { Container } from "../common/Container";
import { InfoSection } from "../common/InfoSection";
import TopBanner from "../common/TopBanner";
import Info from "../common/Info";
import mobility from "./images/digital-era.jpg";
import urban from "./images/better-living.jpg";
import ValuesSection from "../common/ValuesSection";
import Faq from "./Faq";

const AboutPage = () => {
  const location = "about";

  return (
    <StyledAboutPage>
      <TopBanner title={"About"} location={location} />
      <Container>
        <InfoSection location={location}>
          <Info
            image={mobility}
            title={"Mobility for the digital era"}
            description={
              "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
            }
            location={location}
          />
          <Info
            image={urban}
            title={"Better urban living"}
            description={
              "We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
            }
            location={location}
            leftdirection={"true"}
          />
        </InfoSection>
        <ValuesSection title={"Why join us?"} />
        <Faq />
      </Container>
    </StyledAboutPage>
  );
};

export default AboutPage;
