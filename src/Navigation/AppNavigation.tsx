import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon5 from 'react-native-vector-icons/dist/FontAwesome5'

import { NewsFeed, ArticleDetails } from '../Screens'
import { translate } from '../i18n/helpers'

import routes from './Routes'

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

const MainTabNavigator = () => (
  <BottomTab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'red', // theme
      tabBarInactiveTintColor: 'gray' //theme
    }}
  >
    <BottomTab.Screen
      name={routes.NewsFeed}
      component={NewsStackNavigator}
      options={{
        title: translate('News'),
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Icon5 name="newspaper" size={size} color={color} />
        )
      }}
    />
  </BottomTab.Navigator>
)

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  )
}

export default AppNavigation
