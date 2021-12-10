import React, { useEffect } from 'react'
import { View } from 'react-native'
import { LocalizedText } from '../../Components'
import { StackActions, useNavigation } from '@react-navigation/native'
import { useStyleSheet } from '../../Hooks'
import routes from '../../Navigation/Routes'

import Styles from './Splash.styles'

const Splash = ({}) => {
  const navigation = useNavigation()
  const styles = useStyleSheet(Styles)

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace(routes.TabNav))
    }, 1000)
  }, [])

  return (
    <View style={styles.container}>
      <LocalizedText i18nKey="MUSALA" style={styles.barandText} />
    </View>
  )
}

export default Splash
