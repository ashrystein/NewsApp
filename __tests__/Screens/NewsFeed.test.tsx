import React from 'react'

import { render } from '@testing-library/react-native'

import { NewsFeed } from '../../src/Screens'
import { testIds } from '../../src/Screens/NewsFeed/NewsFeed.testIds'

describe('NewsFeed Screen', () => {
  it('should render screen successfully', () => {
    const { getByTestId } = render(<NewsFeed />)
    expect(getByTestId(testIds.NewsFeed_List_Wrapper)).toBeTruthy()
  })

  it('should render articles list successfully', () => {
    const { getByTestId } = render(<NewsFeed />)
    return new Promise((resolve) => {
      setTimeout(() => {
        expect(getByTestId(`${testIds.NewsFeed_List_Item}${0}`)).toBeTruthy()
        expect(getByTestId(`${testIds.NewsFeed_List_Item}${1}`)).toBeTruthy()
        resolve(1)
      }, 1000)
    })
  })
})
