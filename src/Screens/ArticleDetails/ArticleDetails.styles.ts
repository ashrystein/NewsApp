import { StyleSheet, Dimensions } from 'react-native'

import { ThemeType } from '../../Themes/types'
import { Fonts } from '../../Constants'
import { Colors } from '../../Themes'

const { height } = Dimensions.get('window')

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1
    },
    poster: {
      height: height * 0.4,
      resizeMode: 'cover'
    },
    wrapperView: {
      margin: 10,
      padding: 5,
      borderRadius: 5,
      backgroundColor: theme.colors.secondaryBg
    },
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
    },
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
