import React, { useEffect, useMemo } from 'react'
import { SafeAreaView, FlatList } from 'react-native'

import { ArticleCard } from '../../Components'
import { getNews } from '../../Services/Apis'
import { useFetch } from '../../Hooks'
import { NewsDataType, ArticleType } from '../../Services/types'

import styles from './NewsFeed.styles'
import { testIds } from './NewsFeed.testIds'

const NewsFeed = () => {
  const {
    isLoading,
    isError,
    data,
    get: getArticles
  } = useFetch<NewsDataType>(getNews)

  useEffect(() => {
    getArticles()
  }, [])

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
      <FlatList
        data={data?.articles}
        renderItem={renderItem}
        keyExtractor={(item) => item?.title}
        showsVerticalScrollIndicator={false}
        testID={testIds.NewsFeed_List_Wrapper}
        refreshing={isLoading}
        onRefresh={getArticles}
        removeClippedSubviews={true}
        initialNumToRender={10}
      />
    </SafeAreaView>
  )
}

export default NewsFeed
