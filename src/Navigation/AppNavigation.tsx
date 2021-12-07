import React, { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon5 from 'react-native-vector-icons/dist/FontAwesome5'
import { Provider } from 'react-redux'

import { useForceUpdate } from '../Hooks'
import { NewsFeed, ArticleDetails, Settings } from '../Screens'
import { translate } from '../i18n/helpers'
import store from '../Redux/Store'

import routes from './Routes'
import NavigationScreen from './NavigationScreen'

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()

const NewsStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.NewsFeed}
      component={NewsFeed}
      options={{
        title: translate('News_Feed')
      }}
    />
    <Stack.Screen
      name={routes.ArticleDetails}
      component={ArticleDetails}
      options={{
        title: translate('Details')
      }}
    />
  </Stack.Navigator>
)

const SettingsStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.Settings}
      component={Settings}
      options={{
        title: translate('Settings')
      }}
    />
  </Stack.Navigator>
)

const MainTabNavigator = () => (
  <BottomTab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'red', // theme
      tabBarInactiveTintColor: 'gray' //theme
    }}
  >
    <BottomTab.Screen
      name={routes.NewsFeedTab}
      component={NewsStackNavigator}
      options={{
        title: translate('News'),
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Icon5 name="newspaper" size={size} color={color} />
        )
      }}
    />
    <BottomTab.Screen
      name={routes.SettingsTab}
      component={SettingsStackNavigator}
      options={{
        title: translate('Settings'),
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Icon5 name="sliders-h" size={size} color={color} />
        )
      }}
    />
  </BottomTab.Navigator>
)

const AppNavigation = () => {
  const forceUpdate = useForceUpdate()

  useEffect(() => {
    forceUpdate()
  }, [])

  return (
    <Provider store={store}>
      <NavigationScreen onChangeLanguage={forceUpdate}>
        <NavigationContainer>
          <MainTabNavigator />
        </NavigationContainer>
      </NavigationScreen>
    </Provider>
  )
}

export default AppNavigation
