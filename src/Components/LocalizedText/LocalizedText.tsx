import React from 'react'
import { Text, TextProps } from 'react-native'

import { translate } from '../../i18n/helpers'

type LocalizedTextProps = {
  i18nKey: string
  children?: React.ReactNode
}

const LocalizedText: React.FC<LocalizedTextProps & TextProps> = ({
  i18nKey,
  children,
  ...Props
}) => {
  return <Text {...Props}>{children || translate(i18nKey)}</Text>
}

export default LocalizedText
