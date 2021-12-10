import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'

import { AppNavigation } from './src/Navigation'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => AppNavigation)
