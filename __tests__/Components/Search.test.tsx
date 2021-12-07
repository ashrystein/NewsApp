import React from 'react'
import { render, act, fireEvent } from '@testing-library/react-native'

import { Search } from '../../src/Components'
import { testIds } from '../../src/Components/Search/Search.testIds'
import { article } from '../stubs'

const props = {
  data: [article, article],
  setData: jest.fn()
}
describe('Search Component', () => {
  it('should render component successfully', () => {
    const { getByTestId } = render(<Search {...props} />)
    expect(getByTestId(testIds.Search_Wrapper)).toBeTruthy()
    expect(getByTestId(testIds.Search_Input)).toBeTruthy()
  })

  it('should call setData method', async () => {
    const { getByTestId } = render(<Search {...props} />)
    const searchInput = getByTestId(testIds.Search_Input)
    await act(() => fireEvent.changeText(searchInput, 'article'))
    expect(props.setData).toHaveBeenCalled()
  })
})
