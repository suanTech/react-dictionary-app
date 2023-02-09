import { createGlobalStyle } from "styled-components";
import { fontSize } from "./Theme";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    transition: all .1s linear, width 1ms;
  }
  input {
    background: transparent;
    outline: none;
    border: none;
    font-family: inherit;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
  h1 {
    font-size: ${fontSize.headingL};
    margin-bottom: 8px;
    @media (min-width: 768px){
      font-size: ${fontSize.headingXL};
      margin-top: 20px;
    }
  }
  h2 {
    font-size: ${fontSize.bodyM};
  }
`;
