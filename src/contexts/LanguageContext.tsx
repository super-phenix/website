import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fr";

function getNavigatorLanguage(): Language {
  if (typeof navigator === "undefined") return "en";
  const preferred = navigator.language || (navigator.languages?.[0] ?? "");
  const base = preferred.split("-")[0].toLowerCase();
  return base === "fr" ? "fr" : "en";
}

interface LanguageContextType {
  lang: Language;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({ lang: "en", toggle: () => {} });

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(getNavigatorLanguage);
  const toggle = () => setLang((l) => (l === "en" ? "fr" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
};
