import { useTranslation } from '@/contexts/TranslationContext';

/**
 * Hook to translate text using i18n keys
 * @param key The translation key
 * @returns The translated text
 */
export function useTranslate(key: string): string {
  const { t } = useTranslation();
  return t(key);
}

/**
 * Component wrapper for translating text content
 */
interface TranslateProps {
  i18nKey: string;
}

export function Translate({ i18nKey }: TranslateProps) {
  const translated = useTranslate(i18nKey);
  return <>{translated}</>;
}
