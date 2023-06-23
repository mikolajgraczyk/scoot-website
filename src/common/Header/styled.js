import styled from "styled-components";

export const bpTablet = ({ theme }) => theme.breakpoint.tablet;
export const bpMobile = ({ theme }) => theme.breakpoint.mobile;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 22px 0;
  gap: 60px;
  display: flex;
  max-width: 76.8%;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${bpTablet}px) {
    max-width: 89.7%;
    gap: 20px;
  }

  @media (max-width: ${bpMobile}px) {
    max-width: 90%;
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
