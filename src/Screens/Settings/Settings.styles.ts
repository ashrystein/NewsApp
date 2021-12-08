import { StyleSheet } from 'react-native'

import { ThemeType } from '../../Themes/types'
import { Fonts } from '../../Constants'
import { Colors } from '../../Themes'

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      margin: 10
    },
    langView: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: theme.colors.secondaryBg
    },
    lineView: {
      height: 0.5,
      marginVertical: 10,
      opacity: 0.4,
      backgroundColor: Colors.lightGrey
    },
    langItemView: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginVertical: 5
    },
    langNameItem: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    langItemText: {
      fontSize: Fonts.medium,
      marginLeft: 10,
      color: theme.colors.pirmaryText
    }
  })

export default styles
