import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { BrandButton } from './BrandButton'

describe('BrandButton', () => {
  test('should render a brand button', () => {
    const { getByTestId } = render(
      <BrandButton kind='filled'>Test</BrandButton>
    )

    const brandBtn = getByTestId('brand-btn')
    expect(brandBtn).toBeInTheDocument()
    expect(brandBtn).toHaveTextContent('Test')
  })

  test('should render filled button correctly', () => {
    const { getByTestId } = render(
      <BrandButton
        kind='filled'
        primaryColor='#000'
        secondaryColor='#fff'
      ></BrandButton>
    )

    const brandBtn = getByTestId('brand-btn')

    expect(brandBtn).toHaveStyle({
      backgroundColor: '#000',
      color: '#fff'
    })
  })

  test('should render outlined button correctly', () => {
    const { getByTestId } = render(
      <BrandButton
        kind='outlined'
        primaryColor='#000'
        secondaryColor='#fff'
      ></BrandButton>
    )

    const brandBtn = getByTestId('brand-btn')

    expect(brandBtn).toHaveStyle({
      backgroundColor: '#fff',
      color: '#000',
      border: '1px solid #000'
    })
  })

  test('should add class name to brand button', () => {
    const { getByTestId } = render(
      <BrandButton
        kind='filled'
        className='text-3xl'
      >
        Test
      </BrandButton>
    )

    expect(getByTestId('brand-btn')).toHaveClass('text-3xl')
  })
})
