import { render } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import '@/lib/mockIntersectionObserver'
import { NewDishes } from './NewDishes'
import * as exports from '@/data/newDishes.data'

describe('NewDishes', () => {
  test('should render', () => {
    const { getByTestId } = render(<NewDishes newDishes={[]} />)

    expect(getByTestId('new-dishes-section')).toBeInTheDocument()
  })

  // test('should render dish cards and carousel correctly', () => {
  //   const testNewDishes = [
  //     {
  //       name: 'Test',
  //       mass: 4500,
  //       poster: '/next.svg',
  //       price: 100,
  //       productId: 1
  //     },
  //     {
  //       name: 'Test 2',
  //       mass: 400,
  //       poster: '/next.svg',
  //       price: 150,
  //       productId: 2
  //     },
  //     {
  //       name: 'Test 3',
  //       mass: 1500,
  //       poster: '/next.svg',
  //       price: 200,
  //       productId: 3
  //     }
  //   ]

  //   vi.spyOn(exports, 'newDishes', 'get').mockReturnValue(testNewDishes)
  //   const { getAllByTestId } = render(<NewDishes newDishes={testNewDishes} />)

  //   const carouselItems = getAllByTestId('carousel-item')
  //   expect(carouselItems.length).toEqual(testNewDishes.length)

  //   const dishCards = getAllByTestId('card')
  //   expect(dishCards.length - carouselItems.length).toEqual(
  //     testNewDishes.length
  //   )
  // })
})
