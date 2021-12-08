import React from 'react'
import { Pressable, SafeAreaView, View } from 'react-native'
// @ts-ignore
import Icon5 from 'react-native-vector-icons/dist/FontAwesome5'
import { useSelector, useDispatch } from 'react-redux'

import { LocalizedText } from '../../Components'
import { changeLanguage } from '../../i18n/helpers'
import { useStyleSheet } from '../../Hooks'
import { settingsActions } from '../../Redux/Reducers/setting.reducer'
import { Colors } from '../../Themes'

import Styles from './Settings.styles'

const Settings = () => {
  const styles = useStyleSheet(Styles)
  const dispatch = useDispatch()
  const { language } = useSelector(
    (state: { settings: { language: string } }) => state.settings
  )
  const isEn = language === 'en'

  const onChangeLanguage = (lang: string) => {
    changeLanguage()
    dispatch(settingsActions.changeLanguage(lang))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.langView}>
        <Pressable
          style={styles.langItemView}
          onPress={() => onChangeLanguage('en')}
        >
          <View style={styles.langNameItem}>
            <Icon5 name="language" size={30} color={Colors.frenchBlue} />
            <LocalizedText i18nKey="English" style={styles.langItemText} />
          </View>
          {isEn && <Icon5 name="check" size={15} color={Colors.green} />}
        </Pressable>
        <View style={styles.lineView} />
        <Pressable
          style={styles.langItemView}
          onPress={() => onChangeLanguage('bg')}
        >
          <View style={styles.langNameItem}>
            <Icon5 name="language" size={30} color={Colors.frenchBlue} />
            <LocalizedText i18nKey="Bulgarian" style={styles.langItemText} />
          </View>
          {!isEn && <Icon5 name="check" size={15} color={Colors.green} />}
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Settings
