// import { memoize } from 'lodash'

import { ThemeType } from '../../Themes/types'

const StyleSheetFactory = (theme: ThemeType, styles: any) => {
  // const memoizedStyles = memoize(styles)
  return styles(theme)
}

export default StyleSheetFactory
