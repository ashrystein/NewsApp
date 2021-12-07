import { StyleSheet, Dimensions } from 'react-native'

import { Fonts } from '../../Constants'

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
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
    backgroundColor: 'white' //theme
  },
  lineView: {
    height: 0.5,
    marginVertical: 10,
    opacity: 0.4,
    backgroundColor: 'gray' //theme
  },
  titleText: {
    fontSize: Fonts.large
    // color: '' //theme
  },
  descriptionText: {
    fontSize: Fonts.medium
    // color: '' //theme
  },
  authorText: {
    fontSize: Fonts.large
    // color: '' //theme
  },
  publishText: {
    marginTop: 10,
    fontSize: Fonts.small
    // color: '' //theme
  }
})

export default styles
