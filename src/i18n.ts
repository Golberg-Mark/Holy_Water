import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from '@/utils/localization/en.json';

i18next.use(initReactI18next).init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation,
    },
  },
});

export default i18next.t;
