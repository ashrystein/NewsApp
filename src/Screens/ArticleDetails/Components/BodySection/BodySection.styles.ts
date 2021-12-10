import { StyleSheet } from 'react-native'

import { ThemeType } from '../../../../Themes/types'
import { Fonts } from '../../../../Constants'
import { Colors } from '../../../../Themes'

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    lineView: {
      height: 0.5,
      marginVertical: 10,
      opacity: 0.4,
      backgroundColor: Colors.lightGrey
    },
    titleText: {
      fontSize: Fonts.large,
      color: theme.colors.pirmaryText
    },
    descriptionText: {
      fontSize: Fonts.medium,
      color: theme.colors.secondaryText
    }
  })

export default styles
