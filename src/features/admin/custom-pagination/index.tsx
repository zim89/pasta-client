import { Select, SelectContent, SelectItem } from '@/shared/ui'

import { useHashParamValue, usePaginate } from '@/shared/lib/hooks'

type Props<T> = {
  data: T[]
}

export const CustomPagination = <T,>({ data }: Props<T>) => {
  const limitParam = useHashParamValue('perPage') || '5'
  const pageParam = useHashParamValue('page') || '1'

  const {} = usePaginate(data, Number(pageParam), Number(limitParam))

  return (
    <div className='flex gap-5'>
      <Select>
        <SelectContent>
          <SelectItem value='5'>5</SelectItem>
          <SelectItem value='10'>10</SelectItem>
          <SelectItem value='25'>25</SelectItem>
          <SelectItem value='50'>50</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
