import {
  StyledInstruction,
  Line,
  Wrapper,
  StyledLocateIcon,
  StyledRideIcon,
  StyledScooterIcon,
} from "./styled";
import InstructionElement from "./InstructionElement";
const Instruction = () => {
  return (
    <>
      <Line initial={{ x: `-100vw` }} animate={{ x: 0 }} />
      <StyledInstruction initial={{ x: `-100vw` }} animate={{ x: 0 }}>
        <Wrapper>
          <InstructionElement
            icon={<StyledLocateIcon />}
            title={"Locate with app"}
            description={
              "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away."
            }
          />
          <InstructionElement
            icon={<StyledRideIcon />}
            title={"Pick your scooter"}
            description={
              "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
            }
          />
          <InstructionElement
            icon={<StyledScooterIcon />}
            title={"Enjoy the ride"}
            description={
              "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."
            }
          />
        </Wrapper>
      </StyledInstruction>
    </>
  );
};

export default Instruction;
