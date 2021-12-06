import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { ArticleCard } from '../../Components'
import { getNews } from '../../Services/Apis'
import { useFetch } from '../../Hooks'
import { NewsDataType, ArticleType } from '../../Services/types'
import styles from './NewsFeed.styles'

const NewsFeed = () => {
  const { isLoading, isError, data } = useFetch<NewsDataType>(getNews)
  console.log(isLoading, isError, data)

  const renderItem = ({ item }: { item: ArticleType }) => (
    <ArticleCard uri={item.urlToImage} title={item.title} />
  )
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data?.articles}
        renderItem={renderItem}
        keyExtractor={(item) => item?.title}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default NewsFeed
