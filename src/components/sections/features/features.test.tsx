import { Features } from '.'
import { render } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import '@/lib/mockIntersectionObserver'
import * as exports from '@/data/features.data'

describe('Features', () => {
  test('should render', () => {
    const { getByTestId } = render(<Features />)
    expect(getByTestId('feature-section')).toBeInTheDocument()
  })

  test('should render features list correctly on laptop', () => {
    const testFeatures = [
      {
        title: 'Традиційні рецепти',
        desc: 'Справжня італійська кухня',
        desc_full:
          'Ми готуємо страви лише за традиційними рецептами італійської кухні',
        icon: {},
        icon_sm: {}
      },
      {
        title: 'Персоналізація страв',
        desc: 'Додай улюблений інгредієнт',
        desc_full: 'Наші клієнти можуть додати до страви улюблені інгредієнти',
        icon: {},
        icon_sm: {}
      }
    ]

    vi.spyOn(exports, 'featureList', 'get').mockReturnValue(testFeatures)

    const { getAllByTestId } = render(<Features />)
    const selectedFeatures = getAllByTestId('feature-item-laptop')

    expect(selectedFeatures.length).toEqual(testFeatures.length)

    for (let i = 0; i < selectedFeatures.length; i++) {
      expect(selectedFeatures[i].childNodes[0]).toHaveAttribute(
        'alt',
        testFeatures[i].title
      )

      expect(selectedFeatures[i].childNodes[1]).toHaveTextContent(
        testFeatures[i].title
      )

      expect(selectedFeatures[i].childNodes[2]).toHaveTextContent(
        testFeatures[i].desc_full
      )
    }
  })

  test('should render features list correctly on tablet', () => {
    const testFeatures = [
      {
        title: 'Традиційні рецепти',
        desc: 'Справжня італійська кухня',
        desc_full:
          'Ми готуємо страви лише за традиційними рецептами італійської кухні',
        icon: {},
        icon_sm: {}
      },
      {
        title: 'Персоналізація страв',
        desc: 'Додай улюблений інгредієнт',
        desc_full: 'Наші клієнти можуть додати до страви улюблені інгредієнти',
        icon: {},
        icon_sm: {}
      }
    ]

    vi.spyOn(exports, 'featureList', 'get').mockReturnValue(testFeatures)

    const { getAllByTestId } = render(<Features />)
    const selectedFeatures = getAllByTestId('feature-item-tablet')

    expect(selectedFeatures.length).toEqual(testFeatures.length)

    for (let i = 0; i < selectedFeatures.length; i++) {
      expect(selectedFeatures[i].childNodes[0]).toHaveAttribute(
        'alt',
        testFeatures[i].title
      )

      expect(selectedFeatures[i].childNodes[1]).toHaveTextContent(
        testFeatures[i].title
      )

      expect(selectedFeatures[i].childNodes[2]).toHaveTextContent(
        testFeatures[i].desc
      )
    }
  })

  test('should render features list correctly on mobile', () => {
    const testFeatures = [
      {
        title: 'Традиційні рецепти',
        desc: 'Справжня італійська кухня',
        desc_full:
          'Ми готуємо страви лише за традиційними рецептами італійської кухні',
        icon: {},
        icon_sm: {}
      },
      {
        title: 'Персоналізація страв',
        desc: 'Додай улюблений інгредієнт',
        desc_full: 'Наші клієнти можуть додати до страви улюблені інгредієнти',
        icon: {},
        icon_sm: {}
      }
    ]

    vi.spyOn(exports, 'featureList', 'get').mockReturnValue(testFeatures)

    const { getAllByTestId } = render(<Features />)
    const selectedFeatures = getAllByTestId('feature-item-mobile')

    expect(selectedFeatures.length).toEqual(testFeatures.length)

    for (let i = 0; i < selectedFeatures.length; i++) {
      expect(selectedFeatures[i].childNodes[0]).toHaveAttribute(
        'alt',
        testFeatures[i].title
      )

      expect(selectedFeatures[i].childNodes[1]).toHaveTextContent(
        testFeatures[i].title
      )

      expect(selectedFeatures[i].childNodes[2]).toHaveTextContent(
        testFeatures[i].desc
      )
    }
  })
})
