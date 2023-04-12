import {
  StyledAbout,
  Circles,
  ImageCircle,
  StyledLeftAboutArrow,
  StyledRightAboutArrow,
} from "./styled";
import { ReactComponent as Circle } from "./images/Circle.svg";
import Content from "./Content";

const About = ({ title, description, image, leftDirection }) => {
  return (
    <StyledAbout leftDirection={leftDirection}>
      <Content title={title} description={description} />
      <Circles leftDirection={leftDirection}>
        <ImageCircle src={image} alt="" />
        <Circle />
        <StyledLeftAboutArrow leftDirection={leftDirection} />
        <StyledRightAboutArrow leftDirection={leftDirection} />
      </Circles>
    </StyledAbout>
  );
};

export default About;
