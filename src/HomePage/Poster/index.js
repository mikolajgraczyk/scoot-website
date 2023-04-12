import {
  StyledPoster,
  Container,
  Wrapper,
  Title,
  DescriptionWrapper,
  Description,
  Button,
  StyledRightArrow,
  StyledLine,
  StyledWhiteCircles,
} from "./styled";

const Poster = () => {
  return (
    <StyledPoster>
      <Container>
        <Title>Scooter sharing made simple</Title>
        <Wrapper>
          <StyledLine />
          <DescriptionWrapper>
            <Description>
              Scoot takes the hassle out of urban mobility. Our bikes are placed
              in convenient locations in each of our cities. Use our app to
              locate the nearest bike, unlock it with a tap, and you’re away!
            </Description>
            <Button>Get Scootin</Button>
          </DescriptionWrapper>
          <StyledRightArrow />
          <StyledWhiteCircles />
        </Wrapper>
      </Container>
    </StyledPoster>
  );
};

export default Poster;
