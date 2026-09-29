"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Language, type Translations } from "./translations";

type LanguageContextType = {
  lang: Language;
  t: Translations;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const LANG_STORAGE_KEY = "cakai-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem(LANG_STORAGE_KEY) as Language | null;
    if (stored === "pt" || stored === "en") {
      setLang(stored);
    }
  }, []);

  function toggleLang() {
    setLang((prev) => {
      const next: Language = prev === "en" ? "pt" : "en";
      localStorage.setItem(LANG_STORAGE_KEY, next);
      return next;
    });
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
