import styled from "styled-components";

export const StyledQuestionTile = styled.div`
  text-align: left;
  color: ${({ theme }) => theme.color.darkNavy};
  background: ${({ theme }) => theme.color.snow};
  padding: 32px 40px;
  gap: 24px;

  &:hover{
    cursor: pointer;
    background: ${({theme}) => theme.color.lightYellow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 32px;
  }
`;

export const TopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Question = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -1.071px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.804px;
  }
`;

export const ExtendButton = styled.button`
  float: right;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const Answer = styled.div`
  margin-top: 24px;
  font-size: 15px;
  font-family: "Lexend Deca";
  font-weight: 400;
  line-height: 25px;
`;
