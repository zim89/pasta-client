// 'use client'

// import { useState } from 'react'
// import { useDebounceValue } from 'usehooks-ts'
// import { SearchInput } from '@/components/searchInput'

// type ChildrenParams = {
//   search: string
//   setSearch: (search: string) => void
//   debouncedSearch: string
// }

// export type Props = {
//   children: (params: ChildrenParams) => React.ReactNode
// }

// export const SearchPageHeader = ({ children }: Props) => {
//   const [search, setSearch] = useState('')
//   const [debouncedSearch] = useDebounceValue(search, 300)

//   return (
//     <>
//       <div className='flex justify-center'>
//         <SearchInput
//           onSearch={(param: string) => setSearch(param)}
//           value={search}
//         />
//       </div>
//       {children({ search, setSearch, debouncedSearch })}
//     </>
//   )
// }
