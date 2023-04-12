import { StyledHomepage, AboutSection } from "./styled";
import Poster from "./Poster";
import Instruction from "./Instruction";
import About from "../About";

import telemetry from "./images/telemetry.jpg";
import nearYou from "./images/nearYou.jpg";
import payments from "./images/payments.jpg";

const HomePage = () => {
  return (
    <StyledHomepage>
      <Poster />
      <Instruction />
      <AboutSection>
        <About
          image={telemetry}
          title={"Easy to use riding telemetry"}
          description={
            "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
          }
        />
      </AboutSection>
    </StyledHomepage>
  );
};

export default HomePage;
