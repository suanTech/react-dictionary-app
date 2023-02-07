import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  body {
    background-color: ${({ theme }) => theme.bg.hex};
    color: ${({ theme }) => theme.text};
    transition: all .3s linear, width 1ms;
  }
  input {
    background: transparent;
    outline: none;
    border: none;
    font-family: inherit;
  }
  button {
    font-family: inherit;
  }
  h1 {
    font-size: 32px;
    margin-bottom: 8px;
  }
`;
