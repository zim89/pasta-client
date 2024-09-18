import { fireEvent, render } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { Ingredient, Ingredients } from './Ingredients'
import { initIngredients } from '@/shared/lib/utils/product-card-funcs'

describe('Ingredients', () => {
  test('should render', () => {
    const { getByTestId } = render(
      <Ingredients
        handleChangeQuantity={vi.fn()}
        ingredientsQuantity={{}}
        ingredients={[]}
      />
    )

    expect(getByTestId('ingredients-container')).toBeInTheDocument()
  })

  test("should render all ingredients' attributes correctly", () => {
    const testIngredient = { name: 'борошно', mass: 150, price: 20 }
    const { getByTestId } = render(
      <Ingredient
        handleChangeQuantity={vi.fn()}
        ingredientsQuantity={initIngredients([testIngredient])}
        ingredient={testIngredient}
      />
    )

    expect(getByTestId('ingredient-name-mobile')).toHaveTextContent(
      testIngredient.name
    )
    expect(getByTestId('ingredient-name-laptop')).toHaveTextContent(
      testIngredient.name
    )

    expect(getByTestId('ingredient-image')).toHaveAttribute(
      'alt',
      testIngredient.name
    )

    expect(getByTestId('ingredient-price-mobile')).toHaveTextContent(
      `0 х ${testIngredient.price}₴`
    )
    expect(getByTestId('ingredient-price-laptop').textContent).toEqual(
      `0 х ${testIngredient.price}₴`
    )

    expect(getByTestId('ingredient-mass')).toHaveTextContent(
      `${testIngredient.mass} ${testIngredient.mass < 1000 ? 'г' : 'кг'}`
    )

    expect(getByTestId('ingredient-count-mobile')).toHaveTextContent('0')
    expect(getByTestId('ingredient-count-laptop')).toHaveTextContent('0')
  })

  test('should handle change quantity correctly', () => {
    const handler = vi.fn()

    const testIngredient = { name: 'борошно', mass: 150, price: 20 }
    const { getByTestId } = render(
      <Ingredient
        handleChangeQuantity={handler}
        ingredientsQuantity={initIngredients([testIngredient])}
        ingredient={testIngredient}
      />
    )

    // Test decreasing the quantity
    const decreaseButtonMobile = getByTestId('decrease-btn-mobile')
    const decreaseButtonLaptop = getByTestId('decrease-btn-laptop')

    fireEvent.click(decreaseButtonMobile)
    fireEvent.click(decreaseButtonLaptop)

    expect(handler).toHaveBeenCalledTimes(2)
    expect(handler).toHaveBeenCalledWith('DECREASE', testIngredient.name)

    // Test increasing the quantity
    const increaseButtonMobile = getByTestId('increase-btn-mobile')
    const increaseButtonLaptop = getByTestId('increase-btn-laptop')

    fireEvent.click(increaseButtonMobile)
    fireEvent.click(increaseButtonLaptop)

    expect(handler).toHaveBeenCalledTimes(4)
    expect(handler).toHaveBeenCalledWith('INCREASE', testIngredient.name)
  })
})
