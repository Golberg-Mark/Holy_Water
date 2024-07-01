import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/utils/localization/en.json';
import fr from '@/utils/localization/fr.json';
import es from '@/utils/localization/es.json';
import de from '@/utils/localization/de.json';

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
  es: {
    translation: es,
  },
  de: {
    translation: de,
  },
};

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  resources,
});

export default i18next;
