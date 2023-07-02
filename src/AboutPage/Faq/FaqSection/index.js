import { StyledFaqSection, Title, TilesWrapper } from "./styled";

const FaqSection = ({ title, children }) => {
  return (
    <StyledFaqSection>
      <Title>{title}</Title>
      <TilesWrapper>
        {children}
      </TilesWrapper>
    </StyledFaqSection>
  );
};

export default FaqSection;
