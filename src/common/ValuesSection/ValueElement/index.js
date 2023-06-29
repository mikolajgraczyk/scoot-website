import {
  StyledValueElement,
  Image,
  StyledTitle,
  StyledDescription,
  OrangeCircle,
} from "./styled";

const ValueElement = ({ image, title, description, number }) => {
  return (
    <StyledValueElement>
      <Image src={image} />
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <OrangeCircle>{number}</OrangeCircle>
    </StyledValueElement>
  );
};

export default ValueElement;
