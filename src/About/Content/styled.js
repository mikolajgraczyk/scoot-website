import styled from "styled-components";

export const StyledContent = styled.div`
  max-width: 445px;
`;

export const Title = styled.span`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -2.14286px;
  color: ${({ theme }) => theme.color.darkNavy};
`;

export const Description = styled.p`
  margin: 0;
  padding: 0;
  font-family: "Lexend Deca";
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.color.dimGrey};
  margin-top: 24px;
`;

export const Button = styled.button`
  padding: 14px 44px;
  background: ${({ theme }) => theme.color.yellow};
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.color.white};
  border: none;
  margin-top: 40px;

  &:hover {
    padding: 11px 41px;
    color: ${({ theme }) => theme.color.yellow};
    background: none;
    cursor: pointer;
    border: 3px solid ${({ theme }) => theme.color.yellow};
  }
`;
