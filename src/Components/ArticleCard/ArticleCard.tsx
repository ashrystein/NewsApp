import React, { memo } from 'react'
import { Text, View, Image, Pressable } from 'react-native'

import styles from './ArticleCard.styles'
import { testIds } from './ArticleCard.testIds'
import { useNavigation } from '@react-navigation/native'
import routes from '../../Navigation/Routes'
import { ArticleType } from '../../Services/types'

type ArticleCardProps = {
  article: ArticleType
  testID: string
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, testID }) => {
  const { navigate } = useNavigation()

  const handleOnArticlePress = () => {
    navigate(routes.ArticleDetails)
  }

  return (
    <Pressable
      style={styles.container}
      testID={testID}
      onPress={handleOnArticlePress}
    >
      <View
        style={styles.headingView}
        testID={testIds.ArticleCard_Heading_View}
      >
        <Text
          style={styles.headingText}
          numberOfLines={3}
          testID={testIds.ArticleCard_Heading_Text}
        >
          {article.title}
        </Text>
      </View>
      <View style={styles.imageView} testID={testIds.ArticleCard_Image_View}>
        <Image
          source={{ uri: article.urlToImage }}
          style={styles.image}
          testID={testIds.ArticleCard_Image}
        />
      </View>
    </Pressable>
  )
}

export default memo(ArticleCard)
