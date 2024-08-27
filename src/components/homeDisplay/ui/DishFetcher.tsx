'use client'

import { Dish } from '@/types/dish.types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export type Props = {
  children(dishes: Dish[]): React.ReactNode
  renderError?(err: any): React.ReactNode
}

export const DishFetcher = ({ children, renderError }: Props) => {
  const { data: dishes, error } = useQuery({
    queryKey: ['Dishes'],
    refetchOnMount: true,
    refetchOnReconnect: true,
    queryFn: async () => {
      const dishes = await axios.get(
        process.env.NEXT_PUBLIC_SERVER_URL + '/dish'
      )

      return dishes.data
    }
  })

  if (error) return renderError ? renderError(error) : null

  return <>{children(dishes || [])}</>
}
