import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { PageHeader } from './PageHeader'

describe('PageHeader', () => {
  test('should render', () => {
    const { getByTestId } = render(
      <PageHeader
        title='About Us'
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />
    )

    expect(getByTestId('breadcrumb-mobile')).toBeInTheDocument()

    expect(getByTestId('breadcrumb-link-mobile')).toHaveAttribute('href', '/')

    expect(getByTestId('breadcrumb-title')).toHaveTextContent('About Us')
  })
})
