import { createContext, useContext, useState } from "react";

const postContext = createContext();

export function AppWrapper({ children }) {
  const [language, setLanguage] = useState();
  const [flagImg, setFlagImg] = useState();

  return (
    <postContext.Provider
      value={{ language, setLanguage, flagImg, setFlagImg }}
    >
      {children}
    </postContext.Provider>
  );
}

export const usePostContext = () => useContext(postContext);
