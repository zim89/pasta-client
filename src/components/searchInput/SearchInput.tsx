import { Search, X } from 'lucide-react'
import { clear } from '@/helpers/search.helpers'
import { Input } from '../ui/input'

export type Props = {
  value: string
  onSearch: (value: string) => void
}

export const SearchInput = ({ onSearch, value }: Props) => {
  return (
    <div className='flex items-center bg-white border border-opacity-50 border-primary-light px-5 rounded-2.5xl py-[0.125rem] my-8 w-full md:max-w-[20em] xl:max-w-[39.125em]'>
      <Search size={24} />
      <Input
        value={value}
        onChange={e => onSearch(e.target.value)}
        type='text'
        placeholder='Пошук'
        className='border-0 focus-visible:-ring-1 placeholder:font-inter text-base'
        style={{
          backgroundColor: 'transparent'
        }}
      />
      {value && (
        <X
          size={24}
          className='text-grey'
          onClick={clear.bind(null, onSearch)}
        />
      )}
    </div>
  )
}
