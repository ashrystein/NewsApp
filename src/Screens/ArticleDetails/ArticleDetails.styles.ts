import { StyleSheet, Dimensions } from 'react-native'

import { ThemeType } from '../../Themes/types'

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
    }
  })

export default styles
