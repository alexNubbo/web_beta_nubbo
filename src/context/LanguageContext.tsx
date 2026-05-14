import React, { createContext, useContext, useMemo, useState } from 'react';
import { translations } from '../content/translations';
import type { Language, SiteContent } from '../types/content';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  content: SiteContent;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      content: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
