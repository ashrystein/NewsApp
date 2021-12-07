import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

type NavigationScreenProps = {
  children: React.ReactNode
  onChangeLanguage: () => void
}

const NavigationScreen: React.FC<NavigationScreenProps> = ({
  children,
  onChangeLanguage
}) => {
  const { language } = useSelector(
    (state: { settings: { language: string } }) => state.settings
  )

  useEffect(() => {
    onChangeLanguage()
  }, [language, onChangeLanguage])

  return <>{children}</>
}

export default NavigationScreen
