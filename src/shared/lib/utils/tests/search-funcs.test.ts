import { expect, test, vi } from 'vitest'
import { clear } from '../search-funcs'

test('should work', () => {
  let search = 'Test'

  const testFn = vi.fn(param => (search = param))
  clear(testFn)

  expect(testFn).toHaveBeenCalled()
  expect(search).toBe('')
})
