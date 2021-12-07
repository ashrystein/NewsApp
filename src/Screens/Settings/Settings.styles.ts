import { StyleSheet } from 'react-native'

import { Fonts } from '../../Constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  langView: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white' //theme
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
    marginLeft: 10
    // color: '' //theme
  }
})

export default styles
