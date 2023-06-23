import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.color.brightGrey};
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 1440px;
  padding: 35px 165px 32px 168.6px;
  width: 100%;
  justify-content: space-between;
  gap: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding: 35px 40px 32px 39.6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 64px 134px 88px 134px;
    display: grid;
    justify-content: center;
    gap: 85px;
  }
`;

export const SocialMediaButtons = styled.div`
  display: flex;
  gap: 24px;
  width: 120px;
  align-items: center;
`;

export const SocialMediaButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.yellow};

  &:hover {
    color: ${({ theme }) => theme.color.lightGrey};
    cursor: pointer;
  }
`;
