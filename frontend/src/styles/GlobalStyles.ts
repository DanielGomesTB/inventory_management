import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --main-white: #f9f9f9;
    --sec-white: #E0E0E0;
    --main-dark: #242424;
    --sec-dark: #1a1a1a;
    --main-red: #DA0C21;
    --main-green: #2FBF71;
    --main-blue: #266DD3;
    --main-yellow: #F5B700;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  }
  body {
    background-color: var(--main-dark);
    color: var(--main-white);
  }
`;
