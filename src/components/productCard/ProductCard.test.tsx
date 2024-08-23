import { fireEvent, render } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { ProductCard } from './ProductCard'
import { menu } from '@/data/menu.data'

describe('ProductCard', () => {
  test('should render', () => {
    const { getByTestId } = render(<ProductCard dish={menu[0]} />)

    expect(getByTestId('product-card')).toBeInTheDocument()
  })

  test('should render all necessary sections of the card correctly', () => {
    const { getByTestId, getByRole } = render(<ProductCard dish={menu[0]} />)

    expect(getByTestId('product-card-surface-image')).toHaveAttribute(
      'alt',
      menu[0].name
    )

    expect(getByTestId('product-card-name')).toHaveTextContent(menu[0].name)
    expect(getByTestId('product-card-desc')).toHaveTextContent(
      menu[0].description
    )

    expect(getByTestId('product-card-price')).toHaveTextContent(
      `${menu[0].price.toFixed(0)}₴`
    )
    expect(getByTestId('product-card-mass')).toHaveTextContent(
      `${menu[0].mass} ${menu[0].mass < 1000 ? 'г' : 'кг'}`
    )

    const modalButton = getByRole('modal-button')
    expect(modalButton).toBeInTheDocument()
    expect(modalButton).toHaveTextContent('Додати інгредієнт')

    expect(getByTestId('modal-close-button')).toBeInTheDocument()

    expect(getByTestId('modal-preview-name')).toHaveTextContent(menu[0].name)

    expect(getByTestId('modal-preview-total')).toHaveTextContent(
      `${menu[0].price.toFixed(1)}₴`
    )

    expect(getByTestId('modal-preview-image')).toHaveAttribute(
      'alt',
      menu[0].name
    )

    const clearButtonMobile = getByRole('modal-clear-mobile')
    expect(clearButtonMobile).toBeInTheDocument()
    expect(clearButtonMobile).toHaveTextContent('Очистити')

    const clearButtonLaptop = getByRole('modal-clear-laptop')
    expect(clearButtonLaptop).toBeInTheDocument()
    expect(clearButtonLaptop).toHaveTextContent('Очистити')

    const addButtonMobile = getByRole('modal-add-mobile')
    expect(addButtonMobile).toBeInTheDocument()
    expect(addButtonMobile).toHaveTextContent('Додати')

    const addButtonLaptop = getByRole('modal-add-laptop')
    expect(addButtonLaptop).toBeInTheDocument()
    expect(addButtonLaptop).toHaveTextContent('Додати')

    const cartButton = getByRole('cart-button')
    expect(cartButton).toBeInTheDocument()
    expect(cartButton).toHaveTextContent('До кошика')
  })

  test('should add a custom classname to a product card', () => {
    const customClassName = 'text-3xl'

    const { getByTestId } = render(
      <ProductCard
        dish={menu[0]}
        className={customClassName}
      />
    )

    expect(getByTestId('product-card')).toHaveClass(customClassName)
  })

  test('should open and close a modal', () => {
    const { getByTestId, getByRole } = render(<ProductCard dish={menu[0]} />)

    const modalContent = getByTestId('modal-content')
    const modalButton = getByRole('modal-button')
    const closeButton = getByTestId('modal-close-button')

    expect(modalContent).toHaveClass('translate-y-[-1000px]')

    fireEvent.click(modalButton)
    expect(modalContent).toHaveClass('-translate-y-14')

    fireEvent.click(closeButton)
    expect(modalContent).toHaveClass('translate-y-[-1000px]')
  })
})
