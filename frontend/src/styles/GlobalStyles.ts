import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --zinc-50: #fafafa;
    --zinc-100: #f4f4f5;
    --zinc-200: #e4e4e7;
    --zinc-300: #d4d4d8;
    --zinc-400: #a1a1aa;
    --zinc-500: #71717a;
    --zinc-600: #52525b;
    --zinc-700: #3f3f46;
    --zinc-800: #27272a;
    --zinc-900: #18181b;
    --zinc-950: #09090b;

    --emerald-50: #ecfdf5;
    --emerald-100: #d1fae5;
    --emerald-200: #a7f3d0;
    --emerald-300: #6ee7b7;
    --emerald-400: #34d399;
    --emerald-500: #10b981;
    --emerald-600: #059669;
    --emerald-700: #047857;
    --emerald-800: #065f46;
    --emerald-900: #064e3b;
    --emerald-950: #022c22;

    --red-50: #fef2f2;
    --red-100: #fee2e2;
    --red-200: #fecaca;
    --red-300: #fca5a5;
    --red-400: #f87171;
    --red-500: #ef4444;
    --red-600: #dc2626;
    --red-700: #b91c1c;
    --red-800: #991b1b;
    --red-900: #7f1d1d;
    --red-950: #450a0a;

    --yellow-50: #fefce8;
    --yellow-100: #fef9c3;
    --yellow-200: #fef08a;
    --yellow-300: #fde047;
    --yellow-400: #facc15;
    --yellow-500: #eab308;
    --yellow-600: #ca8a04;
    --yellow-700: #a16207;
    --yellow-800: #854d0e;
    --yellow-900: #713f12;
    --yellow-950: #422006;

    --sky-50: #f0f9ff;
    --sky-100: #e0f2fe;
    --sky-200: #bae6fd;
    --sky-300: #7dd3fc;
    --sky-400: #38bdf8;
    --sky-500: #0ea5e9;
    --sky-600: #0284c7;
    --sky-700: #0369a1;
    --sky-800: #075985;
    --sky-900: #0c4a6e;
    --sky-950: #082f49;

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
    color: var(--zinc-50);
    background-color: var(--zinc-950);
    font-size: 16rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    font-weight: 600;
    text-align: center;
    border: none;

    &:active {
      transform: scale(0.98);
    }

    &:disabled,
    &:disabled:hover,
    &:disabled:focus,
    &:disabled:active {
      cursor: not-allowed;
    }
  }

  input[type="number"]::-webkit-inner-spin-button{
    -webkit-appearance: none;
  }
`;
