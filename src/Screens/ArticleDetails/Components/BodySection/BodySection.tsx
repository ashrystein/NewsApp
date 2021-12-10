import React from 'react'
import { View, Text } from 'react-native'

import { useStyleSheet } from '../../../../Hooks'
import { testIds } from '../../ArticleDetails.testIds'

import Styles from './BodySection.styles'

type BodySectionProps = {
  title: string
  description: string
}

const BodySection: React.FC<BodySectionProps> = ({ title, description }) => {
  const styles = useStyleSheet(Styles)
  return (
    <>
      <Text style={styles.titleText} testID={testIds.ArticleDetails_TitleText}>
        {title}
      </Text>
      <View style={styles.lineView} />
      <Text
        style={styles.descriptionText}
        testID={testIds.ArticleDetails_DescriptionText}
      >
        {description}
      </Text>
    </>
  )
}

export default BodySection
