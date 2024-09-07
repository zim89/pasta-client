'use client'

import { useEffect, useState } from 'react'
import { PlusCircle } from 'lucide-react'
import { Datagrid, ImageField, List, TextField, useGetList } from 'react-admin'
import { EntityGrid } from '@/components/entityGrid'
import { HeaderActions } from '@/components/headerActions'
import { MobileGrid } from '@/components/mobileGrid'
import { AddAdvantageForm } from '@/components/pages/advantages/AddAdvantageForm'
import { useHashParamValue } from '@/hooks/useHashValues'
import { useMedia } from '@/hooks/useMedia'
import { usePaginate } from '@/hooks/usePaginate'

export const AdvantagesList = () => {
  const { isMobileScreen } = useMedia()
  const { data } = useGetList('our-advantages')
  const [displayedRows, setDisplayedRows] = useState<any[]>(data || [])

  const limitParam = useHashParamValue('perPage')
  const pageParam = useHashParamValue('page')
  const sortParam = useHashParamValue('sort')
  const orderParam = useHashParamValue('order')

  const [currentPage, { paginated, setLimit, setCurrentPage }] = usePaginate(
    displayedRows,
    Number(pageParam),
    Number(limitParam)
  )

  useEffect(() => {
    if (data) {
      setDisplayedRows(data)
      setLimit(5)
    }
  }, [data])

  return (
    <>
      {isMobileScreen ? (
        <MobileGrid
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          displayedRows={displayedRows}
          actions={
            <HeaderActions
              title='Наші переваги'
              buttonProps={{
                text: 'Додати секцію',
                leftSection: <PlusCircle size={24} />
              }}
            >
              {() => <AddAdvantageForm />}
            </HeaderActions>
          }
          renderGrid={rows => (
            <EntityGrid displayedRows={rows}>
              <ImageField
                source='image'
                cellClassName='size-8 object-contain'
                label='Постер'
              />
              <TextField
                source='title'
                label='Найменування'
              />
              <TextField
                source='description'
                label='Опис'
              />
            </EntityGrid>
          )}
        />
      ) : (
        <List
          className='p-4'
          actions={
            <HeaderActions
              title='Наші переваги'
              buttonProps={{
                text: 'Додати секцію',
                leftSection: <PlusCircle size={24} />
              }}
            >
              {() => <AddAdvantageForm />}
            </HeaderActions>
          }
        >
          <Datagrid data={data}>
            <ImageField
              source='image'
              cellClassName='size-8 object-contain'
              label='Постер'
            />
            <TextField
              source='title'
              label='Найменування'
            />
            <TextField
              source='description'
              label='Опис'
            />
          </Datagrid>
        </List>
      )}
    </>
  )
}
