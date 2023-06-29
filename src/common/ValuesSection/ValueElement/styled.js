import styled from "styled-components";

export const StyledValueElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  border-radius: 240px;
`;

export const StyledTitle = styled.span`
  margin-top: 87px;
  color: ${({ theme }) => theme.color.darkNavy};
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -1.071px;

  @media(max-width: ${({theme}) => theme.breakpoint.mobile}px){
    margin-top: 64px;
  }
`;

export const StyledDescription = styled.span`
  margin-top: 27px;
  color: ${({ theme }) => theme.color.dimGrey};
  text-align: center;
  font-size: 15px;
  font-family: "Lexend Deca";
  line-height: 25px;
`;
