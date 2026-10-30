"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
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
  const pathname = usePathname() || "/";
  const router = useRouter();

  const getLangFromPath = (path: string): Language => {
    if (path.startsWith("/ar")) return "ar";
    if (path.startsWith("/fr")) return "fr";
    return "en";
  };

  const [lang, setLangState] = useState<Language>(getLangFromPath(pathname));

  useEffect(() => {
    const currentLang = getLangFromPath(pathname);
    setLangState(currentLang);
    document.documentElement.dir = translations[currentLang].dir;
    document.documentElement.lang = currentLang;
  }, [pathname]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    document.documentElement.dir = translations[newLang].dir;
    document.documentElement.lang = newLang;

    // Navigate to the localized route
    if (newLang === "ar") {
      router.push("/ar");
    } else if (newLang === "fr") {
      router.push("/fr");
    } else {
      router.push("/");
    }
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
