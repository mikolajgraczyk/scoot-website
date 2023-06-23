import { StyledTopBanner, StyledWhiteCircles } from "./styled";

const TopBanner = ({title, location}) => {
    return(
        <StyledTopBanner location={location}>
            {title}
            <StyledWhiteCircles />
        </StyledTopBanner>
    );
};

export default TopBanner;