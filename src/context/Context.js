import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [word, setWord] = useState("Keyboard");
  return (
    <AppContext.Provider
      value={{
        word,
        setWord
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
