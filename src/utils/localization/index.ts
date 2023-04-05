import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const backend = {
  loadPath: '/locales/{{lng}}/{{ns}}.json',
  // backendOptions: {
  //   expirationTime: 1 * 24 * 60 * 60 * 1000, // 1 day
  // },
};

const currenLang = localStorage.getItem('i18nextLng');
const defaultLanguage =
  currenLang || navigator.language.substring(0, navigator.language.indexOf('-'));

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    detection: { order: ['navigator'] },
    ns: 'common',
    defaultNS: 'common',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      bindI18n: 'languageChanged',
      useSuspense: false,
    },
    lng: defaultLanguage,
    backend,
  });
export default i18n;
