import { StyledContent, Title, Description, Button } from "./styled";

const Content = ({
  title,
  description,
  location,
  leftDirection,
  isInView,
  buttonText,
}) => {
  return (
    <StyledContent leftDirection={leftDirection} isInView={isInView}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {location === "about" ? "" : <Button>{buttonText}</Button>}
    </StyledContent>
  );
};

export default Content;
