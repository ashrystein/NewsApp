import { StyleSheet } from 'react-native'

import { Fonts } from '../../Constants'
import { Colors } from '../../Themes'

const styles = StyleSheet.create<any>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 9999,
    borderWidth: 0.5,
    marginBottom: 10,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    borderColor: Colors.lightGrey
  },
  searchInput: {
    flex: 1,
    borderRadius: 20,
    color: Colors.black,
    fontSize: Fonts.medium,
    paddingHorizontal: 16
  }
})

export default styles
