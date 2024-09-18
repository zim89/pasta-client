import { Search, X } from 'lucide-react'
import { Input } from '../../shared/ui/common/input'
import { clear } from '@/shared/lib/utils/search-funcs'

export type Props = {
  value: string
  onSearch: (value: string) => void
}

export const SearchInput = ({ onSearch, value }: Props) => {
  return (
    <div className='my-8 flex w-full items-center rounded-2.5xl border border-primary-light border-opacity-50 bg-white px-5 py-[0.125rem] md:max-w-[20em] xl:max-w-[39.125em]'>
      <Search size={24} />
      <Input
        data-testid='search-input'
        value={value}
        onChange={e => onSearch(e.target.value)}
        type='text'
        placeholder='Пошук'
        className='focus-visible:-ring-1 border-0 text-base placeholder:font-inter'
        style={{
          backgroundColor: 'transparent'
        }}
      />
      {value && (
        <X
          data-testid='clear-search'
          size={24}
          className='text-grey'
          onClick={clear.bind(null, onSearch)}
        />
      )}
    </div>
  )
}
