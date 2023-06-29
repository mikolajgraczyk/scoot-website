import { StyledValuesSection, Title, ValuesWrapper } from "./styled";
import ValueElement from "./ValueElement";
import tech from "./images/our-tech.jpg";
import integrity from "./images/our-integrity.jpg";
import community from "./images/our-community.jpg";

const ValuesSection = ({ title }) => {
  return (
    <StyledValuesSection>
      <Title>{title}</Title>
      <ValuesWrapper>
        <ValueElement
          image={tech}
          title={"Our tech"}
          description={
            "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"
          }
        />
        <ValueElement
          image={integrity}
          title={"Our integrity"}
          description={
            "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."
          }
        />
        <ValueElement
          image={community}
          title={"Our community"}
          description={
            "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."
          }
        />
      </ValuesWrapper>
    </StyledValuesSection>
  );
};

export default ValuesSection;
