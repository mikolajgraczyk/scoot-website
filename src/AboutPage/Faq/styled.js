import styled from "styled-components";

export const StyledFaq = styled.div`
  max-width: 1110px;
  margin: 120px auto 0;
  text-align: center;
  font-family: "Space Mono";

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 145px auto 0;
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
    line-height: 32px;
    letter-spacing: -1.429px;
  }
`;
