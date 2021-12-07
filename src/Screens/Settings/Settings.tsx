import React from 'react'
import { Pressable, SafeAreaView, View } from 'react-native'
import Icon5 from 'react-native-vector-icons/dist/FontAwesome5'
import { useSelector, useDispatch } from 'react-redux'

import { LocalizedText } from '../../Components'
import { changeLanguage } from '../../i18n/helpers'

import { settingsActions } from '../../Redux/Reducers/setting.reducer'

import styles from './Settings.styles'

const Settings = () => {
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
            <Icon5 name="language" size={30} color={'green'} /* theme */ />
            <LocalizedText i18nKey="English" style={styles.langItemText} />
          </View>
          {isEn && <Icon5 name="check" size={15} color={'green'} /* theme */ />}
        </Pressable>
        <Pressable
          style={styles.langItemView}
          onPress={() => onChangeLanguage('bg')}
        >
          <View style={styles.langNameItem}>
            <Icon5 name="language" size={30} color={'green'} /* theme */ />
            <LocalizedText i18nKey="Bulgarian" style={styles.langItemText} />
          </View>
          {!isEn && (
            <Icon5 name="check" size={15} color={'green'} /* theme */ />
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Settings
