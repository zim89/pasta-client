import { render } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import '@/lib/mockIntersectionObserver'
import Hits from './Hits'
import * as exports from '@/data/menu.data'

describe('Hits', () => {
  test('should render', () => {
    const { getByTestId } = render(<Hits />)

    expect(getByTestId('hits-wrapper')).toBeInTheDocument()
  })

  test('should render all sections and carousel items', () => {
    const testMenu: exports.Dish[] = [
      {
        category: 'Drink',
        description: 'Test desc',
        imageSrc: '/next.svg',
        ingredients: [],
        mass: 200,
        name: 'Test',
        price: 87
      },
      {
        category: 'Risotto',
        description: 'Test desc',
        imageSrc: '/next.svg',
        ingredients: [],
        mass: 200,
        name: 'Test 2',
        price: 187
      },
      {
        category: 'Other',
        description: 'Test desc',
        imageSrc: '/next.svg',
        ingredients: [],
        mass: 200,
        name: 'Test 3',
        price: 47
      },
      {
        category: 'Other',
        description: 'Test desc',
        imageSrc: '/next.svg',
        ingredients: [],
        mass: 300,
        name: 'Test 4',
        price: 147
      },
      {
        category: 'Other',
        description: 'Test desc',
        imageSrc: '/next.svg',
        ingredients: [],
        mass: 300,
        name: 'Test 5',
        price: 147
      }
    ]

    vi.spyOn(exports, 'menu', 'get').mockReturnValue(testMenu)

    const { getAllByTestId } = render(<Hits />)

    // TODO: ~~~~~~~~~~~~~~~~~~~~~~~~

    const cards = getAllByTestId('product-card')
    expect(cards.length).toEqual(testMenu.length)

    const carouselItems = getAllByTestId('carousel-item')
    expect(carouselItems.length).toEqual(testMenu.length)
  })
})
