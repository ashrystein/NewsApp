import React from 'react'
import { Text } from 'react-native'

import { useStyleSheet } from '../../../../Hooks'
import { testIds } from '../../ArticleDetails.testIds'

import Styles from './MetaSection.styles'

type MetaSectionProps = {
  author: string
  publishedAt: string
}

const MetaSection: React.FC<MetaSectionProps> = ({ author, publishedAt }) => {
  const styles = useStyleSheet(Styles)
  return (
    <>
      <Text
        style={styles.authorText}
        testID={testIds.ArticleDetails_authorText}
      >
        {author}
      </Text>
      <Text
        style={styles.publishText}
        testID={testIds.ArticleDetails_CreationText}
      >
        {publishedAt}
      </Text>
    </>
  )
}

export default MetaSection
