import {
  StyledAdditionalInfo,
  QuestionText,
  AnswerText,
  MessageUsButton,
} from "./styled";

const AdditionalInfo = () => {
  return (
    <StyledAdditionalInfo>
      <QuestionText>Your City Not Listed?</QuestionText>
      <AnswerText>
        If you’d like to see Scoot in your hometown, be sure to let us know. We
        track requests and plan launches based on demand. Feel free to message
        us by clicking the link or messaging us on social.
      </AnswerText>
      <MessageUsButton>Message Us</MessageUsButton>
    </StyledAdditionalInfo>
  );
};

export default AdditionalInfo;
