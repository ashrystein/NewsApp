import React from 'react'
import { Pressable } from 'react-native'
// @ts-ignore
import Icon5 from 'react-native-vector-icons/dist/FontAwesome5'

import { Colors } from '../../Themes'
import LocalizedText from '../LocalizedText/LocalizedText'

import errorStyles from './ErrorIndicator.styls'
import { testIds } from './ErrorIndicator.testIds'

type LoadingIndicatorProps = {
  onTryAgain: () => void
}

const ErrorIndicator: React.FC<LoadingIndicatorProps> = ({ onTryAgain }) => {
  return (
    <Pressable
      style={errorStyles.container}
      testID={testIds.ErrorIndicator_Wrapper}
      onPress={onTryAgain}
    >
      <LocalizedText i18nKey="retry" style={errorStyles.retryText} />
      <Icon5 name="redo-alt" size={15} color={Colors.lightGrey} />
    </Pressable>
  )
}

export default ErrorIndicator
