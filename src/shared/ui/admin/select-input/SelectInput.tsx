import { Select } from '@/shared/ui'
import { SelectProps } from '@radix-ui/react-select'
import { InputProps, useInput, UseInputValue } from 'react-admin'

type Props = {
  selectProps?: Omit<SelectProps, keyof UseInputValue | 'children'>
  source: string
  children?: React.ReactNode
  inputProps?: Omit<InputProps<unknown>, 'source'>
}

export const SelectInput = ({
  selectProps,
  source,
  children,
  inputProps,
}: Props) => {
  const { field, formState } = useInput({ source, ...inputProps })

  return (
    <>
      <Select
        {...selectProps}
        {...field}
        onValueChange={val => {
          field.onChange(val)
        }}
      >
        {children}
        {formState.errors[source] && (
          <p className='mt-[3px] text-xs text-[#d32f2f]'>
            {formState.errors[source]?.message?.replace(
              /@@react-admin@@"(.*?)"/,
              '$1',
            )}
          </p>
        )}
      </Select>
    </>
  )
}
