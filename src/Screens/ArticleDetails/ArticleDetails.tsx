import React from 'react'
import { View, Image, Text, ScrollView, SafeAreaView } from 'react-native'

import { ArticleType } from '../../Services/types'
import { useStyleSheet } from '../../Hooks'

import Styles from './ArticleDetails.styles'
import { testIds } from './ArticleDetails.testIds'

type RouteParamList = {
  route: {
    params: ArticleType
  }
}

const ArticleDetails: React.FC<RouteParamList> = ({ route }) => {
  const styles = useStyleSheet(Styles)
  const {
    params: { title, description, author, publishedAt, urlToImage }
  } = route

  return (
    <SafeAreaView
      style={styles.container}
      testID={testIds.ArticleDetails_Wrapper}
    >
      <ScrollView>
        <Image
          source={{ uri: urlToImage }}
          style={styles.poster}
          testID={testIds.ArticleDetails_Poster}
        />
        <View
          style={styles.wrapperView}
          testID={testIds.ArticleDetails_DescriptionView}
        >
          <Text
            style={styles.titleText}
            testID={testIds.ArticleDetails_TitleText}
          >
            {title}
          </Text>
          <View style={styles.lineView} />
          <Text
            style={styles.descriptionText}
            testID={testIds.ArticleDetails_DescriptionText}
          >
            {description}
          </Text>
        </View>
        <View
          style={styles.wrapperView}
          testID={testIds.ArticleDetails_MetaView}
        >
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
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ArticleDetails
