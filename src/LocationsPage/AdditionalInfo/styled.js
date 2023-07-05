import styled from "styled-components";

export const StyledAdditionalInfo = styled.div`
  display: flex;
  max-width: 1110px;
  margin: 0 auto 120px;
  justify-content: space-between;
  gap: 16px;
  font-family: "Space Mono";
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    flex-direction: column;
    gap: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 0 auto 72px;
  }
`;

export const QuestionText = styled.div`
  color: ${({ theme }) => theme.color.darkNavy};
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -2.143px;
  max-width: 351px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    text-align: center;
    max-width: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -1.429px;
  }
`;

export const AnswerText = styled.div`
  color: ${({ theme }) => theme.color.dimGrey};
  font-family: "Lexend Deca";
  font-size: 15px;
  line-height: 25px;
  max-width: 445px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    text-align: center;
  }
`;

export const MessageUsButton = styled.button`
  color: ${({ theme }) => theme.color.white};
  border: none;
  padding: 14px 44px;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  background: ${({ theme }) => theme.color.yellow};

  &:hover{
    cursor: pointer;
    color: ${({theme}) => theme.color.yellow};
    background: none;
    padding: 11px 41px;
    border: 3px solid ${({theme}) => theme.color.yellow};
  }
`;
