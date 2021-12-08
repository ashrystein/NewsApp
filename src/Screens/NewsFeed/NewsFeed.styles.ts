import { StyleSheet } from 'react-native'

import { ThemeType } from '../../Themes/types'

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      backgroundColor: theme.colors.background
    }
  })

export default styles
