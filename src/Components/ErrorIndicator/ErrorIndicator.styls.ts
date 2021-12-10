import { StyleSheet } from 'react-native'

import { Fonts } from '../../Constants'
import { Colors } from '../../Themes'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center'
  },
  retryText: {
    fontSize: Fonts.medium,
    color: Colors.frenchBlue,
    marginRight: 10
  }
})

export default styles
