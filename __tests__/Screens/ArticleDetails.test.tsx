import React from 'react'

import { render } from '@testing-library/react-native'

import { ArticleDetails } from '../../src/Screens'
import { testIds } from '../../src/Screens/ArticleDetails/ArticleDetails.testIds'
import { article } from '../stubs'

const props = {
  route: {
    params: {
      article
    }
  }
}

describe('ArticleDetails Screen', () => {
  it('should render screen successfully', () => {
    const { getByTestId } = render(<ArticleDetails {...props} />)
    expect(getByTestId(testIds.ArticleDetails_Wrapper)).toBeTruthy()
    expect(getByTestId(testIds.ArticleDetails_Poster)).toBeTruthy()
    expect(getByTestId(testIds.ArticleDetails_DescriptionView)).toBeTruthy()
    expect(getByTestId(testIds.ArticleDetails_MetaView)).toBeTruthy()
  })

  it('should render articles title and description', async () => {
    const { queryByText } = render(<ArticleDetails {...props} />)
    expect(queryByText(props.route.params.article.title)).not.toBeNull()
    expect(queryByText(props.route.params.article.description)).not.toBeNull()
  })
  it('should render articles author and publish date', async () => {
    const { queryByText } = render(<ArticleDetails {...props} />)
    expect(queryByText(props.route.params.article.author)).not.toBeNull()
    expect(queryByText(props.route.params.article.publishedAt)).not.toBeNull()
  })
})
