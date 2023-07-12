import styled from "styled-components";

export const StyledLocationPage = styled.main`
  overflow: hidden;
`;

export const WorldMap = styled.div`
  display: block;
  margin: 120px auto;
  max-width: 1110px;
  max-height: 543px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 144px auto 64px;
    max-width: 689px;
    max-height: 337px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 72px auto 40px;
    max-width: 311px;
    max-height: 152px;
  }
`;

export const MapImage = styled.img`
  width: 100%;
`;
