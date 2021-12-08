import I18n from './index'

const translate = (i18nKey: string) =>
  I18n.t(i18nKey, { defaultValue: i18nKey })

const getCurrentLanguage = () => I18n.locale

const changeLanguage = (lang: string) => {
  I18n.locale = lang
}

export { translate, changeLanguage, getCurrentLanguage }
