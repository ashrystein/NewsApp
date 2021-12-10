import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import I18n from '../i18n'

type NavigationScreenProps = {
  children: React.ReactNode
  onChangeLanguage: () => void
}

const NavigationScreen: React.FC<NavigationScreenProps> = ({ children }) => {
  const { language } = useSelector(
    (state: { settings: { language: string } }) => state.settings
  )

  useEffect(() => {
    I18n.locale = language
  }, [language])

  return <>{children}</>
}

export default NavigationScreen
