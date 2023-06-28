import styled from "styled-components";

export const StyledHomepage = styled.main`
  overflow: hidden;
  margin-bottom: 200px;
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
