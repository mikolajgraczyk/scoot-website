import styled, { css } from "styled-components";

export const StyledLocationBubble = styled.div`
  width: 189px;
  height: 89px;
`;

export const StyledLocationBubbleShape = styled.div`
  color: ${({ theme }) => theme.color.darkNavy};
  text-align: center;
  font-size: 24px;
  padding-top: 22px;
  font-family: "Space Mono";
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -1.071px;
  position: absolute;

  width: 189px;
  height: 88px;
  background-color: #fcb72b;
  clip-path: polygon(
    0 0,
    78px 0,
    189px 0,
    189px 72px,
    110px 72px,
    94px 88px,
    78px 72px,
    0 72px
  );

  ${({ cityName }) => {
    switch (cityName) {
      case "London":
        return `
          left: 405px;
          top: 17px;
        `;
      case "New York":
        return `
        left: 145px;
        top: -15px;
        `;
      default:
        return "";
    }
  }}
`;
