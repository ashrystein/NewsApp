import { StyleSheet, Dimensions } from 'react-native'

import { ThemeType } from '../../Themes/types'

const { height } = Dimensions.get('window')

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      height: height * 0.4,
      marginVertical: 5,
      backgroundColor: theme.colors.secondaryBg,
      borderRadius: 5,
      padding: 10,
      paddingTop: 0
    },
    headingView: {
      padding: 10,
      paddingLeft: 0
    },
    imageView: {
      flex: 1
    },
    headingText: {
      color: theme.colors.pirmaryText
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover'
    }
  })

export default styles
