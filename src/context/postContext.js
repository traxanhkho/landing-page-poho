import { createContext, useContext, useState } from "react";
import { getFlagImg } from "../services/fakeData";

const postContext = createContext();

export function AppWrapper({ children }) {
  const [language, setLanguage] = useState("vn");
  const [flagImg, setFlagImg] = useState(getFlagImg(language));

  return (
    <postContext.Provider
      value={{ language, setLanguage, flagImg, setFlagImg }}
    >
      {children}
    </postContext.Provider>
  );
}

export const usePostContext = () => useContext(postContext);
