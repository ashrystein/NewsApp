import React from 'react'

import { useStyleSheet } from '../../../../Hooks'
import { testIds } from '../../ArticleDetails.testIds'
import { LocalizedText } from '../../../../Components'

import Styles from './MetaSection.styles'

type MetaSectionProps = {
  author: string
  publishedAt: string
}

const MetaSection: React.FC<MetaSectionProps> = ({ author, publishedAt }) => {
  const styles = useStyleSheet(Styles)
  return (
    <>
      <LocalizedText
        i18nKey={author}
        style={styles.authorText}
        testID={testIds.ArticleDetails_authorText}
      />
      <LocalizedText
        i18nKey={publishedAt}
        style={styles.publishText}
        testID={testIds.ArticleDetails_CreationText}
      />
    </>
  )
}

export default MetaSection
