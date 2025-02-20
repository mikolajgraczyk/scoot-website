import { StyledHomepage } from "./styled";
import { Container } from "../common/Container";
import { InfoSection } from "../common/InfoSection";
import Poster from "./Poster";
import Instruction from "./Instruction";
import Info from "../common/Info";
import telemetry from "./images/telemetry.jpg";
import nearYou from "./images/nearYou.jpg";
import payments from "./images/payments.jpg";

const HomePage = () => {
  return (
    <StyledHomepage>
      <Poster />
      <Container>
        <Instruction />
        <InfoSection location={"homepage"}>
          <Info
            image={telemetry}
            title={"Easy to use riding telemetry"}
            description={
              "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
            }
          />
          <Info
            image={nearYou}
            title={"Coming to a city near you"}
            description={
              "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
            }
            leftdirection={"true"}
            buttonText={"Learn More"}
          />
          <Info
            image={payments}
            title={"Zero hassle payments"}
            description={
              "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
            }
            buttonText={"Learn More"}
          />
        </InfoSection>
      </Container>
    </StyledHomepage>
  );
};

export default HomePage;
