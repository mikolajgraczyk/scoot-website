import styled from "styled-components";

export const StyledCareerTile = styled.div`
  padding: 32px 64px 35px 40px;
  background: ${({ theme }) => theme.color.snow};
  color: ${({ theme }) => theme.color.darkNavy};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 36px 32px 32px;
    flex-direction: column;
    gap: 16px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 24px;
  font-family: "Space Mono";
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -1.071px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.804px;
  }
`;

export const Subtitle = styled.span`
  font-size: 15px;
  font-family: "Lexend Deca";
  line-height: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    text-align: center;
  }
`;

export const ApplyButton = styled.button`
  border: none;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.yellow};
  font-size: 15px;
  font-family: "Space Mono";
  font-weight: 700;
  line-height: 25px;
  min-width: 180px;
  height: 53px;
  padding: 0;

  &:hover{
    cursor: pointer;
    background: none;
    color: ${({ theme }) => theme.color.yellow};
    border: 3px solid ${({ theme }) => theme.color.yellow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 100%;
  }
`;
