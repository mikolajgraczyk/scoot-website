import { StyledInstructionElement, Wrapper, Title, Description } from "./styled";

const InstructionElement = ({ icon, title, description }) => {
  return (
    <StyledInstructionElement>
      {icon}
      <Wrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Wrapper>
    </StyledInstructionElement>
  );
};

export default InstructionElement;
