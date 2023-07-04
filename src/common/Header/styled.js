import styled from "styled-components";

export const bpTablet = ({ theme }) => theme.breakpoint.tablet;
export const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 4;
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 22px 165px 22px 169px;
  gap: 60px;
  display: flex;
  justify-content: space-between;
  background-color: ${({theme}) => theme.color.white};
  z-index: 5;

  @media (max-width: ${bpTablet}px) {
    padding: 22px 40px;
    gap: 20px;
  }

  @media (max-width: ${bpMobile}px) {
    padding: 22px 32px;
    justify-content: center;
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

  @media (max-width: ${bpMobile}px) {
    display: none;
  }

  &:hover {
    padding: 11px 36px;
    color: ${({ theme }) => theme.color.yellow};
    background: none;
    cursor: pointer;
    border: 3px solid ${({ theme }) => theme.color.yellow};
  }
`;
