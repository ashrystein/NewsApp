import React from 'react'
import { View } from 'react-native'

import { useStyleSheet } from '../../../../Hooks'
import { testIds } from '../../ArticleDetails.testIds'
import { LocalizedText } from '../../../../Components'

import Styles from './BodySection.styles'

type BodySectionProps = {
  title: string
  description: string
}

const BodySection: React.FC<BodySectionProps> = ({ title, description }) => {
  const styles = useStyleSheet(Styles)
  return (
    <>
      <LocalizedText
        i18nKey={title}
        style={styles.titleText}
        testID={testIds.ArticleDetails_TitleText}
      />
      <View style={styles.lineView} />
      <LocalizedText
        i18nKey={description}
        style={styles.descriptionText}
        testID={testIds.ArticleDetails_DescriptionText}
      />
    </>
  )
}

export default BodySection
