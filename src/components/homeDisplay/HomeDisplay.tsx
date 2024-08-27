'use client'

import Hits from '../Hits'
import { Contacts } from '../contacts'
import { Features } from '../features'
import { Hero } from '../hero'
import InstagramSection from '../instagramSection/InstagramSection'
import { NewDishes } from '../newDishes'
import { DishFetcher } from './ui/DishFetcher'

export const HomeDisplay = () => {
  return (
    <DishFetcher>
      {dishes => (
        <div className='flex flex-col pb-5 md:pb-9 xl:mb-10'>
          <Hero />
          <NewDishes
            newDishes={dishes.filter(dish => dish.isNew).slice(0, 3)}
          />
          {/* Wrapped in containers for ordering sections */}
          <div className='flex flex-col'>
            <Hits dishes={dishes.filter(dish => dish.isHit)} />
            <Features />
          </div>
          {/* Wrapped in containers for ordering sections */}
          <div className='flex flex-col'>
            <Contacts />
            <InstagramSection />
          </div>
        </div>
      )}
    </DishFetcher>
  )
}
