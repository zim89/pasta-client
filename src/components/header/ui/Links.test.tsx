import { render } from '@testing-library/react'
import * as nextMod from 'next/navigation'
import { describe, expect, test, vi } from 'vitest'
import { Links } from './Links'
import * as exports from '@/data/burgerLinks.data'

vi.mock('next/navigation')

const testLinks = [
  { href: '/', label: 'Home' },
  { href: '/testing', label: 'Testing' },
  { href: '/cookies', label: 'Cookie Policies' }
]

describe('Links', () => {
  test('should render', () => {
    const { getByTestId } = render(<Links />)

    expect(getByTestId('links')).toBeInTheDocument()
  })

  test('should render links correctly', () => {
    vi.spyOn(exports, 'links', 'get').mockReturnValue(testLinks)

    const { getAllByTestId } = render(<Links />)
    const links = getAllByTestId('link')
    expect(links.length).toBe(testLinks.length)

    for (let i = 0; i < testLinks.length; i++) {
      expect(links[i]).toHaveTextContent(testLinks[i].label)
      expect(links[i]).toHaveAttribute('href', testLinks[i].href)
    }
  })

  test('should render active link correctly', () => {
    vi.spyOn(nextMod, 'usePathname').mockImplementation(() => '/testing')
    vi.spyOn(exports, 'links', 'get').mockReturnValue(testLinks)

    const { getAllByTestId, getByTestId } = render(<Links />)
    const links = getAllByTestId('link')
    expect(links.length).toEqual(testLinks.length - 1)

    expect(getByTestId('active-link')).toHaveTextContent(testLinks[1].label)
    expect(getByTestId('active-link')).toHaveAttribute(
      'href',
      testLinks[1].href
    )
  })
})
