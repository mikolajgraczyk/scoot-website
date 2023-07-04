import { StyledContent, Title, Description, Button } from "./styled";

const Content = ({ title, description, location, leftDirection, isInView }) => {
  return (
    <StyledContent leftDirection={leftDirection} isInView={isInView}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {location === "subpage" ? "" : <Button>Learn more</Button>}
    </StyledContent>
  );
};

export default Content;
