import { createSlice } from '@reduxjs/toolkit'

const { actions: settingsActions, reducer: settingsReducer } = createSlice({
  name: 'settings',
  initialState: {
    language: 'en'
  },
  reducers: {
    changeLanguage: (state, { payload: language }) => ({
      ...state,
      language: language
    })
  }
})

export { settingsActions, settingsReducer }
