import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './ArticleCard.styles'
import { testIds } from './ArticleCard.testIds'

type ArticleCardProps = {
  title: string
  uri: string
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, uri }) => (
  <View style={styles.container} testID={testIds.ArticleCard_Wrapper}>
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
  </View>
)

export default ArticleCard
