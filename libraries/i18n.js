const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'vi',
  otherLanguages: ['vi'],
  browserLanguageDetection: false,
});

module.exports = NextI18NextInstance;
