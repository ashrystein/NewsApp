import { StyleSheet } from 'react-native'

import { ThemeType } from '../../Themes/types'
import { Fonts } from '../../Constants'

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background
    },
    barandText: {
      fontSize: Fonts.brandSize,
      color: theme.colors.pirmaryText,
      fontWeight: 'bold'
    }
  })

export default styles
