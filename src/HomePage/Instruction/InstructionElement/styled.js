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
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    max-width: 311px;
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    max-width: 398px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    gap: 24px;
  }
`;

export const Title = styled.div`
  font-family: "Space Mono";
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -1.07143px;
  color: ${({ theme }) => theme.color.darkNavy};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    text-align: center;
    font-size: 20px;
    letter-spacing: -0.892857px;
  }
`;

export const Description = styled.div`
  font-family: "Lexend Deca";
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.color.dimGrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    text-align: center;
  }
`;
