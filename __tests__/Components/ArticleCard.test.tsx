import React from 'react'

import { render } from '@testing-library/react-native'

import { ArticleCard } from '../../src/Components'
import { testIds } from '../../src/Components/ArticleCard/ArticleCard.testIds'

const props = {
  title: 'article title',
  uri: 'https://s.yimg.com/os/creatr-uploaded-images/2021-12/6f5ec8f0-55e4-11ec-ad4d-0378eb0e51e1',
  testID: 'article0'
}
describe('ArticleCard Component', () => {
  it('should render component successfully', () => {
    const { getByTestId } = render(<ArticleCard {...props} />)
    expect(getByTestId(props.testID)).toBeTruthy()
    expect(getByTestId(testIds.ArticleCard_Heading_View)).toBeTruthy()
    expect(getByTestId(testIds.ArticleCard_Image_View)).toBeTruthy()
  })

  it('should render heading text successfully', () => {
    const { queryByText } = render(<ArticleCard {...props} />)
    expect(queryByText(props.title)).not.toBeNull()
    expect(queryByText('wrong')).toBeNull()
  })

  it('should render image successfully', () => {
    const { getByTestId } = render(<ArticleCard {...props} />)
    expect(getByTestId(testIds.ArticleCard_Image)).toBeTruthy()
  })
})
