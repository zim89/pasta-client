import { render } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import '@/lib/mockIntersectionObserver'
import Hits from './Hits'
import { Dish } from '@/entities/dish/model/types'
import * as exports from '@/shared/data/menu.data'

describe('Hits', () => {
  test('should render', () => {
    const { getByTestId } = render(<Hits dishes={[]} />)

    expect(getByTestId('hits-wrapper')).toBeInTheDocument()
  })

  test('should render all sections and carousel items', () => {
    const testMenu: Dish[] = [
      {
        type: 'Drink',
        composition: 'Test desc',
        image: '/next.svg',
        id: 1,
        isHit: false,
        isNew: false,
        volume: 0,
        weight: 200,
        title: 'Test',
        price: 87
      },
      {
        type: 'Pizza',
        composition: 'Test desc',
        image: '/next.svg',
        id: 2,
        isHit: false,
        isNew: false,
        volume: 0,
        weight: 200,
        title: 'Test 2',
        price: 87
      },
      {
        type: 'Pasta',
        composition: 'Test desc',
        image: '/next.svg',
        id: 3,
        isHit: false,
        isNew: false,
        volume: 0,
        weight: 200,
        title: 'Test 3',
        price: 87
      },
      {
        type: 'Other',
        composition: 'Test desc',
        image: '/next.svg',
        id: 4,
        isHit: false,
        isNew: false,
        volume: 0,
        weight: 200,
        title: 'Test 4',
        price: 87
      }
    ]

    const { getAllByTestId } = render(<Hits dishes={testMenu} />)

    // TODO: ~~~~~~~~~~~~~~~~~~~~~~~~

    const cards = getAllByTestId('product-card')
    expect(cards.length).toEqual(testMenu.length)

    const carouselItems = getAllByTestId('carousel-item')
    expect(carouselItems.length).toEqual(testMenu.length)
  })
})
