import { labels, languageList } from './ui';

const defaultLang = 'es';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languageList) return lang as keyof typeof languageList;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languageList) {
  return function t(key: keyof typeof labels[typeof defaultLang]) {
    return labels[lang][key] || labels[defaultLang][key];
  }
}
