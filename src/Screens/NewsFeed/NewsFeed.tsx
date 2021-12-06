import React from 'react'
import { SafeAreaView } from 'react-native'
import { ArticleCard } from '../../Components'

const NewsFeed = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <ArticleCard
      uri="https://s.yimg.com/os/creatr-uploaded-images/2021-12/6f5ec8f0-55e4-11ec-ad4d-0378eb0e51e1"
      title="Fitbit's Charge 5 tracker is back on sale for a record-low $130 at Amazon"
    />
  </SafeAreaView>
)

export default NewsFeed
