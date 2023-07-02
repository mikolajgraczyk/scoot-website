import { useState } from "react";
import { StyledQuestionTile, Question, ExtendButton, Answer } from "./styled";

const QuestionTile = ({ question, answer }) => {
  const [isExtended, setIsExtended] = useState(false);

  const extendTheTile = () => {
    isExtended ? setIsExtended(false) : setIsExtended(true);
  };

  return (
    <StyledQuestionTile>
      <Question>{question}</Question>
      <ExtendButton onClick={extendTheTile}>rozwiń</ExtendButton>
      {isExtended ? <Answer>{answer}</Answer> : ""}
    </StyledQuestionTile>
  );
};

export default QuestionTile;
