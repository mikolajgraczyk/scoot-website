import styled from "styled-components";

export const StyledFaqSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 64px;

  @media(max-width: ${({theme}) => theme.breakpoint.tablet}px){
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  @media(max-width: ${({theme}) => theme.breakpoint.mobile}px){
    margin-top: 48px;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.color.darkNavy};
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -1.786px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -1.071px;
  }
`;

export const TilesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 730px;
  width: 100%;

  @media(max-width: ${({theme}) => theme.breakpoint.tablet}px){
    gap: 24px;
    max-width: none;
  }

  @media(max-width: ${({theme}) => theme.breakpoint.mobile}px){
    gap: 16px;
  }
`;
