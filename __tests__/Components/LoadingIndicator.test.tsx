import React from 'react'
import { render } from '@testing-library/react-native'

import { LoadingIndicator } from '../../src/Components'
import { testIds } from '../../src/Components/LoadingIndicator/LoadingIndicator.testIds'

const props = {
  disabled: false
}
describe('Loading Component', () => {
  it('should show component successfully', () => {
    const { getByTestId } = render(<LoadingIndicator {...props} />)
    expect(getByTestId(testIds.LoadingIndicator_Wrapper)).toBeTruthy()
  })

  it('should not show component successfully', () => {
    props.disabled = true
    const { queryByTestId } = render(<LoadingIndicator {...props} />)
    expect(queryByTestId(testIds.LoadingIndicator_Wrapper)).toBeNull()
  })
})
