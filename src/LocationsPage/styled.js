import styled from "styled-components";

export const StyledLocationPage = styled.main`
  overflow: hidden;
`;

export const WorldMap = styled.div`
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

export const CitiesList = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    margin: 40px auto 72px;
  }
`;

export const CityTile = styled.div`
  padding: 22px 0;
  background: rgba(252, 183, 43, 0.15);
  color: ${({ theme }) => theme.color.darkNavy};
  text-align: center;
  font-family: "Space Mono";
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -1.071px;
`;
