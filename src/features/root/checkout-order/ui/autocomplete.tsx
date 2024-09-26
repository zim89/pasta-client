import { InputHTMLAttributes } from 'react'
import { Input } from '@/shared/ui'
import { MapPin } from 'lucide-react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '../../../../shared/ui/common/command'

type Props = {
  inputProps: {
    value: string
    onChange: (value: string) => void
  } & Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
  suggestions: string[]
}

export function Autocomplete({ inputProps, suggestions }: Props) {
  return (
    <div className='relative min-h-10'>
      <Command className='absolute z-30 h-auto rounded-lg md:min-w-[450px]'>
        <Input
          {...inputProps}
          onChange={e => inputProps.onChange(e.target.value)}
        />
        <CommandList hidden={!inputProps.value}>
          <CommandEmpty>Вулицю не знайдено.</CommandEmpty>

          {suggestions.length > 0 && (
            <CommandGroup heading='Пропозиції'>
              {suggestions.map((suggestion, index) => (
                <CommandItem key={suggestion + index}>
                  <MapPin className='mr-2 h-4 w-4' />
                  <span>{suggestion}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </Command>
    </div>
  )
}
