import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { settingsReducer } from './Reducers/setting.reducer'

const reducers = combineReducers({
  settings: settingsReducer
})

const store = configureStore({
  reducer: reducers
})

export default store
