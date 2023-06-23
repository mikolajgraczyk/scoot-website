import { StyledAboutPage } from "./styled";
import TopBanner from "../common/TopBanner";

const AboutPage = () => {
  return (
    <StyledAboutPage>
      <TopBanner title={"About"} location={"about"} />
    </StyledAboutPage>
  );
};

export default AboutPage;
