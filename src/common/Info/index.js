import {
  StyledInfo,
  Circles,
  ImageCircle,
  StyledCircle,
  StyledLeftInfoArrow,
  StyledRightInfoArrow,
} from "./styled";
import Content from "./Content";

const Info = ({ title, description, image, location, leftDirection }) => {
  return (
    <StyledInfo leftDirection={leftDirection}>
      <Content title={title} description={description} location={location}/>
      <Circles leftDirection={leftDirection}>
        <ImageCircle src={image} alt="" />
        <StyledCircle />
        <StyledLeftInfoArrow leftDirection={leftDirection} />
        <StyledRightInfoArrow leftDirection={leftDirection} />
      </Circles>
    </StyledInfo>
  );
};

export default Info;
