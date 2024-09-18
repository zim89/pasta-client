import { render } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { Footer } from './'
import * as pays from '@/shared/data/footer.data'
import * as links from '@/shared/data/links.data'

describe('Footer', () => {
  test('should render', () => {
    const { getByTestId } = render(<Footer />)

    expect(getByTestId('footer')).toBeInTheDocument()
  })

  test('should render links correctly', () => {
    const testNavLinks = [
      { href: '/contacts', label: 'Контакти' },
      { href: '/', label: 'Home' }
    ]

    const testAdditionalLinks = [
      { href: '/blog', label: 'Blog' },
      { href: '/about', label: 'About' }
    ]

    vi.spyOn(links, 'navLinks', 'get').mockReturnValue(testNavLinks)

    vi.spyOn(links, 'additionalLinks', 'get').mockReturnValue(
      testAdditionalLinks
    )

    const { getAllByTestId } = render(<Footer />)

    const navLinks = getAllByTestId('nav-link')
    const additionalLinks = getAllByTestId('additional-link')

    expect(navLinks.length).toEqual(testNavLinks.length)
    expect(additionalLinks.length).toEqual(testAdditionalLinks.length)

    for (let i = 0; i < testNavLinks.length; i++) {
      expect(navLinks[i].children[0]).toHaveTextContent(testNavLinks[i].label)
      expect(navLinks[i].children[0]).toHaveAttribute(
        'href',
        testNavLinks[i].href
      )
    }

    for (let i = 0; i < testAdditionalLinks.length; i++) {
      expect(additionalLinks[i].children[0]).toHaveTextContent(
        testAdditionalLinks[i].label
      )
      expect(additionalLinks[i].children[0]).toHaveAttribute(
        'href',
        testAdditionalLinks[i].href
      )
    }
  })

  test('should render payment cards correctly', () => {
    const testPayList = [
      { label: 'Test', src: {}, width: 30 },
      { label: 'Test 2', src: {}, width: 42 }
    ]

    vi.spyOn(pays, 'payList', 'get').mockReturnValue(testPayList)

    const { getAllByTestId } = render(<Footer />)
    const selector = getAllByTestId('payment-item')

    expect(selector.length).toEqual(testPayList.length)

    for (let i = 0; i < testPayList.length; i++) {
      expect(selector[i]).toHaveAttribute('alt', testPayList[i].label)
      expect(selector[i]).toHaveAttribute(
        'width',
        testPayList[i].width.toString()
      )
    }
  })

  test('should display current year', () => {
    const currentYear = new Date().getFullYear()
    const { getByTestId } = render(<Footer />)

    expect(getByTestId('current-year')).toHaveTextContent(
      currentYear.toString()
    )
  })
})
