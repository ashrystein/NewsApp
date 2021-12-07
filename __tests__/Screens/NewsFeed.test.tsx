import React from 'react'

import { render, act, fireEvent } from '@testing-library/react-native'

import { NewsFeed } from '../../src/Screens'
import { testIds } from '../../src/Screens/NewsFeed/NewsFeed.testIds'

const article = {
  source: {
    id: '',
    name: ''
  },
  author: 'author',
  title: 'title1',
  description: 'description',
  url: '',
  urlToImage:
    'https://s.yimg.com/os/creatr-uploaded-images/2021-12/6f5ec8f0-55e4-11ec-ad4d-0378eb0e51e1',
  publishedAt: '2021-12-13',
  content: ''
}

jest.mock('../../src/Services/Apis', () => {
  return {
    getNews: jest.fn(() => ({
      status: 'ok',
      totalResults: 12,
      articles: [
        article,
        { ...article, title: 'title2' },
        { ...article, title: 'title3' }
      ]
    }))
  }
})

describe('NewsFeed Screen', () => {
  it('should render screen successfully', () => {
    const { getByTestId } = render(<NewsFeed />)
    expect(getByTestId(testIds.NewsFeed_List_Wrapper)).toBeTruthy()
  })

  it('should render articles list successfully', async () => {
    const { getByTestId } = render(<NewsFeed />)
    return new Promise((resolve) => {
      setTimeout(() => {
        expect(getByTestId(`${testIds.NewsFeed_List_Item}${0}`)).toBeTruthy()
        expect(getByTestId(`${testIds.NewsFeed_List_Item}${1}`)).toBeTruthy()
        expect(getByTestId(`${testIds.NewsFeed_List_Item}${2}`)).toBeTruthy()
        resolve(1)
      }, 1000)
    })
  })

  it('should render filterd articles only', async () => {
    const { getByTestId, queryByText } = render(<NewsFeed />)
    return new Promise((resolve) => {
      setTimeout(async () => {
        const searchInput = getByTestId('Search_Input')
        await act(() => fireEvent.changeText(searchInput, 'title1'))
        expect(queryByText('title1')).not.toBeNull()
        expect(queryByText('title3')).toBeNull()
        resolve(1)
      }, 1000)
    })
  })
})
