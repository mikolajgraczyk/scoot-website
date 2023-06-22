import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.color.brightGrey};
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  height: 96px;
  display: flex;
  max-width: 1440px;
  padding: 36px 168px;
  width: 100%;
  justify-content: space-between;
  gap: 60px;

  @media(max-width: ${({theme}) => theme.breakpoint.tablet}px){
    padding: 40px 36px;
  }
`;

export const SocialMediaButtons = styled.div`
  display: flex;
  /* gap: 24px; */
  justify-content: space-between;
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