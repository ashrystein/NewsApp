// @ts-ignore
import { memoize } from 'lodash'

import { ThemeType } from '../../Themes/types'

const StyleSheetFactory = (theme: ThemeType, styles: any) => {
  const memoizedStyles = memoize(styles)
  return memoizedStyles(theme)
}

export default StyleSheetFactory
