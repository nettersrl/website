import React, { createContext, useContext } from 'react';
import { useTranslation as useI18nTranslation } from 'react-i18next';

export type Language = 'en' | 'it';

interface TranslationContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const LANGUAGE_NAMES: Record<Language, string> = {
  en: 'English',
  it: 'Italiano',
};

interface TranslationProviderProps {
  children: React.ReactNode;
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  const { i18n, t } = useI18nTranslation();

  const currentLanguage = i18n.language as Language;

  const setLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
  };

  return (
    <TranslationContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
