import React from 'react'
import { Text, View, Image, Pressable } from 'react-native'

import styles from './ArticleCard.styles'
import { testIds } from './ArticleCard.testIds'

type ArticleCardProps = {
  title: string
  uri: string
  testID: string
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, uri, testID }) => (
  <Pressable style={styles.container} testID={testID}>
    <View style={styles.headingView} testID={testIds.ArticleCard_Heading_View}>
      <Text
        style={styles.headingText}
        numberOfLines={3}
        testID={testIds.ArticleCard_Heading_Text}
      >
        {title}
      </Text>
    </View>
    <View style={styles.imageView} testID={testIds.ArticleCard_Image_View}>
      <Image
        source={{ uri }}
        style={styles.image}
        testID={testIds.ArticleCard_Image}
      />
    </View>
  </Pressable>
)

export default ArticleCard
