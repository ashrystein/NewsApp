import React, { useEffect, useState } from 'react'
import { SafeAreaView, FlatList } from 'react-native'

import { ArticleCard, Search, LoadingIndicator } from '../../Components'
import { getNews } from '../../Services/Apis'
import { useFetch, useStyleSheet } from '../../Hooks'
import { NewsDataType, ArticleType } from '../../Services/types'

import Styles from './NewsFeed.styles'
import { testIds } from './NewsFeed.testIds'

type ListItem = {
  item: ArticleType
  index: number
}

const NewsFeed = () => {
  const [articles, setArticles] = useState<ArticleType[]>([])
  const [page, setPage] = useState<number>(1)
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [searchArticles, setSearchArticles] = useState<ArticleType[]>([])
  const { isLoading, data, get: getArticles } = useFetch<NewsDataType>(getNews)
  const styles = useStyleSheet(Styles)

  const handleGetArticles = (nextPage: number = 1) => {
    getArticles(nextPage)
    setPage(nextPage)
  }

  const handleOnRefresh = () => {
    setArticles([])
    setSearchArticles([])
    handleGetArticles()
  }

  const onLoadMore = () => {
    !isSearching && handleGetArticles(page + 1)
  }

  useEffect(() => {
    handleGetArticles(page)
  }, [])

  useEffect(() => {
    if (data) {
      const concatinatedArticles: ArticleType[] = [
        ...articles,
        ...data.articles
      ]
      setArticles(concatinatedArticles)
      setSearchArticles(concatinatedArticles)
    }
  }, [data])

  const renderItem = ({ item, index }: ListItem) => (
    <ArticleCard
      article={item}
      testID={`${testIds.NewsFeed_List_Item}${index}`}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <Search
        data={articles}
        setData={setSearchArticles}
        setSearching={setIsSearching}
      />
      <FlatList
        data={searchArticles}
        renderItem={renderItem}
        keyExtractor={(item) => item?.title}
        showsVerticalScrollIndicator={false}
        testID={testIds.NewsFeed_List_Wrapper}
        refreshing={isLoading}
        onRefresh={handleOnRefresh}
        removeClippedSubviews={true}
        initialNumToRender={10}
        onEndReachedThreshold={0.5}
        onEndReached={onLoadMore}
      />
      <LoadingIndicator disabled={!isLoading || !!articles.length} />
    </SafeAreaView>
  )
}

export default NewsFeed
