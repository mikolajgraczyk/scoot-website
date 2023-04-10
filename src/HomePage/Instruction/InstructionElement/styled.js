import styled from "styled-components";

export const StyledInstructionElement = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    max-width: 573px;
    flex-direction: row;
    align-items: top;
    gap: 70px;
  } ;
`;

export const Wrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    flex-direction: row;
    max-width: 398px;
  } ;
`;

export const Title = styled.div`
  font-family: "Space Mono";
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -1.07143px;
  color: ${({ theme }) => theme.color.darkNavy};
`;

export const Description = styled.div`
  margin-top: 27px;
  font-family: "Lexend Deca";
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.color.dimGrey};
`;
