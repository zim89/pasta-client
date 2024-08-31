'use client'

import { useState } from 'react'
import { Feature } from '@/types/feature.types'
import { useQuery } from '@tanstack/react-query'
import { MonitorSmartphone, Smartphone, Tablet } from 'lucide-react'
import {
  Datagrid,
  DatagridBody,
  DatagridCell,
  DatagridRow,
  List,
  TextField,
  useAuthenticated
} from 'react-admin'
import { LaptopFeatures } from '@/components/features/ui/LaptopFeatures'
import { MobileFeatures } from '@/components/features/ui/MobileFeatures'
import { TabletFeatures } from '@/components/features/ui/TabletFeatures'
import { cn } from '@/lib/utils'
import { axiosBase } from '@/api/interceptors'

export const MainPage = () => {
  const [featureScreen, setFeatureScreen] = useState<
    null | 'mobile' | 'tablet' | 'laptop'
  >(null)

  // Redirect to login page when unauthorized
  useAuthenticated()

  const { data } = useQuery({
    queryKey: ['features'],
    queryFn: async () => {
      const result = await axiosBase.get<Feature[]>(
        process.env.NEXT_PUBLIC_SERVER_URL + '/our-advantages'
      )

      return result.data
    }
  })

  if (!data) return null

  return (
    <div className='p-4'>
      <div className='flex items-baseline mb-4'>
        <h2 className='text-4xl  font-alegreya'>Наші переваги</h2>
        <div className='flex gap-1 ml-4'>
          <div
            className={cn(
              'bg-primary-light bg-opacity-5 py-1 px-2 rounded-md',
              featureScreen === 'mobile' && 'bg-opacity-30'
            )}
          >
            <Smartphone
              size={14}
              className='text-primary-dark'
              onClick={() => {
                featureScreen === 'mobile'
                  ? setFeatureScreen(null)
                  : setFeatureScreen('mobile')
              }}
            />
          </div>
          <div
            className={cn(
              'bg-primary-light bg-opacity-5 py-1 px-2 rounded-md',
              featureScreen === 'tablet' && 'bg-opacity-30'
            )}
          >
            <Tablet
              size={14}
              className='text-primary-dark'
              onClick={() => {
                featureScreen === 'tablet'
                  ? setFeatureScreen(null)
                  : setFeatureScreen('tablet')
              }}
            />
          </div>
          <div
            className={cn(
              'bg-primary-light bg-opacity-5 py-1 px-2 rounded-md hidden md:block',
              featureScreen === 'laptop' && 'bg-opacity-30'
            )}
          >
            <MonitorSmartphone
              size={14}
              className='text-primary-dark'
              onClick={() => {
                featureScreen === 'laptop'
                  ? setFeatureScreen(null)
                  : setFeatureScreen('laptop')
              }}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        {featureScreen === 'mobile' && (
          <MobileFeatures
            features={data}
            className='xl:grid max-w-screen-sm px-6 md:grid'
          />
        )}
        {featureScreen === 'tablet' && (
          <TabletFeatures
            features={data}
            classNames={{
              carousel: 'block xl:block max-w-min md:max-w-screen-md mt-4'
            }}
          />
        )}
        {featureScreen === 'laptop' && (
          <LaptopFeatures
            features={data}
            className='md:flex max-w-screen-xl'
          />
        )}
      </div>
      <List resource='our-advantages'>
        <Datagrid>
          <TextField source='id' />
          <TextField source='title' />
          <TextField source='description' />
        </Datagrid>
      </List>
    </div>
  )
}
