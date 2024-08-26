import { render } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { ProductGrid } from './'
import { menu } from '@/data/menu.data'

describe('Product Grid', () => {
  const testProducts = menu.slice(0, 6)

  test('should render correctly', () => {
    const { getAllByTestId } = render(<ProductGrid products={testProducts} />)

    const productCards = getAllByTestId('product-card')

    expect(productCards.length).toEqual(testProducts.length)
    for (let i = 0; i < testProducts.length; i++) {
      expect(productCards[i].querySelector('h4')!.textContent).toEqual(
        testProducts[i].name
      )
    }
  })
})
