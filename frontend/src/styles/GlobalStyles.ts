import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --main-white: #f9f9f9;
    --sec-white: #E0E0E0;
    --main-dark: #242424;
    --sec-dark: #1a1a1a;
    --main-red: #DA0C21;
    --main-green: #2FBF71;
    --main-blue: #266DD3;
    --main-yellow: #F5B700;

    --large-shadow: 5px 15px 25px rgba(0, 0, 0, 0.5);
    --normal-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    --small-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  html {
    font-size: 6.25%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  }

  body {
    color: var(--main-white);
    background-color: var(--main-dark);
    font-size: 16rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  button:disabled,
  button:disabled:hover,
  button:disabled:focus,
  button:disabled:active {
    cursor: not-allowed;
  }

`;
