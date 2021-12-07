import React, { memo } from 'react'
import { Text, View, Image, Pressable } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import routes from '../../Navigation/Routes'
import { ArticleType } from '../../Services/types'

import { testIds } from './ArticleCard.testIds'
import styles from './ArticleCard.styles'

type ArticleCardProps = {
  article: ArticleType
  testID: string
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, testID }) => {
  const { navigate } = useNavigation()

  const handleOnArticlePress = () => {
    navigate(routes.ArticleDetails, { article })
  }

  return (
    <View style={styles.container} testID={testID}>
      <Pressable
        style={styles.headingView}
        testID={testIds.ArticleCard_Heading_View}
        onPress={handleOnArticlePress}
      >
        <Text
          style={styles.headingText}
          numberOfLines={3}
          testID={testIds.ArticleCard_Heading_Text}
        >
          {article.title}
        </Text>
      </Pressable>
      <View style={styles.imageView} testID={testIds.ArticleCard_Image_View}>
        <Image
          source={{ uri: article.urlToImage }}
          style={styles.image}
          testID={testIds.ArticleCard_Image}
        />
      </View>
    </View>
  )
}

export default memo(ArticleCard)
