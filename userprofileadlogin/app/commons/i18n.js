import i18n from 'i18next';

export const BaseSetting = {
  defaultLanguage: 'en',
  defaultDesign: 'basic',
  language: i18n.language,
  languageSupport: ['en', 'ar'],

  resourcesLanguage: {
    en: {
      translation: require('./lang/en.json'),
    },

    ar: {
      translation: require('./lang/ar.json'),
    },
  },
};