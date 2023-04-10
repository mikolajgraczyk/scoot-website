import { StyledHomepage } from "./styled";
import Poster from "./Poster";
import Instruction from "./Instruction";

const HomePage = () => {
  return (
    <StyledHomepage>
      <Poster />
      <Instruction />
    </StyledHomepage>
  );
};

export default HomePage;
