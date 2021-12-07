import I18n from './index'

const translate = (i18nKey) => I18n.t(i18nKey, { defaultValue: i18nKey })

const getLanguageName = (lang) => (lang === 'en' ? 'English' : 'Arabic')

const changeLanguage = (callback) => {
  const currentLanguage = I18n.locale
  I18n.locale = currentLanguage === 'en' ? 'ar' : 'en'
  callback(getLanguageName(I18n.locale))
}

export { translate, changeLanguage }
