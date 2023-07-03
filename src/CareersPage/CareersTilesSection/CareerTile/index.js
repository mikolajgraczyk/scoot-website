import { StyledCareerTile, ContentWrapper, Title, Subtitle, ApplyButton } from "./styled";

const CareerTile = ({ title, subtitle }) => {
  return (
    <StyledCareerTile>
      <ContentWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContentWrapper>
      <ApplyButton>Apply</ApplyButton>
    </StyledCareerTile>
  );
};

export default CareerTile;
