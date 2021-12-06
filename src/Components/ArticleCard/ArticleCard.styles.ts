import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    height: height * 0.4,
    marginVertical: 5
  },
  headingView: {
    padding: 10
  },
  imageView: {
    flex: 1
  },
  headingText: {},
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
})

export default styles
