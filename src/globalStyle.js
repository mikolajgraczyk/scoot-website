import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    html, body{
        margin: 0;
        overflow-x: hidden;
        max-width: 100%;
    }
`;
