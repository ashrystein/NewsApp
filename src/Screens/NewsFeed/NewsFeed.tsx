import React, { useEffect, useState } from 'react'
import { SafeAreaView, FlatList } from 'react-native'

import {
  ArticleCard,
  Search,
  LoadingIndicator,
  ErrorIndicator
} from '../../Components'
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
  const [pageNumber, setPagination] = useState<number>(1)
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false)
  const [CurrentViewArticles, setCurrentViewArticles] = useState<ArticleType[]>(
    []
  )
  const {
    isLoading,
    isError,
    data,
    get: getArticles
  } = useFetch<NewsDataType>(getNews)
  const styles = useStyleSheet(Styles)

  const handleGetArticles = async (nextPage: number = 1) => {
    if (isLoading) return
    await getArticles(nextPage)
    setPagination(nextPage)
  }

  const handleOnRefresh = async () => {
    setIsRefreshing(true)
    setIsSearching(false)
    await handleGetArticles()
    setIsRefreshing(false)
  }

  const onLoadMore = async () => {
    !isSearching && (await handleGetArticles(pageNumber + 1))
  }

  const handleNewDataLoaded = () => {
    if (data) {
      const currentArticles = isRefreshing ? [] : articles
      const concatinatedArticles: ArticleType[] = [
        ...currentArticles,
        ...data.articles
      ]
      setArticles(concatinatedArticles)
      setCurrentViewArticles(concatinatedArticles)
    }
  }

  const handleOnError = () => {
    setArticles([])
    setCurrentViewArticles([])
  }

  useEffect(() => {
    handleGetArticles()
  }, [])

  useEffect(() => {
    if (isError) {
      handleOnError()
    } else {
      handleNewDataLoaded()
    }
  }, [data, isError])

  const renderItem = ({ item, index }: ListItem) => (
    <ArticleCard
      article={item}
      testID={`${testIds.NewsFeed_List_Item}${index}`}
    />
  )

  if (isError) {
    return (
      <SafeAreaView style={styles.container}>
        <ErrorIndicator onTryAgain={handleGetArticles} />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search
        data={articles}
        setData={setCurrentViewArticles}
        setSearching={setIsSearching}
      />
      <FlatList
        data={CurrentViewArticles}
        renderItem={renderItem}
        keyExtractor={(item) => item?.title}
        showsVerticalScrollIndicator={false}
        testID={testIds.NewsFeed_List_Wrapper}
        refreshing={isRefreshing}
        onRefresh={handleOnRefresh}
        removeClippedSubviews={true}
        initialNumToRender={10}
        onEndReachedThreshold={0.5}
        onEndReached={onLoadMore}
      />
      <LoadingIndicator
        disabled={!isLoading || !!articles.length || isRefreshing}
      />
    </SafeAreaView>
  )
}

export default NewsFeed
