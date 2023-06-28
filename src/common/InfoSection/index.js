import styled, { css } from "styled-components";

export const InfoSection = styled.section`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 160px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    align-items: center;
    margin-top: 145px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    gap: 120px;
  }

  ${({ location }) =>
    location === "homepage" &&
    css`
      margin-top: 200px;

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        gap: 128px;
      }
    `}

  ${({ location }) =>
    location === "subpage" &&
    css`
      margin-top: 120px;

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        gap: 120px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin-top: 72px;
      }
    `}
`;
