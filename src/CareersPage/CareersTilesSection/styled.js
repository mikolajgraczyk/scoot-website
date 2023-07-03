import styled from "styled-components";

export const StyledCareersTilesSection = styled.div`
  margin: 120px auto 160px;
  max-width: 1110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 120px auto 120px;
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 145px auto 120px;
  }
`;
