import { StyledAbout, Circles, ImageCircle, StyledCircle } from "./styled";
import Content from "./Content";

const About = ({ title, description, image }) => {
  return (
    <StyledAbout>
      <Content title={title} description={description} />
      <Circles>
        <ImageCircle src={image} alt="" />
        <StyledCircle />
      </Circles>
    </StyledAbout>
  );
};

export default About;
