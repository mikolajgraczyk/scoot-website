import { StyledAbout, Circles, ImageCircle, StyledCircle } from "./styled";
import Content from "./Content";

const About = ({ title, description, image, leftDirection, location }) => {
  return (
    <StyledAbout leftDirection={leftDirection} location="homepage">
      <Content title={title} description={description} />
      <Circles leftDirection={leftDirection}>
        <ImageCircle src={image} alt="" />
        <StyledCircle />
      </Circles>
    </StyledAbout>
  );
};

export default About;
