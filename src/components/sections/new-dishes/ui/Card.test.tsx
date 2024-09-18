import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { Card, Props } from './news-card'

let testDish: Props['dish'] = {
  name: 'Test Pasta',
  price: 9.99,
  mass: 1300,
  productId: 1,
  poster: './next.svg'
}

describe('Card', () => {
  test('should render', () => {
    const { getByTestId } = render(<Card dish={testDish} />)

    expect(getByTestId('card')).toBeInTheDocument()
  })

  test('should render its content correctly', () => {
    const { getByTestId } = render(<Card dish={testDish} />)

    const poster = getByTestId('card-poster')

    expect(poster).toHaveAttribute('src', testDish.poster)
    expect(poster).toHaveAttribute('alt', testDish.name)

    const name = getByTestId('card-name')
    expect(name).toHaveTextContent(testDish.name)

    const price = getByTestId('card-attr-price')
    expect(price).toHaveTextContent(`${testDish.price}₴`)

    const mass = getByTestId('card-attr-mass')
    expect(mass).toHaveTextContent('1.3 кг')
  })
})
