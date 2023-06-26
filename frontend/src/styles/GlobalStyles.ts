import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --main-white: #FEFEFE;
    --sec-white: #F9F9F9;
    --third-white: #E0E0E0;

    --main-dark: #0A0A0A;
    --sec-dark: #121214;
    --third-dark: #2A292E;

    --main-green: #015F44;
    --sec-green: #0FCD64;
    --third-green: #06B280;

    --main-red: #B9314F;
    --main-blue: #266DD3;
    --main-yellow: #F9C80E;

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
