import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import { describe, expect, test, vi } from 'vitest'
import { SearchInput } from './'

describe('SearchInput', () => {
  test('should render', () => {
    const { getByTestId } = render(
      <SearchInput
        onSearch={vi.fn()}
        value='Test'
      />
    )

    const input = getByTestId('search-input')

    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('Test')
  })

  test('should handle search input', async () => {
    const mockedOnSearch = vi.fn()

    const { getByTestId } = render(
      <SearchInput
        onSearch={mockedOnSearch}
        value=''
      />
    )

    const testString = 'Піцца з ананасами'

    const input = getByTestId('search-input')
    await user.type(input, testString)

    expect(mockedOnSearch).toHaveBeenCalledTimes(17)
    expect(mockedOnSearch).toHaveBeenLastCalledWith(
      testString[testString.length - 1]
    )
  })

  test('should show clear search button when search input is filled', () => {
    const mockedOnSearch = vi.fn()

    const { getByTestId } = render(
      <SearchInput
        onSearch={mockedOnSearch}
        value='Test'
      />
    )

    expect(getByTestId('search-input')).toHaveValue('Test')
    expect(getByTestId('clear-search')).toBeInTheDocument()
  })
})
