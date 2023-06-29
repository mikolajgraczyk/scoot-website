import {
  StyledValueElement,
  Image,
  StyledTitle,
  StyledDescription,
} from "./styled";

const ValueElement = ({ image, title, description, number }) => {
  return (
    <StyledValueElement>
      <Image src={image} />
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledValueElement>
  );
};

export default ValueElement;
