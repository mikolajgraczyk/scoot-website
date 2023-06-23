import { StyledTopBanner, Wrapper, StyledWhiteCircles } from "./styled";

const TopBanner = ({ title, location }) => {
  return (
    <StyledTopBanner location={location}>
      <Wrapper>
        {title}
        <StyledWhiteCircles />
      </Wrapper>
    </StyledTopBanner>
  );
};

export default TopBanner;
