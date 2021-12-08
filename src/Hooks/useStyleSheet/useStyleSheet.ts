import { useTheme } from '@react-navigation/native'

import StyleSheetFactory from './StyleSheetFactory'

const useStyleSheet = (styles: Object) => {
  const theme = useTheme()
  const memoizedStyle = StyleSheetFactory(theme, styles)
  return memoizedStyle
}

export default useStyleSheet
