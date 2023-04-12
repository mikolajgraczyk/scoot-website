import { StyledContent, Title, Description, Button } from "./styled";

const Content = ({ title, description }) => {
  return (
    <StyledContent>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>Learn more</Button>
    </StyledContent>
  );
};

export default Content;
