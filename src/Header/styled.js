import styled from "styled-components";

export const bpTablet = ({theme}) => theme.breakpoint.tablet;
export const bpMobile = ({theme}) => theme.breakpoint.mobile;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  font-family: "Space Mono";
`;

export const Wrapper = styled.div`
  padding: 22px 0;
  gap: 20px;
  display: flex;
  max-width: 76.8%;
  width: 100%;
  justify-content: space-between;

  @media(max-width: ${bpTablet}px){
    max-width: 95%;
  }

  @media(max-width: ${bpMobile}px){
    width: auto;
  }
`;

export const Button = styled.button`
  padding: 14px 39px;
  background: ${({ theme }) => theme.color.yellow};
  border: none;
  font-family: "Space Mono";
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.color.white};
  white-space: nowrap;

  @media(max-width: ${bpMobile}px){
    display: none;
  }
`;
