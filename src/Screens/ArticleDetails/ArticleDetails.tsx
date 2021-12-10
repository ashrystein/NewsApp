import React from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import FastImage from 'react-native-fast-image'

import { ArticleType } from '../../Services/types'
import { useStyleSheet } from '../../Hooks'

import Styles from './ArticleDetails.styles'
import { testIds } from './ArticleDetails.testIds'
import { BodySection, MetaSection } from './Components'

type RouteParamList = {
  route: {
    params: ArticleType
  }
}

type SectionType = {
  children: React.ReactNode
  testID: string
}

const ArticleDetails: React.FC<RouteParamList> = ({ route }) => {
  const styles = useStyleSheet(Styles)
  const {
    params: { title, description, author, publishedAt, urlToImage }
  } = route

  const Sectin = ({ children, testID }: SectionType) => (
    <View style={styles.wrapperView} testID={testID}>
      {children}
    </View>
  )

  return (
    <SafeAreaView
      style={styles.container}
      testID={testIds.ArticleDetails_Wrapper}
    >
      <ScrollView>
        <FastImage
          source={{ uri: urlToImage }}
          style={styles.poster}
          testID={testIds.ArticleDetails_Poster}
          resizeMode="cover"
        />
        <Sectin testID={testIds.ArticleDetails_DescriptionView}>
          <BodySection title={title} description={description} />
        </Sectin>
        <Sectin testID={testIds.ArticleDetails_MetaView}>
          <MetaSection author={author} publishedAt={publishedAt} />
        </Sectin>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ArticleDetails
