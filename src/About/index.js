import {
  StyledAbout,
  Circles,
  ImageCircle,
  StyledCircle,
  StyledLeftAboutArrow,
  StyledRightAboutArrow,
} from "./styled";
import Content from "./Content";

const About = ({ title, description, image, leftDirection }) => {
  return (
    <StyledAbout leftDirection={leftDirection}>
      <Content title={title} description={description} />
      <Circles leftDirection={leftDirection}>
        <ImageCircle src={image} alt="" />
        <StyledCircle />
        <StyledLeftAboutArrow leftDirection={leftDirection} />
        <StyledRightAboutArrow leftDirection={leftDirection} />
      </Circles>
    </StyledAbout>
  );
};

export default About;
