import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './ArticleCard.styles'

type ArticleCardProps = {
  title: string
  uri: string
}

const ArticleCard = ({ title, uri }: ArticleCardProps) => (
  <View style={styles.container}>
    <View style={styles.headingView}>
      <Text style={styles.headingText} numberOfLines={3}>
        {title}
      </Text>
    </View>
    <View style={styles.imageView}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  </View>
)

export default ArticleCard
