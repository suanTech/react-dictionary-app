import { useState } from "react";
import { AppContextProvider } from "./context/Context";
import { ThemeProvider } from "styled-components";
import Header from "./components/header/Header";
import { Result } from "./components/result/Result";

// styles

import { GlobalStyles } from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/Theme";
import { AppContainer } from "./styles/layout";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <AppContextProvider>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <AppContainer>
          <Header themeToggler={themeToggler} />
          <Result />
        </AppContainer>
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
