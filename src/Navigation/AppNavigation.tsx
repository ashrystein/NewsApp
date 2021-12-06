import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { NewsFeed } from '../Screens'

import routes from './Routes'

const Stack = createNativeStackNavigator()

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.NewsFeed} component={NewsFeed} />
  </Stack.Navigator>
)

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

export default AppNavigation