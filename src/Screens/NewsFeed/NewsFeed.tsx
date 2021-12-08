import React, { useEffect, useState } from 'react'
import { SafeAreaView, FlatList } from 'react-native'

import { ArticleCard, Search, LoadingIndicator } from '../../Components'
import { getNews } from '../../Services/Apis'
import { useFetch } from '../../Hooks'
import { NewsDataType, ArticleType } from '../../Services/types'

import styles from './NewsFeed.styles'
import { testIds } from './NewsFeed.testIds'

const NewsFeed = () => {
  const [articles, setArticles] = useState<ArticleType[]>([])
  const [searchArticles, setSearchArticles] = useState<ArticleType[]>([])
  const { isLoading, data, get: getArticles } = useFetch<NewsDataType>(getNews)

  useEffect(() => {
    getArticles()
  }, [])

  useEffect(() => {
    if (data) {
      setArticles(data.articles)
      setSearchArticles(data.articles)
    }
  }, [data])

  const renderItem = ({
    item,
    index
  }: {
    item: ArticleType
    index: number
  }) => (
    <ArticleCard
      article={item}
      testID={`${testIds.NewsFeed_List_Item}${index}`}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <Search data={articles} setData={setSearchArticles} />
      <FlatList
        data={searchArticles}
        renderItem={renderItem}
        keyExtractor={(item) => item?.title}
        showsVerticalScrollIndicator={false}
        testID={testIds.NewsFeed_List_Wrapper}
        refreshing={isLoading}
        onRefresh={getArticles}
        removeClippedSubviews={true}
        initialNumToRender={10}
      />
      <LoadingIndicator disabled={!isLoading || articles.length} />
    </SafeAreaView>
  )
}

export default NewsFeed
