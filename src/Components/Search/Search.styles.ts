import { StyleSheet } from 'react-native'

import { Fonts } from '../../Constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 9999,
    borderWidth: 0.5,
    marginBottom: 10,
    paddingVertical: 10,
    backgroundColor: 'white', //theme
    borderColor: 'gray' //theme
  },
  searchInput: {
    flex: 1,
    borderRadius: 20,
    color: 'black', //theme
    fontSize: Fonts.medium,
    paddingHorizontal: 16
  }
})

export default styles
