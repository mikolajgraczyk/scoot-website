import styled from "styled-components";

export const StyledHomepage = styled.main`
  overflow: hidden;
  margin-bottom: 200px;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px;
`;

export const Line = styled.div`
  height: 15px;
  width: 70%;
  background: ${({ theme }) => theme.color.lightGrey};
  position: absolute;
  left: 0;
  top: 948px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: none;
  }

  @media (min-width: 1500px) {
    width: 64%;
  }

  @media (min-width: 2160px) {
    width: 60%;
  }

  @media (min-width: 3000px) {
    width: 57%;
  }
`;

export const InfoSection = styled.section`
  margin-top: 200px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 160px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    align-items: center;
    margin-top: 145px;
    gap: 128px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 120px;
    gap: 120px;
  }
`;
