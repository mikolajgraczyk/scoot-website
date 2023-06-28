import { StyledContent, Title, Description, Button } from "./styled";

const Content = ({ title, description, location }) => {
  return (
    <StyledContent>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {location === "subpage" ? "" : <Button>Learn more</Button>}
    </StyledContent>
  );
};

export default Content;
