import styled from "styled-components";

export const StyledValuesSection = styled.div`
  max-width: 1110px;
  margin: 120px auto 0;
  font-family: "Space Mono";
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 103px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    gap: 105px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    gap: 64px;
  }
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.color.darkNavy};
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -2.143px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: -1.429px;
  }
`;

export const ValuesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    gap: 55px;
    grid-template-columns: 1fr;
  }
`;
