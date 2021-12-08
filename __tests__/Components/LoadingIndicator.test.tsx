import React from 'react'
import { render } from '@testing-library/react-native'

import { LoadingIndicator } from '../../src/Components'
import { testIds } from '../../src/Components/LoadingIndicator/LoadingIndicator.testIds'

const props = {
  disabled: false
}
describe('Search Component', () => {
  it('should render component successfully', () => {
    const { getByTestId } = render(<LoadingIndicator {...props} />)
    expect(getByTestId(testIds.LoadingIndicator_Wrapper)).toBeTruthy()
    expect(getByTestId(testIds.LoadingIndicator_Indecator)).toBeTruthy()
  })

  it('should call setData method', async () => {})
})
