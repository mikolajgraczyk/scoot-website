import { useState } from "react";
import { StyledQuestionTile, TopWrapper, Question, ExtendButton, Answer } from "./styled";
import { ReactComponent as Extend } from "./images/Extend.svg";
import { ReactComponent as Descend } from "./images/Descend.svg";

const QuestionTile = ({ question, answer }) => {
  const [isExtended, setIsExtended] = useState(false);

  const extendTheTile = () => {
    isExtended ? setIsExtended(false) : setIsExtended(true);
  };

  return (
    <StyledQuestionTile onClick={extendTheTile}>
      <TopWrapper>
        <Question>{question}</Question>
          {isExtended ? <Descend /> : <Extend />}
      </TopWrapper>
      {isExtended ? <Answer>{answer}</Answer> : ""}
    </StyledQuestionTile>
  );
};

export default QuestionTile;
