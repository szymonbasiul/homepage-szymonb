import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*, ::after, ::before {
    box-sizing: inherit;
  }

body {
    font-family: 'Inter', sans-serif;
    background: #FBFBFE;
    word-break: break-word;
    line-height: 1.2;
    font-size: 18px;
    overflow-y: scroll;
    padding: 108px;
    letter-spacing: 0.05em;
}

`;
