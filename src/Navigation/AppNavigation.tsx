import React from 'react'
import { useColorScheme, StatusBar, StatusBarStyle } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//@ts-ignore
import Icon5 from 'react-native-vector-icons/dist/FontAwesome5'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { useForceUpdate } from '../Hooks'
import { NewsFeed, ArticleDetails, Settings, Splash } from '../Screens'
import { translate } from '../i18n/helpers'
import store, { _persistor } from '../Redux/Store'
import { StatusBarModes } from '../Constants'

import routes from './Routes'
import NavigationScreen from './NavigationScreen'
import { LightTheme, DarkTheme, Colors } from '../Themes'
import linking from './DeepLinking'

const Stack = createStackNavigator()
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
      tabBarActiveTintColor: Colors.frenchBlue,
      tabBarInactiveTintColor: Colors.lightGrey
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

const RootNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name={routes.Splash} component={Splash} />
    <Stack.Screen name={routes.TabNav} component={MainTabNavigator} />
  </Stack.Navigator>
)

const AppNavigation = () => {
  const forceUpdate = useForceUpdate()
  const scheme = useColorScheme()
  const barStyle = StatusBarModes[scheme!] as StatusBarStyle

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={_persistor}>
        <NavigationScreen onChangeLanguage={forceUpdate}>
          <StatusBar animated={true} barStyle={barStyle} />
          <NavigationContainer
            linking={linking}
            theme={scheme === 'dark' ? DarkTheme : LightTheme}
          >
            <RootNavigator />
          </NavigationContainer>
        </NavigationScreen>
      </PersistGate>
    </Provider>
  )
}

export default AppNavigation
