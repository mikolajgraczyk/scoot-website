import styled from "styled-components";

export const StyledInstruction = styled.div`
  margin-top: 160px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 0;
  } ;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 11.5%;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    margin-top: 122px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 120px;
  }
`;
