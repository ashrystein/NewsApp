import { StyleSheet } from 'react-native'

import { ThemeType } from '../../../../Themes/types'
import { Fonts } from '../../../../Constants'

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    authorText: {
      fontSize: Fonts.large,
      color: theme.colors.pirmaryText
    },
    publishText: {
      marginTop: 10,
      fontSize: Fonts.small,
      color: theme.colors.secondaryText
    }
  })

export default styles
