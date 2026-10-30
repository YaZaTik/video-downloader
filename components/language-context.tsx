"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations, Translations } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    // Check saved preference or browser language
    const saved = localStorage.getItem("saveit_lang") as Language;
    if (saved && (saved === "en" || saved === "fr" || saved === "ar")) {
      setLangState(saved);
      document.documentElement.dir = translations[saved].dir;
      document.documentElement.lang = saved;
    } else {
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === "fr") {
        setLangState("fr");
        document.documentElement.dir = "ltr";
        document.documentElement.lang = "fr";
      } else if (browserLang === "ar") {
        setLangState("ar");
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "ar";
      }
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("saveit_lang", newLang);
    document.documentElement.dir = translations[newLang].dir;
    document.documentElement.lang = newLang;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
