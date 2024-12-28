import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Load translations via HTTP
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Integrates with React
  .init({
    debug: true,
    fallbackLng: "en",
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
    },
    ns: ['home', 'add', 'footer','about','navbar','contact','courses',], // Namespaces for translation files
    defaultNS: 'hero', // Default namespace
  });

export default i18n;
