import React from 'react'
import { View, Image, Text, ScrollView, SafeAreaView } from 'react-native'

import { ArticleType } from '../../Services/types'
import { useStyleSheet } from '../../Hooks'

import Styles from './ArticleDetails.styles'
import { testIds } from './ArticleDetails.testIds'

type RouteParamList = {
  route: {
    params: {
      article: ArticleType
    }
  }
}

const ArticleDetails: React.FC<RouteParamList> = ({ route }) => {
  const styles = useStyleSheet(Styles)
  const {
    params: { article }
  } = route
  return (
    <SafeAreaView
      style={styles.container}
      testID={testIds.ArticleDetails_Wrapper}
    >
      <ScrollView>
        <Image
          source={{ uri: article.urlToImage }}
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
            {article.title}
          </Text>
          <View style={styles.lineView} />
          <Text
            style={styles.descriptionText}
            testID={testIds.ArticleDetails_DescriptionText}
          >
            {article.description}
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
            {article.author}
          </Text>
          <Text
            style={styles.publishText}
            testID={testIds.ArticleDetails_CreationText}
          >
            {article.publishedAt}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ArticleDetails
