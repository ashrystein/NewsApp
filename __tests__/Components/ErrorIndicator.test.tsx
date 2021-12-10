import React from 'react'
import { render } from '@testing-library/react-native'

import { ErrorIndicator } from '../../src/Components'
import { testIds } from '../../src/Components/ErrorIndicator/ErrorIndicator.testIds'

const props = {
  onTryAgain: jest.fn()
}
describe('Error Component', () => {
  it('should show component successfully', () => {
    const { getByTestId } = render(<ErrorIndicator {...props} />)
    expect(getByTestId(testIds.ErrorIndicator_Wrapper)).toBeTruthy()
  })
})
