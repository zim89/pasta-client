import { fireEvent, render, waitFor } from '@testing-library/react'
import * as nextMod from 'next/navigation'
import { describe, expect, test, vi } from 'vitest'
import { BurgerMenu } from './'
import * as exports from '@/data/burgerLinks.data'

vi.mock('next/navigation')

describe('BurgerMenu', () => {
  test('should render', () => {
    const { getByTestId } = render(<BurgerMenu />)

    expect(getByTestId('trigger-btn')).toBeInTheDocument()
  })

  test('should open the menu when clicking and close by clicking again', () => {
    const { getByTestId } = render(<BurgerMenu />)

    fireEvent.click(getByTestId('trigger-btn'))

    expect(getByTestId('burger-menu')).toHaveClass(
      '-translate-y-14 opacity-100'
    )

    fireEvent.click(getByTestId('trigger-btn'))

    expect(getByTestId('burger-menu')).toHaveClass(
      'translate-y-[-1000px] opacity-80'
    )
  })

  test('should close the menu when clicking X button', () => {
    const { getByTestId } = render(<BurgerMenu />)

    fireEvent.click(getByTestId('trigger-btn'))

    expect(getByTestId('burger-menu')).toHaveClass(
      '-translate-y-14 opacity-100'
    )

    fireEvent.click(getByTestId('close-btn'))

    expect(getByTestId('burger-menu')).toHaveClass(
      'translate-y-[-1000px] opacity-80'
    )
  })

  test('should set a link to active when clicking', () => {
    vi.spyOn(nextMod, 'usePathname').mockImplementation(() => '/about')

    vi.spyOn(exports, 'links', 'get').mockReturnValue([
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About Us' },
      { href: '/contacts', label: 'Contacts' }
    ])

    const { queryByTestId, getAllByTestId } = render(<BurgerMenu />)

    const selector = getAllByTestId('menu-link')
    expect(selector.length).toEqual(2)

    const activeLink = queryByTestId('active-link')

    expect(activeLink).not.toBeNull()
  })
})
