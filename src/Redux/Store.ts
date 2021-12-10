import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

import { settingsReducer } from './Reducers/setting.reducer'

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['settings'],
  blacklist: []
}

const settingPersistConfig = {
  key: 'settings',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['language']
}

const reducers = combineReducers({
  settings: persistReducer(settingPersistConfig, settingsReducer)
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
const persistor = persistStore(store)
export const _persistor = persistor
export default store
