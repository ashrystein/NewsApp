import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import LoadingIndicatorStyles from './LoadingIndicator.styls'
import { testIds } from './LoadingIndicator.testIds'

type LoadingIndicatorProps = {
  disabled: boolean
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ disabled }) => {
  if (disabled) {
    return null
  }

  return (
    <View
      style={LoadingIndicatorStyles.container}
      testID={testIds.LoadingIndicator_Wrapper}
    >
      <View
        style={LoadingIndicatorStyles.indecator}
        testID={testIds.LoadingIndicator_Indecator}
      >
        <ActivityIndicator size="large" testID="LoadingIndicator_icon" />
      </View>
    </View>
  )
}

export default LoadingIndicator
