import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [word, setWord] = useState("Hello");
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
