import { StyledLocationBubble, StyledLocationBubbleShape } from "./styled";

export const LocationBubble = ({ cityName }) => {
  return (
    <StyledLocationBubble>
      <StyledLocationBubbleShape cityName={cityName}>
        {cityName}
      </StyledLocationBubbleShape>
    </StyledLocationBubble>
  );
};

export default LocationBubble;
